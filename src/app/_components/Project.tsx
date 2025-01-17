'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { springTransition } from '$/lib/transitions';
import Header from './Project/Header';

export interface Props {
	title: string;
	description: string;
	link: Link;
	alternate?: boolean;
}

interface Link {
	label: string;
	href: string;
	image: StaticImageData | string;
}

function HeroImage({ link }: Props) {
	return (
		<Image
			src={link.image}
			alt={link.label}
			className="max-w-[50vw] rounded-box bg-stone-100"
			{...(typeof link.image === 'string' ? { width: 1200, height: 630 } : { placeholder: 'blur' })}
		/>
	);
}

const MotionLink = motion.create(Link);

export default function Project(props: Props) {
	const [hovered, setHovered] = useState(false);

	const { link } = props;

	return (
		<MotionLink
			transition={springTransition}
			layout
			className="card m-5 min-w-[50vw] max-w-[50vw] bg-base-100 shadow-xl"
			href={link.href}
			aria-label={link.label}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onFocus={() => setHovered(true)}
			onBlur={() => setHovered(false)}
			tabIndex={0}
		>
			<HeroImage {...props} />

			<Header {...props} hovered={hovered} />
		</MotionLink>
	);
}
