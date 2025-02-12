import { create } from "zustand";
import { persist } from "zustand/middleware";



export interface Task {
  id: string;
  name: string;
  done: boolean;
}



interface TasksState {
  tasks: Task[];
}

interface TasksActions {
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, task: Omit<Partial<Task>, 'id'>) => void;
}

export const useTasksStore = create<TasksState & TasksActions>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
      removeTask: (id) => set((state) => ({ tasks: state.tasks.filter(el => el.id !== id) })),
      updateTask: (id, task) => set((state) => ({ tasks: state.tasks.map(el => el.id === id ? ({ ...el, ...task }) : el) })),
    }),
    {
      name: "tasks-store",
      version: 1,
      partialize: (state) => ({
        tasks: state.tasks,
      }),
    }
  )
);
