"use client";

import { title } from "@/components/primitives";
import { getServerSession } from "next-auth";
import { authConfig } from "@/config/auth";
import { useSession, signOut } from "next-auth/react";
import { useSearchParams } from 'next/navigation'

import {getUserResume} from "@/lib/getUserResume"
import React, { useState } from "react";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {Chip} from "@nextui-org/chip";




export default function ResumePage() {
	const profile_data = require("@/data-template/template-hh-data.json");
	const [textAreaValue, setTextAreaValue] = React.useState("");


	const initialSkills = profile_data.skill_set
	const [skill_set, setFruits] = React.useState(initialSkills);
	
	const handleClose = (fruitToRemove:any) => {
		setFruits(skill_set.filter((fruit: any) => fruit !== fruitToRemove));
		if (skill_set.length === 1) {
		  setFruits(initialSkills);
		}
	};

	const skills_body = JSON.parse(JSON.stringify(`{"skill_set": [${skill_set.map((x: any) => `"${x}"`)}]}`))
	function updateResume() {
		const postData = async () => {

			const response = await fetch("/api/hh?resume=986544fbff0b05dce60039ed1f53716830586e", {
				method: "PUT",
				body: skills_body,
			});
			console.log(skills_body);
			return response.json();
		};
		postData().then((data) => {
			console.log(data.message);
		});
	}






	


	return (
		<section className="flex flex-col items-center justify-center gap-24">
			<h1 className={title()}>Резюме HH.ru</h1>
			{/* <div className="flex flex-col text-left item-start justify-left">
				"skill_set": {JSON.stringify(skill_set, null, 4)}

			</div> */}

			<div className="">
				<h2 className="mb-4">Навыки</h2>
				<div className="flex flex-wrap gap-2">
					{skill_set.map((skill: any, index: any) => (
						<Chip key={index} onClose={() => handleClose(skill)} variant="flat">
							{skill}
						</Chip>
					))}
				</div>
			</div>

			<div className="w-full flex flex-col gap-2 max-w-[640px]">
				
			</div>

			{/* <div className="w-full flex flex-col gap-2 max-w-[640px]">
				<Textarea
					label="Skill Set"
					labelPlacement="outside"
					placeholder="Enter your Skill Set"
					value={textAreaValue}
					onValueChange={setTextAreaValue}
				/>
				<p className="text-default-500 text-small">Textarea value: {textAreaValue}</p>
			</div> */}

			<Button onClick={updateResume}>Обновить резюме</Button>
			

		</section>
	);
}
