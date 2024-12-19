import { useMemo } from 'react';
import Image, { type ImageProps, type StaticImageData } from 'next/image';

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
		<div className="flex min-h-full flex-col items-center justify-center text-center">
			<h1 className="text-4xl font-extrabold">{title}</h1>
			<p>{description}</p>
		</div>
	);
}

function HeroImage({ link }: Props) {
	const commonProps: ImageProps = useMemo(
		() => ({
			src: link.image,
			alt: link.label,
			className: 'max-w-[50vw]'
		}),
		[link]
	);

	if (typeof commonProps.src === 'string') {
		return <Image {...commonProps} width={1200} height={630} />;
	}

	return <Image {...commonProps} placeholder="blur" />;
}

export default function Project(props: Props) {
	const { link, alternate = false } = props;

	return (
		<a
			className="mx-20 mt-12 flex min-w-[calc(100vw-10rem)] justify-between rounded-xl bg-[rgb(220,220,220)] p-8 shadow-lg transition-button hover:scale-105 hover:bg-white"
			href={link.href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={link.label}
		>
			{alternate ? (
				<>
					<HeroImage {...props} />
					<Header {...props} />
				</>
			) : (
				<>
					<Header {...props} />
					<HeroImage {...props} />
				</>
			)}
		</a>
	);
}
