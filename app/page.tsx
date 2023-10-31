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

import { Accordion1 } from "@/components/accordion";



export default function Home() {

	return (
		<section className="flex flex-col items-center justify-center gap-24 py-8 md:py-10 ">
			<div className="flex flex-col items-center justify-center text-center gap-4">
				<h1 className={title()}>Hello world, its react test</h1>
				<h2 className={subtitle()}>Beautiful, fast and modern React UI library.</h2>
				<p>Lorem ipsum dolor sit amen</p>
			</div>
			<div className="flex gap-4">
				<Button color="primary">
					Button
				</Button>
				<Button color="default" variant="bordered">
					Button
				</Button>
				<Button color="default" variant="light">
					Button
				</Button>
				<Button color="default" variant="ghost">
					Button
				</Button>
				<Button color="default" variant="flat">
					Button
				</Button>
			</div>

			<div className="flex gap-4">
				<Kbd keys={["command"]}>Х</Kbd>
				<Kbd keys={["shift"]}>У</Kbd>
				<Kbd keys={["option"]}>Й</Kbd>
			</div>  

			<CheckboxGroup
      		label="Select cities"
      		defaultValue={["buenos-aires", "london"]}
   			>
      			<Checkbox value="buenos-aires">Первый чекбокс</Checkbox>
      			<Checkbox value="sydney">Sydney</Checkbox>
      			<Checkbox value="san-francisco">San Francisco</Checkbox>
      			<Checkbox value="london">London</Checkbox>
      			<Checkbox value="tokyo">Tokyo</Checkbox>
    		</CheckboxGroup>

			<Code color="primary">npm install @nextui-org/react</Code>

			<Textarea
				label="Description"
				labelPlacement="outside"
				placeholder="Enter your description"
				className="max-w-xs"
    		/>

			<Progress aria-label="Loading..." value={40} className="max-w-md" size="md"/>

			<Accordion1/>


			<Card className="max-w-[400px]">
				<CardHeader className="flex gap-3">
					<Image
					alt="nextui logo"
					height={40}
					radius="sm"
					src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
					width={40}
					/>
					<div className="flex flex-col">
					<p className="text-md">NextUI</p>
					<p className="text-small text-default-500">nextui.org</p>
					</div>
				</CardHeader>
				<Divider/>
				<CardBody>
					<p>Make beautiful websites regardless of your design experience.</p>
				</CardBody>
				<Divider/>
				<CardFooter>
					<Link
					isExternal
					showAnchorIcon
					href="https://github.com/nextui-org/nextui"
					>
					Visit source code on GitHub.
					</Link>
				</CardFooter>
    		</Card>



{/* 
			<Table removeWrapper aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table> */}


			{/* <Checkbox defaultSelected>Option</Checkbox> */}
			
		</section>
		// <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
		// 	<div className="inline-block max-w-lg text-center justify-center">
		// 		<h1 className={title()}>Make&nbsp;</h1>
		// 		<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
		// 		<br />
		// 		<h1 className={title()}>
		// 			websites regardless of your design experience.
		// 		</h1>
		// 		<h2 className={subtitle({ class: "mt-4" })}>
		// 			Beautiful, fast and modern React UI library.
		// 		</h2>
		// 	</div>

		// 	<div className="flex gap-3">
		// 		<Link
		// 			isExternal
		// 			as={NextLink}
		// 			href={siteConfig.links.docs}
		// 			className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
		// 		>
		// 			Documentation
		// 		</Link>
		// 		<Link
		// 			isExternal
		// 			as={NextLink}
		// 			className={buttonStyles({ variant: "bordered", radius: "full" })}
		// 			href={siteConfig.links.github}
		// 		>
		// 			<GithubIcon size={20} />
		// 			GitHub
		// 		</Link>
		// 	</div>

		// 	<div className="mt-8">
		// 		<Snippet hideSymbol hideCopyButton variant="flat">
		// 			<span>
		// 				Get started by editing <Code color="primary">app/page.tsx</Code>
		// 			</span>
		// 		</Snippet>
		// 	</div>
		// </section>
	);
}
