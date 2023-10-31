"use client";

import * as React from "react";
import {Input} from "@nextui-org/input";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Button, ButtonGroup} from "@nextui-org/button";

import {DeleteIcon} from "@/components/icons";

//// for use props:SkillProps
// interface SkillsProps {

// }

export const Skills = (props : any) => {
    const skills = [
		{label: "Начинающий", value: "beginner"},
		{label: "Средний", value: "intermediate"},
		{label: "Продвинутый", value: "advanced"},
	]

	return (
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
			<Button 
                color="primary" 
                variant="bordered" 
                size="lg"
                onClick = {props.onClickAction}
            >
				Добавить
			</Button>
			<Button isIconOnly color="danger" aria-label="Delete" size="lg" variant="bordered">
				<DeleteIcon />
      		</Button> 
		</div>
	);
};