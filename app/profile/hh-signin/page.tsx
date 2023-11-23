"use client";

import React from "react";
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




export default function HHSignInPage() {

	const searchParams = useSearchParams()
	const code = searchParams.get('code')
	
	const [userToken, setUserToken] = useState();
	useEffect(()=>{ 
		const getUserToken = async() => {
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
			myHeaders.append("Access-Control-Allow-Origin", "*");
			myHeaders.append('Access-Control-Allow-Credentials', "true")
    		myHeaders.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
    		myHeaders.append(
					'Access-Control-Allow-Headers',
					'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
				);
			// myHeaders.append("", "");
			// myHeaders.append("", "");
			// myHeaders.append("", "");
			// myHeaders.append("", "");
			// myHeaders.append("", "");
	
			var urlencoded = new URLSearchParams();
			urlencoded.append("grant_type", "authorization_code");
			urlencoded.append("client_id", process.env.HH_ID!);
			urlencoded.append("client_secret", process.env.HH_SECRET!);
			urlencoded.append("code", code!);
	
			try {
				const res = await fetch("https://hh.ru/oauth/token", {
					method: 'POST',
					headers: myHeaders,
					body: urlencoded,
					redirect: 'follow',
					// credentials: "include",
					// mode: 'no-cors'
				});
					
				const result = await res.json();
				setUserToken(result.data);
				// console.log(userToken);
				
				console.log(result);
				return result;
	
				// return(result);
			} 
			catch (error) {
				console.log(error);
			}
		};
		
		getUserToken();
	},[])




	return (
		<section className="flex flex-col items-center justify-center gap-24 ">
			<h1>HH Sign In Page</h1>

			<Code size="lg">{code}</Code>
			
			{/* reference with user list */}
			{/* {users.map((user, key) => (
        		<Card key={key} user={user} />
      		))} */}
			{/* {users.map((user, key) =>
				<div key={key}>{user}</div>
			)} */}
			{/* reference with user list */}
			
			{userToken}
			
			{/* {async getUserToken()} */}

			{/* {getUserToken.map((item,i) => <li key={i}>Test</li>)} */}

			{/* <Button onClick={getUserToken}>Получить токен пользователя</Button> */}
		
		</section>
	);
}


