"use client";
import React from "react";
import {Image} from "@nextui-org/react";
import { SocialLink } from "@/components/social-link";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";



export default function Dev2Page() {
    const profile_data = require("./template-1-data.json");
	return (
		<div>
			<h1 className="h6 text-uppercase text-center pb-4">
                {profile_data.name}
            </h1>

            <p className="text-uppercase text-center pb-2">
                {profile_data.description}
            </p>

            <SocialLink
                links = {profile_data.social_links}
            />

            <div className="grid grid-cols-8 gap-4 mb-12">
                <div className="col-start-3 col-end-7">
                    <Image
                        isZoomed
                        isBlurred
                        alt={profile_data.name + " Image"}
                        src={profile_data.profile_image}
                    />
                </div>
            </div>

			<div className="container pt-5 pb-5 text-left">
				<h2 className="h6 uppercase text-end pb-4" id="about">about me</h2>
                {profile_data.about.map((item:any) => <p>{item}</p>)}
    		</div>

            <div className="container pt-5 pb-5 text-left ">
                <h2 className="h6 uppercase text-end pb-4" id="experience">education</h2>
                {profile_data.education.map((item:any) => 
                    <Experience
                        name={item.name}
                        description={item.description}
                        start_date={item.start_date}
                        end_date={item.end_date}
                        current_date={item.current_date}
                    />
                )}
            </div>

            <div className="container pt-5 pb-5 text-left ">
                <h2 className="h6 uppercase text-end pb-4" id="experience">experience</h2>
                {profile_data.experience.map((item:any) => 
                    <Experience
                        name={item.name}
                        description={item.description}
                        start_date={item.start_date}
                        end_date={item.end_date}
                        current_date={item.current_date}
                    />
                )}
            </div>

            <div className="container pt-5 pb-5">
                <h2 className="h6 uppercase text-end pb-4" id="projects">projects by companies</h2>
                <Projects 
                    projects_list={...profile_data.projects}
                />
            </div>

	    </div>
	);
}
