import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { useDispatch } from 'react-redux';

import { signup } from '../../../actions/auth/auth';
import Iconify from '../../../components/iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
    username: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
    phone: Yup.string().required('Phone number is required'),
    location: Yup.string().required('Location is required'),
  });

  const [registerForm, setRegisterForm] = useState({
    name: '',
    phone: '',
    location: '',
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    // defaultValues,
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(registerForm);
      dispatch(signup(registerForm, navigate));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField name="name" label="Name" fullWidth value={registerForm.name} onChange={handleChange} />
        <TextField name="phone" label="Phone Number" fullWidth value={registerForm.phone} onChange={handleChange} />

        <TextField name="location" label="Location" value={registerForm.location} onChange={handleChange} />
        <TextField name="username" label="Username" value={registerForm.username} onChange={handleChange} />

        <TextField
          name="password"
          label="Password"
          value={registerForm.password}
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button fullWidth size="large" type="submit" variant="contained">
          Register
        </Button>
      </Stack>
    </FormProvider>
  );
}
