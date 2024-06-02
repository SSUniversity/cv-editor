export default function ViewAndUpdateGithubLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block w-8/12 text-center justify-center">
				{children}
			</div>
		</section>
	);
}
