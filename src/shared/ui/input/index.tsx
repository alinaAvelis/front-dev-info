import TextField, { TextFieldProps } from "@mui/material/TextField";

export type InputProps = TextFieldProps;

const Input = ({
  fullWidth = true,
  variant = "outlined",
  size = "small",
  ...props
}: InputProps) => {
  return (
    <TextField
      {...props}
      fullWidth={fullWidth}
      variant={variant}
      size={size}
    />
  );
};

export default Input;