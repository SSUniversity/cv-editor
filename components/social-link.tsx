"use client";

import * as React from "react";
import { Link } from "@nextui-org/link";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	BehanceIcon,
	DribbleIcon,
	MailIcon,
	FacebookIcon,
	WhatsappIcon,
	YoutubeIcon,
	InternetIcon,
} from "@/components/icons";


function IconVariant(service: string, icon_color:string, icon_size:number) {
	switch(service) { 
		case "github.com": { 
			return <GithubIcon className={icon_color} size={icon_size}/>;
		} 
		case "www.behance.net" || "behance.net": { 
			return <BehanceIcon className={icon_color} size={icon_size}/>;
		} 
		case "discord.com": { 
			return <DiscordIcon className={icon_color} size={icon_size}/>;
		} 
		// case "": { 
		// 	return 1;
		// }

		default: { 
			return <InternetIcon className={icon_color} size={icon_size}/>;
		} 
	 } 
    
};


interface SocialProps {
	links: String[]
}


export const SocialLink = (props : SocialProps) => {
    
    const icon_size = 36
    const icon_color = "text-default-500"

	const social_icons = props.links.map((element) => {
		var url = new URL(element.toString());
    	return 	<Link isExternal href={element.toString()} aria-label="Github">
					{IconVariant(url.host.toString(), icon_color, icon_size)}
				</Link>;
   	});

	return (
		<section className="flex w-full flex-wrap gap-3 justify-center items-center">
			{social_icons}
        </section>
	);
};