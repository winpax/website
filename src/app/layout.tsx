import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { Back } from './_components/Back';
import { Icons } from '$/lib/icons/icons';
import './globals.scss';
import { ThemeController } from './_components/ThemeController';
import { cookies } from 'next/headers';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700']
});

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '700']
});

export const metadata: Metadata = {
	title: 'Winpax',
	description: 'Creating blazing fast, package management solutions for the Windows platform.'
};

export default async function RootLayout({
	projects,
	children
}: Readonly<{
	projects: React.ReactNode;
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const theme = cookieStore.get('theme')?.value ?? 'valentine';

	return (
		<html lang="en" className="h-full w-full">
			<head>
				<Icons />
			</head>
			<body
				className={`${roboto.className} ${robotoMono.className} box-border min-h-full w-full pb-12 text-lg antialiased`}
			>
				<Back />
				<ThemeController defaultTheme={theme} />
				{projects}
				{children}
			</body>
		</html>
	);
}
