import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// @mui

import { Link, Stack, TextField, IconButton, InputAdornment, Alert, AlertTitle } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../../redux/actions/authActions';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { error: loginError, loading: loginLoading, userInfo } = userLogin;

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('El correo electrónico debe ser una dirección de correo electrónico válida').required('Email es requerido'),
    password: Yup.string().required('Contraseña es requerido'),
  });

  const formik = useFormik({
    initialValues: {
      email: 'd.chalops@gmail.com',
      password: 'pass',
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      dispatch(login(values.email, values.password));
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard/app', { replace: true });
    }
  }, [navigate, userInfo]);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Contraseña"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <br />
        {loginError ? (
          <Alert severity="error">
            <AlertTitle>Error de acceso</AlertTitle>
            {loginError}
          </Alert>
        ) : null}

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={loginLoading ? isSubmitting : null}
        >
          Iniciar
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
