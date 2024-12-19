'use client';

import { IoArrowBack } from 'react-icons/io5';

export function Back({}) {
	return (
		<button
			className="btn btn-ghost btn-lg btn-circle fixed left-5 top-5"
			title="Go back"
			onClick={() => {
				window.history.back();
			}}
		>
			<IoArrowBack />
		</button>
	);
}
