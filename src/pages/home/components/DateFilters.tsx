import { Box, Button } from '@mui/material';
import { useDebounce } from '~/hooks/useDebounce';
import { useURLParams } from '~/hooks/useURLParams';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        from: yup
            .date()
            .typeError('${path} is invalid')
            .max(new Date(), '${path} can not be future')
            .nullable()
            .label('From Date'),
        to: yup
            .date()
            .typeError('${path} is invalid')
            .min(yup.ref('from'), "can't be before From Date")
            .max(new Date(), '${path} can not be future')
            .nullable()
            .label('To Date')
    })
    .required()

export type Form = yup.InferType<typeof schema>;


export const DateFilters = () => {
    const { handleSubmit, control } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
    });

    const onSubmit = handleSubmit((data: Form) => console.log(data))


    const { paramsState, massUpdate } = useURLParams();

    const setKeyword = useDebounce((keyword: string) => {
        massUpdate(old => ({ ...old, keyword }))
    }, 200);

    return (
        <Box sx={{
            display: 'flex',
            columnGap: 2,
            px: 1, py: 1,
            borderRadius: 1, borderWidth: 1, borderStyle: 'solid',
            borderColor: t => t.palette.grey[300]
        }}>
            <Controller
                name='from'
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => <DatePicker
                    value={value}
                    onChange={(value) => {
                        onChange(value)
                    }}
                    label="From Date"
                    slotProps={{ textField: { size: 'small', helperText: error?.message, error: !!error?.message } }}

                />}
            />
            <Controller
                name='to'
                control={control}
                render={({ field: { onChange, value, onBlur, ref }, fieldState: { error } }) => <DatePicker
                    value={value}
                    onChange={(value) => {
                        onChange(value)
                    }}

                    label="To Date"
                    slotProps={{ textField: { size: 'small', helperText: error?.message, error: !!error?.message, onBlur, ref } }}
                />}
            />


            <Button onClick={() => onSubmit()}>
                Apply Dates
            </Button>
        </Box>
    )
}
