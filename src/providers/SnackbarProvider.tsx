import { SnackbarProvider as _SnackbarProvider } from 'notistack';

export const SnackbarProvider = ({ children }: { children: JSX.Element }) => {
    return (
        <_SnackbarProvider
            {...{
                maxSnack: 3,
                autoHideDuration: 1000
            }}
        >
            {children}
        </_SnackbarProvider>
    )
}
