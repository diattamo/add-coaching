import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Logo } from "@/components/Logo";
import LetsConnect from "@/components/LetsConnect";
import {Amplify} from "aws-amplify";
import outputs from "../../amplify_outputs.json";

export default function Home({ locale }) {
	console.log("amplify configure");
	Amplify.configure(outputs);
	const t = useTranslations();

	return (
		<main className='text-[var(--foreground)] h-screen flex items-center'>
			<div className="w-full flex items-center justify-between absolute top-0 h-40 px-6 py-4">
				<Link href="/" className="hidden lg:flex items-center" prefetch={false}>
					<Logo/>
				</Link>
				<LocaleSwitcher initialLocale={locale}/>
			</div>
			<section className='w-full px-8'>
				<div className='container mx-auto flex flex-col md:flex-row items-center h-[calc(100vh-160px)]'>
					<div className='md:w-1/2 md:pr-12 flex flex-col justify-center h-full'>
						<h1 className='text-5xl font-bold text-[var(--secondary)] mb-6'>
							{t("Home.coming_soon")}
						</h1>
						<blockquote className='text-2xl italic text-[var(--secondary)] mb-8'>
							{t("Home.quote-1")}
						</blockquote>
						<LetsConnect locale={locale}/>
					</div>
					<div className='md:w-1/2 hidden md:block h-full' />
				</div>
			</section>
		</main>
	);
}