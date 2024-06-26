"use client";

import React, { Suspense } from "react";
import { title } from "@/components/primitives";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, ChipProps, Tooltip, getKeyValue} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";
import {Input} from "@nextui-org/input";
import {Divider} from "@nextui-org/divider";
import { Comparison } from "@/components/comparison";

import { useSearchParams } from 'next/navigation'
import { Button } from "@nextui-org/button";

import { useState, useEffect } from "react";

import {Code} from "@nextui-org/code";
import { user } from "@nextui-org/theme";
import { redirect } from 'next/navigation'
import { Link } from "@nextui-org/link";

import {getUserToken} from "@/lib/getUserToken"




export default function HHSignInPage() {

	const searchParams = useSearchParams()
	const code = searchParams.get('code')

	const [url, setUrl] = React.useState('')
	React.useEffect(() => {
		getDownloadURL().then(setUrl)

	}, [])
	async function getDownloadURL(){
		const resultData = getUserToken(code!);
		return await Promise.resolve(resultData)
	}

	// console.log(url);

	return (
		<section className="flex flex-col items-center justify-center gap-24 ">
			<h1>Авторизация на hh.ru</h1>

			{/* <div className="flex flex-col items-center justify-center gap-2">
				SignIn Token:
				<Code size="lg">{code}</Code>
			</div> */}

			<div className="flex flex-col items-center justify-center gap-8">
				Ваш токен доступа:
				<Suspense fallback={<div>Loading...</div>}>
					<Code size="lg">{url}</Code>
					{/* <p className="opacity-60 mb-24">Скопируйте </p> */}

					{/* <Link isExternal href={'/api/hh?token=' + url}>
						<Button>Посмотреть мои резюме</Button>
					</Link> */}

					<Link  href={`/update-github?hh-token=${url}`}>
						<Button>Перейти к авторизации на Github</Button>
					</Link>

				</Suspense>
			</div>


		</section>
	);
}
