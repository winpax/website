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

import { useState, useEffect } from 'react';

export function useDataFetch<T>(promise: Promise<T>) {
	const [data, setData] = useState<T | null>(null);

	useEffect(() => {
		promise
			.then((data) => setData(data))
			.catch(() => {
				console.log('woopsie an error');
				//take care of the error here
			});
	}, [promise]);

	if (data) {
		return data;
	} else {
		throw promise;
	}
}
