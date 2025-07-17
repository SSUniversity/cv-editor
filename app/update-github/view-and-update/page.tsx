"use client";

import { title } from "@/components/primitives";
import { getServerSession } from "next-auth";
import { authConfig } from "@/config/auth";
import { useSession, signOut } from "next-auth/react";
import { useSearchParams } from 'next/navigation'

import {getUserResume} from "@/lib/getUserResume"
import React, { useState } from "react";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import {Chip} from "@heroui/chip";
import {Input} from "@heroui/input";
import { Link } from "@heroui/link";

import {Image} from "@heroui/react";
import createTokenImage from '/assets/create-token.png';
import {Snippet} from "@heroui/snippet";
// import { getServerSession } from "next-auth/next";


import {getGithubReadme} from "@/lib/getGithubReadme"
import {setGithubReadme} from "@/lib/setGithubReadme"


export default function ViewAndUpdateGithubPage() {


    const searchParams = useSearchParams()
    const token = searchParams.get('gh-token')
	const [readme, setReadme] = React.useState('')

	React.useEffect(() => {
		getReadme().then(setReadme)
	}, [])
	async function getReadme(){
		const resultData = getGithubReadme(token!);
		return await Promise.resolve(resultData)
	}



    return (
        <section className="flex flex-col items-center justify-center gap-8">
            <h1 className={title()}>Обновление резюме на Github</h1>
            <div>
                <p className="mb-2">Напишите о себе в свободной форме в формате Markdown или измените
                уже существующее описание профиля и нажмите кнопку обновления</p>
                <Textarea
                    label=""
                    // labelPlacement="outside"
                    className="max-w-full"
                    value={readme}
                    onValueChange={setReadme}
                />
            </div>
            <Link href='#'>
                <Button color='primary' onClick={()=>setGithubReadme(token!, readme)}>Обновить</Button>
            </Link>

            <div>
                <p className="mt-6 mb-2">Или воспользуйтесь шаблоном:</p>
                <Snippet symbol="" size="md">### Hi There!👋</Snippet>
            </div>


		</section>
	);
}
