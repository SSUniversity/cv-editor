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


export async function getUserToken(code: string) {
	try {
		const response = await fetch('/api/hh?code=' + code);
		const data = await response.json();

		if (!data.error) {
			return data.access_token;
		} else {
			return data.error;
		}
		
	} catch (error){
		console.log(error);
	}
	
}


export default function HHSignInPage() {

	const searchParams = useSearchParams()
	const code = searchParams.get('code')
	const resultData = getUserToken(code!);

	
	return (
		<section className="flex flex-col items-center justify-center gap-24 ">
			<h1>HH Sign In Page</h1>

			<Code size="lg">{code}</Code>
			
			<Suspense fallback={<div>Loading...</div>}>
        		<Code size="lg">{resultData}</Code>
      		</Suspense>

		
		</section>
	);
}


