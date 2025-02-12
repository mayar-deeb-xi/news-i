import { Controller, FieldValues } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import { ParameterType } from "~/types/common";

export interface ControlledTextFieldProps<Form extends FieldValues>
  extends Omit<TextFieldProps<"outlined">, "variant"> {
  /**
   * This will allow you to provide this `import { Controller } from 'react-hook-form';` with it's props
   */
  controllerProps: Omit<ParameterType<typeof Controller<Form>>["0"], "render">;
}

/**
 * Description
 * - This component wrap `Autocomplete` to make it controlled by React Hook form
 * -
 */
export const ControlledTextField = <Form extends FieldValues>(
  props: ControlledTextFieldProps<Form>,
) => {
  const { controllerProps, ...rest } = props;

  return (
    <Controller
      {...controllerProps}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          error={!!error?.message}
          helperText={error?.message?.toString()}
          {...rest}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    />
  );
};
