import { SECRET_HRFETCH_USER, SECRET_HRFETCH_PASS } from '$env/static/private';
import type { LayoutLoad } from './$types';

export const load = (async ({ fetch }) => {
	const credentials = `${SECRET_HRFETCH_USER}:${SECRET_HRFETCH_PASS}`;
	const headers = new Headers().append(
		'Authorization',
		`Basic ${Buffer.from(credentials).toString('base64')}`
	);
	const hrData = await fetch('http://psono.wil.contact:2275/hrdata', {
		headers
	});
	const data = await hrData.json();
	return {
		data
	};
}) satisfies LayoutLoad;
