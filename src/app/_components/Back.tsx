'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { themeChange } from 'theme-change';

export function Back() {
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<AnimatePresence>
			{pathname !== '/' && (
				<motion.button
					className="btn btn-circle btn-ghost btn-lg fixed left-5 top-5"
					title="Go back"
					onClick={() => {
						router.back();
					}}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<IoArrowBack />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
