"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";

const SignInForm = () => {
    const router = useRouter();

    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });

        if (res && !res.error) {
            router.push("/profile");
        } else {
            console.log(res);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center flex-wrap md:flex-nowrap gap-4">
                <Input type="email" name="email" label="Email" required/>
                <Input
                    label="Password"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    name="password"
                    required
                    className="max-w-full"
                />
                <Button color="primary" type="submit">
                    Войти
                </Button>
        </form>

        
    );
};

export { SignInForm };