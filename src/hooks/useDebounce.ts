import { useRef } from "react";

/**
 *
 * Description:
 * - This hook keeps track of the most recent notification from the source and emits that only when dueTime has passed
 *
 */
export const useDebounce = <T extends Function>(
  /**
   *
   * - The function you want to trigger
   */
  fun: T,
  /**
   *
   * - Debounce time by ms
   */
  time: number,
): T => {
  const ref = useRef<any>(null);

  const tmp = (...args: any[]) => {
    ref.current && clearTimeout(ref.current);
    ref.current = setTimeout(() => fun(...args), time);
  };

  return tmp as unknown as T;
};
