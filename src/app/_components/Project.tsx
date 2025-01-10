'use client';

import { useMemo, useState } from 'react';
import Image, { type ImageProps, type StaticImageData } from 'next/image';
import Link from 'next/link';
import Header from './Project/Header';
import { AnimatePresence, motion } from 'motion/react';

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
	const commonProps: ImageProps = useMemo(
		() => ({
			src: link.image,
			alt: link.label,
			className: 'max-w-[50vw] bg-stone-100 rounded-box'
		}),
		[link]
	);

	if (typeof commonProps.src === 'string') {
		return <Image {...commonProps} width={1200} height={630} />;
	}

	return <Image {...commonProps} placeholder="blur" />;
}

export default function Project(props: Props) {
	const [hovered, setHovered] = useState(false);

	const { link } = props;

	return (
		<motion.a
			transition={{ type: 'spring', stiffness: 700, damping: 30 }}
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
		</motion.a>
	);
}
