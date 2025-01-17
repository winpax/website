'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function ProjectModal({
	children,
	initialModal = false
}: {
	children: React.ReactNode;
	initialModal?: boolean;
}) {
	const [modal, setModal] = useState(initialModal);
	const modalEl = useRef<HTMLDialogElement>(null);
	const router = useRouter();

	useEffect(() => {
		if (modal) {
			modalEl.current?.showModal();
		} else {
			modalEl.current?.close();
		}
	}, [modal]);

	if (!router.pathname.startsWith('/projects')) {
		return null;
	}

	if (modal) {
		return (
			<div className="fixed z-10 flex min-h-[100vh] min-w-[100vw] items-center justify-center">
				<dialog
					ref={modalEl}
					onClick={() => {
						setModal(false);
						router.back();
					}}
					className="card mx-auto my-auto max-h-[75vh] min-h-[75vh] min-w-[75vw] max-w-[75vw] self-center overflow-scroll bg-base-100 bg-blend-darken shadow-xl backdrop:bg-black backdrop:bg-opacity-25"
				>
					<div onClick={(e) => e.stopPropagation()}>{children}</div>
				</dialog>
			</div>
		);
	} else {
		return children;
	}
}
