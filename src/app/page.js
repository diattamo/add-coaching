import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Logo } from "@/components/Logo";
import LetsConnect from "@/components/LetsConnect";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

export default function Home({ locale }) {
	Amplify.configure(outputs);
	const t = useTranslations();

	return (
		<main className="relative text-[var(--foreground)] h-screen pt-40">
			<div className="w-full flex items-center justify-end md:justify-between absolute top-0 left-0 right-0 h-40 px-6 py-4">
				<Link href="/" className="lg:flex items-center" prefetch={false}>
					<Logo />
				</Link>
				<LocaleSwitcher initialLocale={locale} />
			</div>
			<section className="w-full px-8">
				<div className="container mx-auto flex flex-col md:flex-row items-end md:items-center h-[calc(100vh-160px)]">
					<div className="md:w-1/2 md:pr-12 flex flex-col justify-center h-full text-right md:text-left">
						<h1 className="text-5xl font-bold text-[var(--secondary)] mb-6">
							{t("Home.coming_soon")}
						</h1>
						<blockquote className="text-2xl italic text-[var(--secondary)] mb-8">
							{t("Home.quote-1")}
						</blockquote>
						<LetsConnect locale={locale} />
					</div>
					<div className="md:w-1/2 hidden md:block h-full" />
				</div>
			</section>
		</main>
	);
}