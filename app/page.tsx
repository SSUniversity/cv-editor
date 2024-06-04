import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image"
import {Divider} from "@nextui-org/divider"
import {Textarea} from "@nextui-org/input";
import {Progress} from "@nextui-org/progress";




export default function Home() {

	return (
		<section className="flex flex-col items-center justify-center gap-24 py-8 md:py-10 ">
			<div className="flex flex-col items-center justify-center text-center gap-4">
				<h1 className={title()}>Welcome to CV Editor</h1>
				<h2 className={subtitle()}>Update your resume with ease using CV-Editor!
				Our user-friendly service makes it simple to craft a professional CV in
				just a few clicks. Say goodbye to outdated formats and hello to a standout
				resume that will impress any employer.</h2>
			</div>

			{/* <h2 className="text-default-500">Page in progress...</h2> */}


		</section>

	);
}
