// "use client";
// "use server";


import { title } from "@/components/primitives";
import React from "react";

import { authConfig } from "@/config/auth";
import { getServerSession } from "next-auth/next";

export default async function Profile() {

	const session = await getServerSession(authConfig);
    
	return (
		<section className="flex flex-col items-center justify-center gap-24">
			<h1 className={title()}>Profile of {session?.user?.name}</h1>
			{/* <h1>Profile of {session?.user?.name}</h1> */}
      		{/* {session?.user?.image && <img src={session.user.image} alt="" />} */}

        </section>


			
	);
}
