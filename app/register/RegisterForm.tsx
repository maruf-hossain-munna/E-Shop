'use client';

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/button/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    // const onSubmit: SubmitHandler<FieldValues> = (data) => {
    //     setIsLoading(true)

    //     axios.post('/api/register', data).then(() => {
    //         toast.success('Account Created')

    //         signIn('credentials', {
    //             email: data.email,
    //             password: data.password,
    //             redirect: false,
    //         }).then((callback) => {
    //             if (callback?.ok) {
    //                 router.push('/cart')
    //                 router.refresh()
    //                 toast.success('Logged in')
    //             }

    //             if (callback?.error) {
    //                 toast.error(callback.error)
    //             }
    //         })
    //     }).catch(() => toast.error("Something went wrong")).finally(() => {
    //         setIsLoading(false)
    //     })
    // };

    return (
        <>
            <Heading
                title='Sign Up for E~Shop '
            />
            <Button
                outline
                label="Sign Up with Google"
                icon={AiOutlineGoogle}
                onClick={() => { }}
            />
            <hr className="bg-slate-300 w-full h-px " />


            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                type="text"
                required
                register={register}
                errors={errors}
            />
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
                label={isLoading ? 'Loading...' : 'Sign Up'}
                onClick={() =>{}}
            />
            <p className="text-sm">Already have any account?  <Link href='/login' className="underline">Log in</Link>
            </p>

        </>
    );
};

export default RegisterForm;