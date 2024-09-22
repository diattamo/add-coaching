import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 bg-primary text-primary-foreground py-4 shadow-md">
			<div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon" className="lg:hidden text-secondary">
							<MenuIcon className="h-6 w-6" />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<nav className="grid gap-2 py-6">
							<Link
								href="/"
								className="flex w-full items-center py-2 text-lg font-semibold text-secondary hover:text-secondary-foreground"
								prefetch={false}
							>
								Home
							</Link>
							<Link
								href="/about"
								className="flex w-full items-center py-2 text-lg font-semibold text-secondary hover:text-secondary-foreground"
								prefetch={false}
							>
								About
							</Link>
							<Link
								href="/services"
								className="flex w-full items-center py-2 text-lg font-semibold text-secondary hover:text-secondary-foreground"
								prefetch={false}
							>
								Services
							</Link>
							<Link
								href="/contact"
								className="flex w-full items-center py-2 text-lg font-semibold text-secondary hover:text-secondary-foreground"
								prefetch={false}
							>
								Contact
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
				<Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
					<MountainIcon className="h-6 w-6 text-secondary" />
					<span className="sr-only">Aminata Dia</span>
				</Link>
				<nav className="ml-auto hidden lg:flex gap-6">
					<Link
						href="/"
						className="group inline-flex h-9 w-max items-center justify-center rounded-md text-secondary hover:text-secondary-foreground px-4 py-2 text-sm font-medium transition-colors"
						prefetch={false}
					>
						Home
					</Link>
					<Link
						href="/about"
						className="group inline-flex h-9 w-max items-center justify-center rounded-md text-secondary hover:text-secondary-foreground px-4 py-2 text-sm font-medium transition-colors"
						prefetch={false}
					>
						About
					</Link>
					<Link
						href="/services"
						className="group inline-flex h-9 w-max items-center justify-center rounded-md text-secondary hover:text-secondary-foreground px-4 py-2 text-sm font-medium transition-colors"
						prefetch={false}
					>
						Services
					</Link>
					<Link
						href="/contact"
						className="group inline-flex h-9 w-max items-center justify-center rounded-md text-secondary hover:text-secondary-foreground px-4 py-2 text-sm font-medium transition-colors"
						prefetch={false}
					>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
}

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" y1="6" x2="20" y2="6" />
			<line x1="4" y1="12" x2="20" y2="12" />
			<line x1="4" y1="18" x2="20" y2="18" />
		</svg>
	);
}

function MountainIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M8 3L12 11L17 6L22 21H2L8 3Z" />
		</svg>
	);
}
