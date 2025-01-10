'use client';

import { AnimatePresence, motion } from 'motion/react';

import type { Props as ProjectProps } from '../Project';

export interface Props extends ProjectProps {
	hovered: boolean;
}

export default function Header({ title, description, hovered }: Props) {
	return (
		<AnimatePresence>
			{hovered ? (
				<motion.div
					className="card-body"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
				>
					<h1 className="card-title">{title}</h1>
					<p>{description}</p>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
