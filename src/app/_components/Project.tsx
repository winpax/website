import { useMemo } from 'react';
import Image, { type ImageProps, type StaticImageData } from 'next/image';
import Link from 'next/link';

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

function Header({ title, description }: Props) {
	return (
		<div className="card-body">
			<h1 className="card-title">{title}</h1>
			<p>{description}</p>
		</div>
	);
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
	const { link } = props;

	return (
		<Link
			className="card m-5 min-w-[50vw] max-w-[50vw] bg-base-100 shadow-xl transition-transform hover:scale-[1.02]"
			href={link.href}
			aria-label={link.label}
		>
			<HeroImage {...props} />
			<Header {...props} />
		</Link>
	);
}
