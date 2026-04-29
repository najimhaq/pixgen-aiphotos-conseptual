// app/(auth)/signin/page.jsx
'use client';

import { Check } from '@gravity-ui/icons';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data:', data);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
        <h2 className='mb-6 text-center text-2xl font-bold text-gray-800'>
          Sign In to pixgen
        </h2>

        <Form className='flex flex-col gap-4' onSubmit={onSubmit}>
          <TextField
            isRequired
            name='email'
            type='email'
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address';
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder='john@example.com' />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name='password'
            type='password'
            validate={(value) => {
              if (value.length < 8)
                return 'Password must be at least 8 characters';
              if (!/[A-Z]/.test(value))
                return 'Password must contain at least one uppercase letter';
              if (!/[0-9]/.test(value))
                return 'Password must contain at least one number';
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder='Enter your password' />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className='flex gap-2'>
            <Button type='submit' className='w-full'>
              <Check />
              Sign In
            </Button>
            <Button type='reset' variant='secondary' className='w-full'>
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
