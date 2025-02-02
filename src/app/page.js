import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Logo } from "@/components/Logo";

export default function Home({ locale }) {
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
						<div className='max-w-md'>
							<input
								type='email'
								placeholder={t("Home.email_placeholder")}
								className='px-6 py-3 border-2 text-[var(--secondary)] border-[var(--secondary)] rounded-lg w-full bg-transparent mb-4 placeholder-[var(--secondary)]'
							/>
							<button className='px-8 py-3 bg-[var(--secondary)] text-white font-bold rounded-lg hover:bg-[var(--primary)] transition-colors w-full'>
								{t("Home.keep_me_posted")}
							</button>
						</div>
					</div>
					<div className='md:w-1/2 hidden md:block h-full' />
				</div>
			</section>
		</main>
	);
}