export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "CV Editor",
	description: "Update your resume with ease using CV-Editor! Our user-friendly service makes it simple to craft a professional CV in just a few clicks. Say goodbye to outdated formats and hello to a standout resume that will impress any employer.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Dev",
      href: "/dev",
    },
	{
		label: "Template",
		href: "/template-1",
	},
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Dev",
      href: "/dev",
    },
		// {
		// 	label: "Profile",
		// 	href: "/profile",
		// },
		// {
		// 	label: "Dashboard",
		// 	href: "/dashboard",
		// },
		// {
		// 	label: "Projects",
		// 	href: "/projects",
		// },
		// {
		// 	label: "Team",
		// 	href: "/team",
		// },
		// {
		// 	label: "Calendar",
		// 	href: "/calendar",
		// },
		// {
		// 	label: "Settings",
		// 	href: "/settings",
		// },
		// {
		// 	label: "Help & Feedback",
		// 	href: "/help-feedback",
		// },
		// {
		// 	label: "Logout",
		// 	href: "/logout",
		// },
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    	sponsor: "https://patreon.com/jrgarciadev"
	},
};
