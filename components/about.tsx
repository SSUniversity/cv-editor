"use client";

import * as React from "react";

interface AboutProps {
    about_text: String[];
}


export const About = (props : AboutProps) => {
    const about_list = props.about_text.map((element, index) => {
        return (
            <p className="mb-4" key={index}>{element}</p>
        )
    })

    return  <>{about_list}</>
};