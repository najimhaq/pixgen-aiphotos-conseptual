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

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // ভবিষ্যতে এখানে API কল করতে পারো
    console.log('Sign Up Data:', data);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
        <h2 className='mb-6 text-center text-2xl font-bold text-gray-800'>
          Create your pixgen account
        </h2>

        <Form className='flex flex-col gap-4' onSubmit={onSubmit}>
          {/* Name */}
          <TextField isRequired name='name'>
            <Label>Full Name</Label>
            <Input placeholder='John Doe' />
            <FieldError />
          </TextField>

          {/* Email */}
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

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name='password'
            type='password'
            validate={(value) => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters';
              }
              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter';
              }
              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number';
              }
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

          {/* Buttons */}
          <div className='flex gap-2'>
            <Button type='submit' className='w-full'>
              <Check />
              Sign Up
            </Button>
            <Button type='reset' variant='secondary' className='w-full'>
              Reset
            </Button>
          </div>
        </Form>

        {/* Extra Links */}
        <p className='mt-6 text-center text-sm text-gray-600'>
          Already have an account?{' '}
          <a href='/signin' className='text-blue-600 hover:underline'>
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
