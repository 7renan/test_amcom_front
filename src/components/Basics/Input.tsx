import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

export interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  mask?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel
          htmlFor={name}
          color="gray.900"
          fontWeight="bold"
          mb="3px"
          fontSize="14px"
        >
          {label}
        </FormLabel>
      )}

      <ChakraInput
        id={name}
        name={name}
        ref={ref}
        {...rest}
        focusBorderColor="primary.500"
        borderColor="gray.500"
        border="2px"
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
