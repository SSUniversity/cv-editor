"use client";
import React from "react";
import {Image} from "@heroui/react";
import { SocialLink } from "@/components/social-link";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";



export default function Template1Page() {
    const profile_data = require("@/data-template/template-1-data.json");
	return (
		<div>
			<h1 className="h6 text-uppercase text-center pb-4">
                {profile_data.name}
            </h1>

            <p className="text-uppercase text-center pb-2">
                {profile_data.description}
            </p>

            <SocialLink links = {profile_data.social_links}/>

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
                <About about_text={...profile_data.about}/>
    		</div>

            <div className="container pt-5 pb-5 text-left ">
                <h2 className="h6 uppercase text-end pb-4" id="experience">education</h2>
                <Experience experience_list={...profile_data.education}/>
            </div>

            <div className="container pt-5 pb-5 text-left ">
                <h2 className="h6 uppercase text-end pb-4" id="experience">experience</h2>
                <Experience experience_list={...profile_data.experience}/>
            </div>

            <div className="container pt-5 pb-5">
                <h2 className="h6 uppercase text-end pb-4" id="projects">projects by companies</h2>
                <Projects projects_list={...profile_data.projects}/>
            </div>

	    </div>
	);
}
