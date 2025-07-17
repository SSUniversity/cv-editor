"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import {signIn} from "next-auth/react"
import { useSearchParams } from "next/navigation";
import { GithubIcon } from "./icons";

// function get_hh_data(){
//     console.log("Hello world");
    
// }


export const HHButton = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/profile";

	return (
		<Button 
            // onClick={ () => signIn("auth0", { callbackUrl })}
            onClick={ () =>
                {
                    // console.log("Hello world");
                fetch('https://hh.ru/oauth/token', {
                    method: 'POST',
                    body: JSON.stringify({
                        grant_type: "authorization_code",
                        client_id: "",
                        client_secret: "",
                        code: ""

                      
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                  })
                     .then((response) => response.json())
                     .then((data) => {
                        console.log(data);
                        // Handle data
                     })
                     .catch((err) => {
                        console.log(err.message);
                     });
                }
            }
            // endContent={<GithubIcon/>}
            size="lg"
            variant="bordered"
        //     className="bg-black text-white"
        >        
			Log In with hh.ru
		</Button>
	);
};

