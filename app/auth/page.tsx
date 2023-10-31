"use client";
import React from "react";
import { title } from "@/components/primitives";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";

export default function Auth() {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    
	return (
		<section className="flex flex-col items-center justify-center gap-24">
			<h1 className={title()}>Auth</h1>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input type="email" label="Email" />
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
                    className="max-w-xs"
                />
            </div>

            <div className="flex gap-4 items-center">
                <Button color="primary">
                    Войти
                </Button>
                <Button variant="ghost">
                    Не войти
                </Button>  
            </div>

        </section>


			
	);
}
