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




export default function ResumePage() {
	
	const session = useSession();
	const profile_data = require("@/data-template/template-hh-data.json");

	const initialSkills = profile_data.skill_set
	const [skill_set, setSkill_set] = React.useState(initialSkills);
	
	const handleClose = (skillToRemove:any) => {
		setSkill_set(skill_set.filter((fruit: any) => fruit !== skillToRemove));
		if (skill_set.length === 1) {
		  setSkill_set(initialSkills);
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

	const [inputValue, setInputValue] = React.useState("");


	return (
		<section className="flex flex-col items-center justify-center gap-24">
			<h1 className={title()}>Резюме HH.ru</h1>



			<div className="">
				<h2 className="mb-4">	
					Навыки 
					<span className="opacity-100">
						{skill_set == initialSkills? 
						<div className="text-green-600"> [ не изменено ]</div> 
						: 
						<div className="text-yellow-600"> [ изменено ]</div>}
					</span>
				</h2>
				<div className="flex flex-wrap gap-2">
					{skill_set.map((skill: any, index: any) => (
						<Chip key={index} onClose={() => handleClose(skill)} variant="flat">
							{skill}
						</Chip>
					))}
				</div>
			</div>

			<div className="w-full flex flex-col gap-2 items-center justify-center max-w-[640px]">
				<Input
					label="Skill"
					placeholder="Add skill to pool"
					value={inputValue}
					onValueChange={setInputValue}
				/>
				<Button 
					className="max-w-[240px]"
					onClick={() => { setSkill_set([...skill_set, inputValue]); }}
				>
					Добавить навык
				</Button>
			</div>

			
			{/* {session?.data?.user?.email == process.env.MAX_DATA ? 
				<Button onClick={updateResume}>Обновить резюме</Button> 
				: 
				<Button onClick={updateResume}>У вас недостаточно прав</Button> 
			} */}
			
			<Button onClick={updateResume}>Обновить резюме</Button>
			

		</section>
	);
}
