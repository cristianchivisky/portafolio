import { Errors, ContactFormValues } from '@/types/formTypes'; 
import { contactFormSchema } from './yupSchema'; 
import * as yup from 'yup';

type SetErrors = (errors: Errors) => void;

export const validateForm = async (
    formValues: ContactFormValues, 
    setErrors: SetErrors
): Promise<boolean> => {
    try {
        // Valida los datos del formulario usando el esquema Yup
        await contactFormSchema.validate(formValues, { abortEarly: false });
        setErrors({}); // Limpia los errores si la validación es exitosa
        return true;
    } catch (err) {
        if (err instanceof yup.ValidationError) {
            const newErrors: Errors = {};

            // Transforma los errores de Yup en el formato esperado
            err.inner.forEach((error) => {
                if (error.path) {
                    newErrors[error.path as keyof Errors] = error.message;
                }
            });

            setErrors(newErrors);
            return false;
        }

        // Maneja otros errores aquí si es necesario
        console.error(err);
        return false;
    }
};
