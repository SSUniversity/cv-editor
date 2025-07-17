"use client";
import React from "react";
import { title } from "@/components/primitives";
import {Button, ButtonGroup} from "@heroui/button";
import {Input} from "@heroui/input";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import { SignInForm } from "@/components/sign-in-form";
import { GithubButton } from "@/components/log-in-github";
import { HHButton } from "@/components/log-in-hh";


export default function SignIn() {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);


	return (
		<section className="flex flex-col w-full items-center justify-center gap-12 1">
			<h1 className={title()}>Войти</h1>
            <SignInForm />
            or
            <div className="flex flex-col w-full gap-4 items-center ">
                <GithubButton />
                {/* <HHButton /> */}
            </div>
        </section>
	);
}
