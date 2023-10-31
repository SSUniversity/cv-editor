"use client";

import * as React from "react";
import {Image} from "@nextui-org/react";


interface ProjectProps {
    name: string;
    description: string;
    image_src: string;
    position: string
    project_link?: string;

}


export const Project = (props : ProjectProps) => {


    if (props.position == "left") {
        return (
            <div className="grid grid-cols-12 gap-2 mb-12">
                <div className="col-start-1 col-end-6 h-full flex flex-col justify-center">
                    <h2 className="h6 uppercase text-start pb-4" id="projects">{"■ " + props.name}</h2>
                    <p className="text-start">{props.description}</p>
                </div>
                <div className="col-start-7 col-end-13">
                    <Image
                        isZoomed
                        isBlurred
                        alt={props.name + "Image"}
                        src={props.image_src}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div className="grid grid-cols-12 gap-2 mb-12">
                <div className="col-start-1 col-end-7">
                    <Image
                        isZoomed
                        isBlurred
                        alt={props.name + "Image"}
                        src={props.image_src}
                    />
                </div>
                <div className="col-start-8 col-end-13 h-full flex flex-col justify-center">
                    <h2 className="h6 uppercase text-start pb-4" id="projects">{"■ " + props.name}</h2>
                    <p className="text-start">{props.description}</p>
                </div>
            </div>
        );
    }
};