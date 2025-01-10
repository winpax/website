'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function NotFound() {
	const pathname = usePathname();
	const project = useMemo(() => {
		if (pathname.startsWith('/projects')) {
			return pathname.replace(/\/projects\/?/, '').split('/')[0];
		} else {
			return null;
		}
	}, [pathname]);

	return (
		<main className="column prose mt-16 w-screen min-w-full">
			<h1>404 Not Found</h1>
			<p className="text-center">
				I&apos;ve looked everywhere, but I can&apos;t find what you&apos;re looking for.
				<br />
				Looks like{' '}
				{project ? (
					<>
						we haven&apos;t finished working on <code>{project}</code> yet...
					</>
				) : (
					<>
						<code>{pathname}</code> does not exist
					</>
				)}
			</p>
			<span>
				<Link href="/">Return Home</Link> or <Link href={pathname}>Try Again</Link>
			</span>
		</main>
	);
}
