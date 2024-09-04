import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
  name: yup.string()
    .required('Name is required.')
    .matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]+$/, 'Name can only contain letters and spaces.')
    .min(2, 'Name must be between 2 and 50 characters.')
    .max(50, 'Name must be between 2 and 50 characters.'),
  email: yup.string()
    .required('Email is required.')
    .email('Invalid email address.')
    .max(254, 'Email cannot exceed 254 characters.'),
  message: yup.string()
    .required('Message is required.')
    .min(10, 'Message must be at least 10 characters.')
    .max(1000, 'Message cannot exceed 1000 characters.'),
});
