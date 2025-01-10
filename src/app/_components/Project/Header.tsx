'use client';

import { AnimatePresence, motion } from 'motion/react';

import type { Props as ProjectProps } from '../Project';

export interface Props extends ProjectProps {
	hovered: boolean;
}

export default function Header({ title, description, hovered }: Props) {
	return (
		<div className="card-body">
			<h1 className="card-title">{title}</h1>
			<AnimatePresence>
				{hovered ? (
					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						{description}
					</motion.p>
				) : undefined}
			</AnimatePresence>
		</div>
	);
}
