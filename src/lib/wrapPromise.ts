export default function wrapPromise<T>(promise: Promise<T>) {
	let status = 'pending';
	let response: T;

	const suspender = promise.then(
		(res) => {
			status = 'success';
			response = res;
		},
		(err) => {
			status = 'error';
			response = err;
		}
	);
	const read = () => {
		switch (status) {
			case 'pending':
				throw suspender;
			case 'error':
				throw response;
			default:
				return response;
		}
	};

	return { read };
}

import { useState, useEffect, useMemo } from 'react';

export function useDataFetch<T>(promise: Promise<T> | (() => Promise<T>)) {
	const [data, setData] = useState<T | null>(null);
	const realPromise = useMemo(() => (promise instanceof Promise ? promise : promise()), [promise]);

	useEffect(() => {
		realPromise.then(setData).catch(() => {
			console.log('woopsie an error');
			//take care of the error here
		});
	}, [realPromise]);

	if (data) {
		return data;
	} else {
		throw realPromise;
	}
}
