"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { link as linkStyles, user } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	// DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	ProfileCircleIcon,
	CreateIcon,
} from "@/components/icons";

import {Tooltip} from "@nextui-org/tooltip";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";

import { Logo } from "@/components/icons";

import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { data } from "autoprefixer";
import { image } from "@nextui-org/react";

export const Navbar = () => {
	// const searchInput = (
	// 	<Input
	// 		aria-label="Search"
	// 		classNames={{
	// 			inputWrapper: "bg-default-100",
	// 			input: "text-sm",
	// 		}}
	// 		endContent={
	// 			<Kbd className="hidden lg:inline-block" keys={["command"]}>
	// 				K
	// 			</Kbd>
	// 		}
	// 		labelPlacement="outside"
	// 		placeholder="Search..."
	// 		startContent={
	// 			<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
	// 		}
	// 		type="search"
	// 	/>
	// );

	const session = useSession();

  	// console.log(session);

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">CV Editor</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					{/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link> */}
					<ThemeSwitch />
				</NavbarItem>
				{/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
				<NavbarItem className="hidden md:flex gap-4">

					{/* <Button
            			// isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href=""
						startContent={<CreateIcon className="text-primary" />}
						variant="flat"
					>
						Create CV
					</Button> */}



					{session?.data ? (
						<Tooltip
						content={
							<div className="flex px-1 py-2 flex-col gap-2">
								<Button
									as={Link}
									href="/profile"
								>
									View Profile
								</Button>
								<Button color="danger" onClick={() => signOut({ callbackUrl: "/" })} >Sign out</Button>
							</div>
						}
						>
							<Button
								as={Link}
								className="text-sm font-normal text-default-600 bg-default-100"
								href={session?.data ? "/profile" : "/signin"}
								variant="flat"
								startContent={
									session?.data?.user?.image?
									<Avatar src={session?.data?.user?.image!} size="sm" className="w-6 h-6 text-tiny"/>
									:
									<ProfileCircleIcon className="text-primary" />
								}
							>
								{session?.data?.user?.name}
								{/* {session?.data?.user?.image} */}
							</Button>
						</Tooltip>
						) : (
							<Button
							as={Link}
							className="text-sm font-normal text-default-600 bg-default-100"
							href="/signin"
							startContent={
								<ProfileCircleIcon className="text-primary" />
							}
							variant="flat"
							>
								Sign In
							</Button>
					)}




				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{/* {searchInput} */}
				<div className="mx-4 mt-2 flex flex-col gap-2">

					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>

							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
							{/* <Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link> */}
						</NavbarMenuItem>
					))}
					<NextLink href={"/profile"}>Profile</NextLink>
					{/* <NextLink href={"/signin"}>Sign In</NextLink> */}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
