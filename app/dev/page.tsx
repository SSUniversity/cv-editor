"use client";

import React from "react";
import { subtitle, title } from "@/components/primitives";
import {User} from "@nextui-org/user";
import {Input} from "@nextui-org/input";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Code} from "@nextui-org/code";
import { Skills } from "@/components/skills";




export default function DevPage() {
	const gender = [
		{label: "Мужской", value: "male"},
		{label: "Женский", value: "female"},
	]

	const skills = [
		{label: "Начинающий", value: "beginner"},
		{label: "Средний", value: "intermediate"},
		{label: "Продвинутый", value: "advanced"},
	]


	// const [value, setValue] = React.useState("");
	const [valueName, setValueName] = React.useState("");
	const [valuePosition, setValuePosition] = React.useState("");
	const [valueLanguage, setValueLanguage] = React.useState("");
	const [valueEducation, setValueEducation] = React.useState("");
	const [valueAbout, setValueAbout] = React.useState("");



	// 
	const [arr, setArr] = React.useState<string[]>([]);
   	const [value, setValue] = React.useState('');
   
   	// const result = arr.map((element, index) => {
    // 	return <Code key={index}>{element}</Code>;
   	// });
	
	const result = arr.map((element, index) => {
    	return <Skills 
		onClickAction={""}/>
   		});
	// 
	

	return (
		<section className="flex flex-col items-center justify-center gap-24 ">
			<h1 className={title()}>Develop page</h1>
			

			{/*  */}
			<div className="flex w-full flex-col items-center justify-center gap-4">
      			
				{result}
				<Input
					value={value}
					onChange={event => setValue(event.target.value)}
				/>
				<Button color="primary" variant="bordered" 
					onClick={event => {
						setArr([...arr, value]); 
						setValue('')
					}}>
					Добавить
				</Button>
			</div>
   			{/*  */}

			
			<div className="flex w-full flex-wrap gap-4">
				<h2 className={subtitle()}>Главная Информация</h2>
				<Input 
					type="text" 
					label="ФИО" 
					value={valueName}
        			onValueChange={setValueName}
				/>
				<Input 
					type="text" 
					label="Позиция" 
					value={valuePosition}
        			onValueChange={setValuePosition}
				/>
			</div>


			<div className="flex w-full flex-wrap gap-4">
				<h2 className={subtitle()}>Персональная информация</h2>
				<Select label="Пол">
					{gender.map((gen) => (
						<SelectItem key={gen.value} value={gen.value}>
							{gen.label}
						</SelectItem>
					))}
				</Select>
				{/* Добавить уровень знания языка */}
				<Input 
					type="text" 
					label="Знание языков" 
					value={valueLanguage}
        			onValueChange={setValueLanguage}
				/>
				<Input 
					type="text" 
					label="Образование" 
					value={valueEducation}
        			onValueChange={setValueEducation}
				/>
				<Input 
					type="text" 
					label="Расскажите о себе" 
					value={valueAbout}
        			onValueChange={setValueAbout}
				/>
			</div>
				

			<div className="flex w-full flex-wrap gap-4">
				<h2 className={subtitle()}>Опыт</h2>
				<div className="flex w-full flex-no-wrap gap-4 justify-center items-center">
					{/* починить css или ещё подумать, мб сделать сразу активным */}
					<Input 
						type="date" 
						label="Дата начала" 
						placeholder="dd.mm.yyyy"
					/>
					<Input 
						type="date" 
						label="Дата окончания" 
						placeholder="dd.mm.yyyy"
					/>
				</div>
				<Input 
					type="text" 
					label="Позиция" 
				/>
				<Input 
					type="text" 
					label="Расскажите о позиции" 
				/>
				<Button color="primary" variant="bordered">
					Добавить
				</Button>
			</div>


			<div className="flex w-full flex-wrap gap-4">
				<h2 className={subtitle()}>Умения</h2>
				
				<p className="w-full">Языки программирования</p>
				<div className="flex w-full flex-no-wrap gap-4 justify-center items-center">
					<Input 
						type="text" 
						label="Название" 
					/>
					<Select label="Уровень">
						{skills.map((skill) => (
							<SelectItem key={skill.value} value={skill.value}>
								{skill.label}
							</SelectItem>
						))}
					</Select>
					<Button color="primary" variant="bordered" size="lg">
						Добавить
					</Button>
				</div>

				<p className="w-full">Технологии</p>
				<div className="flex w-full flex-no-wrap gap-4 justify-center items-center">
					<Input 
						type="text" 
						label="Название" 
					/>
					<Select label="Уровень">
						{skills.map((skill) => (
							<SelectItem key={skill.value} value={skill.value}>
								{skill.label}
							</SelectItem>
						))}
					</Select>
					<Button color="primary" variant="bordered" size="lg">
						Добавить
					</Button>
				</div>

				<p className="w-full">Операционные системы</p>
				<div className="flex w-full flex-no-wrap gap-4 justify-center items-center">
					<Input 
						type="text" 
						label="Название" 
					/>
					<Select label="Уровень">
						{skills.map((skill) => (
							<SelectItem key={skill.value} value={skill.value}>
								{skill.label}
							</SelectItem>
						))}
					</Select>
					<Button color="primary" variant="bordered" size="lg">
						Добавить
					</Button>
				</div>

				
			</div>


			





			<div className="flex w-full flex-wrap gap-4">
				<p className="text-default-500 text-small">Input value: {valueName}</p>
				<p className="text-default-500 text-small">{valuePosition}</p>
			</div>				
			


		</section>
	);
}
