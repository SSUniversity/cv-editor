"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import {signIn} from "next-auth/react"
import { useSearchParams } from "next/navigation";
import { GithubIcon } from "./icons";

export const GithubButton = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/profile";

	return (
		<Button 
            onClick={ () => signIn("github", { callbackUrl })}
            endContent={<GithubIcon/>}
            size="lg"
            variant="bordered"
        //     className="bg-black text-white"
        >        
			Log In with GitHub
		</Button>
	);
};
