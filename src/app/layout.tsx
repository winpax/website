import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { Back } from './_components/Back';
import './globals.scss';

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

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full w-full" data-theme="cupcake">
			<body
				className={`${roboto.className} ${robotoMono.className} box-border min-h-full w-full pb-12 text-lg antialiased`}
			>
				<Back />
				{children}
			</body>
		</html>
	);
}
