'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useRouter, usePathname } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

export function Back() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<AnimatePresence>
			{pathname !== '/' && (
				<motion.button
					className="btn btn-ghost btn-lg btn-circle fixed left-5 top-5"
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
