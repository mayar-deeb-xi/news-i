import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { drawerWidth } from '~/components/AppLayout';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ControlledTextField } from '~/components/ControlledTextField';
import { useTasksStore } from '~/store/tasksStore';
import { generateUUID } from '~/utils';
import { enqueueSnackbar } from 'notistack';


const schema = yup
    .object({
        name: yup.string().required().label("Task Name")
    })
    .required();

export type Form = yup.InferType<typeof schema>;


export const TaskCreatePage = () => {

    const {
        handleSubmit,
        formState: { errors }, control, reset
    } = useForm({
        resolver: yupResolver(schema),
    });

    const addTask = useTasksStore(state => state.addTask);

    const onSubmit = (data: Form) => {
        addTask({
            id: generateUUID(),
            name: data.name,
            done: false
        });
        enqueueSnackbar("Task was added successfully", { variant: 'success' });
        reset({ name: '' });
    }

    return (<Box sx={{ p: 3, borderStyle: 'solid', minHeight: '100vh', flex: 1, display: 'flex', flexDirection: 'column' }} >

        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                backgroundColor: t => t.palette.primary.main
            }} >
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', }}>
                <Typography textAlign='center' variant="h6" noWrap component="div">
                    New Task
                </Typography>
            </Toolbar>
        </AppBar>
        <Toolbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }} >
            <FormControl error={!!errors.name?.message}>
                <FormLabel htmlFor="task-name-label">Task Name</FormLabel>
                <ControlledTextField
                    controllerProps={{
                        control,
                        name: 'name'
                    }}
                    name='task-name-label'
                />
            </FormControl>

            <Box sx={{ display: 'flex' }}   >
                <Button variant='contained' sx={{ flex: 1 }} onClick={() => handleSubmit(onSubmit)()} >
                    Save
                </Button>
            </Box>
        </Box>
    </Box>
    );
}
