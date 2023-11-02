"use client";

import * as React from "react";
import {Image} from "@nextui-org/react";


interface ProjectItemProps {
    name: string;
    description: string;
    image: string;
    position: string
    project_link?: string;
}

interface ProjectsProps {
    projects_list: ProjectItemProps[];
}


export const Projects = (props : ProjectsProps) => {
    const projects = props.projects_list.map((element, index) => {
        var position_image = index % 2 == 0 ? "col-start-7 col-end-13" : "col-start-1 col-span-6 "
        var position_text = index % 2 == 0 ? "col-start-1 col-end-6" : "col-start-8 col-end-13 order-1"

        return (
            <div className="grid grid-cols-12 gap-2 mb-12" key={index}>
                <div className={position_text + " h-full flex flex-col justify-center"}>
                    <h2 className="h6 uppercase text-start pb-4" id="projects">{"■ " + element.name}</h2>
                    <p className="text-start">{element.description}</p>
                </div>
                <div className={position_image}>
                    <Image
                        isZoomed
                        isBlurred
                        alt={element.name + "Image"}
                        src={element.image}
                    />
                </div>
            </div>
        )
    })

    return  <>{projects}</>
};