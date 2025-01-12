import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useDebounce } from '~/hooks/useDebounce';
import { useURLParams } from '~/hooks/useURLParams';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"



export const TableFilters = () => {


    const { paramsState, massUpdate } = useURLParams();

    const setKeyword = useDebounce((keyword: string) => {
        massUpdate(old => ({ ...old, keyword }))
    }, 200);



    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },

    ]
    const top100Films2 = [

        { label: 'The Godfather: Part II', year: 1974 },
    ]

    return (
        <Box sx={{
            display: 'flex',
            columnGap: 2,
            px: 1, py: 1,
            borderRadius: 1, borderWidth: 1, borderStyle: 'solid',
            borderColor: t => t.palette.grey[300]
        }}>
            <TextField
                defaultValue={paramsState?.keyword ?? ''}
                onChange={(e) => setKeyword(e.target.value)}
                label="Search"
                size='small'
            />

            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Source" size='small' />}
            />

            <Autocomplete
                disablePortal
                options={top100Films2}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Category" size='small' />}
            />

        </Box>
    )
}
