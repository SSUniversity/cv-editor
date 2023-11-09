"use client";
import React from "react";
import { title } from "@/components/primitives";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import { SignInForm } from "@/components/sign-in-form";


export default function SignIn() {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    
	return (
		<section className="flex flex-col w-full items-center justify-center gap-24">
			<h1 className={title()}>Sign In</h1>

            <SignInForm />
        </section>		
	);
}