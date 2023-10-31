"use client";
import React from "react";
import {Image} from "@nextui-org/react";

import { title } from "@/components/primitives";

import { Link } from "@nextui-org/link";

import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	ProfileCircleIcon,
	BehanceIcon,
	DribbleIcon,
	MailIcon,
	FacebookIcon,
	WhatsappIcon,
	YoutubeIcon,

} from "@/components/icons";
import { SocialLink } from "@/components/social-link";
import { Experience } from "@/components/experience";
import { Project } from "@/components/project";

export default function Dev2Page() {


	return (
		<div>
			
			<h1 className="h6 text-uppercase text-center pb-4">
                cv-editor.netlify.com
            </h1>

            <p className="text-uppercase text-center pb-2">
                Hi!<br></br>I'm Max Kulakov<br></br>and I'm Designer
            </p>

            <SocialLink
                links = {["https://github.com/nesbox/TIC-80", "https://www.behance.net/KulakovMax",
                        "https://t.me/MaxKulakov", "https://discord.com/servers"]}
            />

            <div className="grid grid-cols-8 gap-4 mb-12">
                <div className="col-start-3 col-end-7">
                    <Image
                        isZoomed
                        isBlurred
                        alt="NextUI hero Image"
                        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        
                    />
                </div>
            </div>


			<div className="container pt-5 pb-5 text-left">
				<h2 className="h6 uppercase text-end pb-4" id="about">about me</h2>

				<p>I am currently a senior designer at YKSoft. I live and work in Saratov and pursue a Master's degree in Computer
					Science at the Saratov State University. <br /><br />
				</p>
				<p>I began my career in design in 2018. I started as a graphic designer and eventually realized that I’m more
					interested into the sphere of interfaces and products. Since then, I managed to work with many companies and
					in various projects, such as the Venrok sports app, the Lifetables habit tracker, and the Easy-Traveling
					travel app.
					More cool and interesting cases can be viewed below on the page. <br /><br />
				</p>
				<p>At the same time, I continue to work as a graphic designer, helping such companies as Youcon Events Group,
					Jedi.University and LoyalMed with visual and identity issues. 
				</p>
    		</div>



		<div className="container pt-5 pb-5 text-left ">
            <h2 className="h6 uppercase text-end pb-4" id="experience">education</h2>

            <Experience 
                name="Master's degree, Saratov State University"
                description="Computer Science, Mathematical Support and Administration of Information Systems"
                start_date="2022-09-01"
                end_date="2023-10-30"
                current_date={true}
            />
            <Experience 
                name="Bachelor's degree, Saratov State University"
                description="Computer Science, Mathematical Support and Administration of Information Systems. 
                Graduate work: &quot;Development of mobile application with implementation of accessibility&quot;"
                start_date="2017-09-01"
                end_date="2022-06-30"
            />

        </div>



        <div className="container pt-5 pb-5 text-left ">
            <h2 className="h6 uppercase text-end pb-4" id="experience">experience</h2>

            <Experience 
                name="Senior Designer, YKSoft"
                description="Audit, development and implementation of solutions in the products of various companies. 
                Implementation of new projects and bringing them to release. Support for existing sites 
                and the application in order to refine the functionality. Interaction with customers and 
                related teams in the process of working on projects. Managing a mini-team of designers"
                start_date="2021-04-25"
                end_date="2023-10-30"
                current_date={true}
            />

            <Experience 
                name="Interface Designer, Venrok"
                description="Launch and development of projects from an idea to a final solution with subsequent support"
                start_date="2019-10-01"
                end_date="2021-02-01"
            />

            <Experience 
                name="Designer, Youcon Events Group"
                description="Participation in the organization of events. Work on the website, printed and digital products"
                start_date="2019-02-01"
                end_date="2019-10-01"
            />

        </div>



	<div className="container pt-5 pb-5">
        <h2 className="h6 uppercase text-end pb-4" id="projects">projects by companies</h2>

        <Project 
            name="YKSoft"
            description="Work on projects for businesses in various fields from construction 
            companies to the agro-industrial complex. Creation, revision and support of websites and products. 
            Development of internal services and projects of the company."
            image_src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            position="left"
        />

        <Project 
            name="CLIMBING LINES"
            description="An app for climbers that allows you to discover new places to climb 
            and find different routes in locations. It contains selections based on users interests and 
            collections moderated by experienced guides. In addition, the trip is accompanied by a convenient 
            route tracking, which allows anyone to get the maximum of emotions from the ascent and not get lost. 
            It is also possible to share feedback on the route and update information about it."
            image_src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            position="right"
        />

        <Project 
            name="VENROK"
            description="A sports app for professional athletes that allows its users to customize 
            their workout in the most detailed way. There is not only a basic functionality with workouts and a 
            tracker, but also many parameters which allows you to train as efficiently as possible. An important 
            advantage is the possibility to add the role of a coach and the ability to join groups, followed by 
            viewing detailed statistics and analytics for each athlete who trains in your community."
            image_src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            position="left"
        />



	</div>

	</div>
	);
}
