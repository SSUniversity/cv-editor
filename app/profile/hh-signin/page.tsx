"use client";

import React, { Suspense } from "react";
import { title } from "@/components/primitives";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, ChipProps, Tooltip, getKeyValue} from "@heroui/react";
import {Checkbox} from "@heroui/checkbox";
import {Input} from "@heroui/input";
import {Divider} from "@heroui/divider";
import { Comparison } from "@/components/comparison";

import { useSearchParams } from 'next/navigation'
import { Button } from "@heroui/button";

import { useState, useEffect } from "react";

import {Code} from "@heroui/code";
import { user } from "@heroui/theme";
import { redirect } from 'next/navigation'
import { Link } from "@heroui/link";

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
