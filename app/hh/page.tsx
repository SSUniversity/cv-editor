"use client";

import React from "react";
import { title } from "@/components/primitives";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, ChipProps, Tooltip, getKeyValue} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";
import {Input} from "@nextui-org/input";
import {Divider} from "@nextui-org/divider";


import {users} from "./data";
import { Comparison } from "@/components/comparison";


// function Resume (name: String, description: String) {
// 	this.name = name;
// }

interface ExperienceItemProps {
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    current_date?: boolean;
}

interface ProjectItemProps {
    name: string;
    description: string;
    image: string;
    project_link?: string;
}

class Resume {
	constructor(
		public name: string,
		public description: string,
		public social_links: string[],
		public profile_image: string,
		public about: string[],
		public education: ExperienceItemProps[],
		public experience: ExperienceItemProps[],
		public projects?: ProjectItemProps[],
	){}
}


export default function HHDevPage() {
	const hh_data = require("@/data-template/template-hh-data.json");
	const service_data = require("@/data-template/template-1-data.json");
	const text_template = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	const resume = new Resume("","",[],"", [], [], [], []);
	resume.name = service_data.name;
	resume.description = service_data.description;
	resume.social_links= service_data.social_links;
	resume.profile_image = service_data.profile_image;
	resume.about = service_data.about;
	resume.education = service_data.education;
	resume.experience = service_data.experience;
	resume.projects = service_data.projects;

	// console.log(typeof resume.description)
	// console.log(Array.isArray(resume.about))
	// console.log(typeof resume.education)
	// console.log(Array.isArray(resume.education))

	// console.log(JSON.stringify(resume));

	// console.log(Resume.name[1])


	return (
		<section className="">
			<div >
				<h1 className={title()}>HH Dev Page</h1>
				<div className="mb-8"/>

				<div className="flex gap-2 mb-4 text-start">
					<div className="w-1/6 max-w-full items-start font-bold opacity-40">
						Field Name
					</div>
					<div className="w-2/6 max-w-full items-start font-bold opacity-40">
						CV Editor
					</div>
					<div className="w-2/6 max-w-full items-start font-bold opacity-40">
						hh.ru
					</div>
					<div className="w-1/6 max-w-full items-start font-bold opacity-40">
						Custom
					</div>
				</div>
				

				<Comparison name="Full Name" cv_editor={resume.name} hh_ru={resume.name}/>
				<Comparison name="Description" cv_editor={resume.description} hh_ru={resume.description}/>
				<Comparison name="Social Links" cv_editor={resume.social_links} hh_ru={resume.social_links}/>
				<Comparison name="About" cv_editor={resume.about} hh_ru={resume.about}/>
				<Comparison name="Education" cv_editor={resume.education} hh_ru={resume.education}/>
				<Comparison name="Experience" cv_editor={resume.experience} hh_ru={resume.experience}/>
				<Comparison name="Projects" cv_editor={resume.projects} hh_ru={resume.projects}/>
				
			</div>

			
			

			
		</section>
	);
}

