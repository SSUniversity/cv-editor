// "use client";
// "use server";


import { title } from "@/components/primitives";
import React from "react";

import { authConfig } from "@/config/auth";
import { getServerSession } from "next-auth/next";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export default async function Profile() {

	const session = await getServerSession(authConfig);

	return (
		<section className="flex flex-col items-center justify-center gap-12">
			<h1 className={title()}>Вы вошли как {session?.user?.name}</h1>
			{/* <h1>Profile of {session?.user?.name}</h1> */}
      		{/* {session?.user?.image && <img src={session.user.image} alt="" />} */}

            <p>Перейдите на страницу <Link href='/resume'>Резюме</Link>, чтобы обновить ваше резюме</p>

            {/* <Link href="/hh">HH Dev Page</Link> */}

			{/* <Link href={"https://hh.ru/oauth/authorize?response_type=code&client_id=" + process.env.HH_ID}>
				<Button>Авторизация hh.ru</Button>
			</Link> */}

			{/* <Link href="/resume">
				<Button>Посмотреть резюме (API HH)</Button>
			</Link> */}

			{/* <Link href="/update-github">
				<Button>Обновить резюме на Github в свободной форме</Button>
			</Link> */}

        </section>



	);
}
