"use client";

import React from "react";
import { title } from "@/components/primitives";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, ChipProps, Tooltip, getKeyValue} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";
import {Input} from "@nextui-org/input";


import {users} from "./data";

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
		public project?: ProjectItemProps[],
	){}
}


export default function HHDevPage() {
	const hh_data = require("@/data-template/template-hh-data.json");
	const service_data = require("@/data-template/template-1-data.json");


	const resume = new Resume("","",[],"", [], [], [], []);
	resume.name = service_data.name;
	resume.description = service_data.description;
	resume.social_links= service_data.social_links;
	resume.profile_image = service_data.profile_image;
	resume.about = service_data.about;
	resume.education = service_data.education;
	resume.experience = service_data.experience;
	resume.project = service_data.projects;


	// console.log(JSON.stringify(resume));

	// console.log(Resume.name[1])



	const columns = [
		{name: "Name", uid: "name"},
		{name: "CV Editor", uid: "cveditor"},
		{name: "hh.ru", uid: "hh"},
		{name: "Custom", uid: "custom"},
	];
	  
	type User = typeof users[0];

	const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
		const cellValue = user[columnKey as keyof User];
	
		switch (columnKey) {
		  case "name":
			return (
			  <User
				avatarProps={{radius: "lg", src: user.avatar}}
				description={user.email}
				name={cellValue}
			  >
				{user.email}
			  </User>
			);
		  case "cveditor":
			return (
			  <div className="flex flex-col">
				<p className="text-bold text-sm capitalize">{cellValue}</p>
				<p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
			  </div>
			);
		  case "hh":
			return (
			  <Chip className="capitalize" size="sm" variant="flat">
				{cellValue}
			  </Chip>
			);
		  case "custom":
			return (
			  <div className="relative flex items-center gap-2">
				<Tooltip content="Details">
				  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
					{/* <EyeIcon /> */}
				  </span>
				</Tooltip>
				<Tooltip content="Edit user">
				  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
					{/* <EditIcon /> */}
				  </span>
				</Tooltip>
				<Tooltip color="danger" content="Delete user">
				  <span className="text-lg text-danger cursor-pointer active:opacity-50">
					{/* <DeleteIcon /> */}
				  </span>
				</Tooltip>
			  </div>
			);
		  default:
			return cellValue;
		} }, []);




	return (
		<section className="flex flex-col items-center justify-center gap-24 py-8 md:py-10 ">
			<div className="flex flex-col items-center justify-center text-center gap-4">
				<h1 className={title()}>HH Dev Page</h1>
			</div>

			
			<Table aria-label="Example table with custom cells" className="text-start">
				<TableHeader columns={columns}>
					{(column) => (
					<TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
						{column.name}
					</TableColumn>
					)}
				</TableHeader>
				<TableBody items={users}>
					{(item) => (
					<TableRow key={item.id}>
						{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
					</TableRow>
					)}
				</TableBody>
			</Table>
			

			

			
		</section>
	);
}

