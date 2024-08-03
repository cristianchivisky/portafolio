import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
  name: yup.string()
    .required('El nombre es obligatorio.')
    .matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]+$/, 'El nombre solo puede contener letras y espacios.')
    .min(2, 'El nombre debe tener entre 2 y 50 caracteres.')
    .max(50, 'El nombre debe tener entre 2 y 50 caracteres.'),
  email: yup.string()
    .required('El correo electrónico es obligatorio.')
    .email('El correo electrónico no es válido.')
    .max(254, 'El correo electrónico no puede tener más de 254 caracteres.'),
  message: yup.string()
    .required('El mensaje es obligatorio.')
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(1000, 'El mensaje no puede tener más de 1000 caracteres.'),
});
