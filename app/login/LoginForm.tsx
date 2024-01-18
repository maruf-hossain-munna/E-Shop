'use client';

import React, { useState } from 'react';
import Input from '../components/inputs/Input';
import Button from '../components/button/Button';
import Heading from '../components/Heading';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        console.log(data);
    };

    return (
        <>
            <Heading
                title='Sign in to E~Shop '
            />
             <Button
                outline
                label="Sign Up with Google"
                icon={AiOutlineGoogle}
                onClick={() => { }}
            />

            <hr className="bg-slate-300 w-full h-px " />

            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                type="text"
                required
                register={register}
                errors={errors}
            />
            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                type="password"
                required
                register={register}
                errors={errors}
            />

            <Button
                label={isLoading ? 'Loading...' : 'Login'}
                onClick={handleSubmit(onSubmit)}
            />
            <p className="text-sm">Do not have any account?  <Link href='/register' className="underline">Register</Link>
            </p>

        </>
    );
};

export default LoginForm;