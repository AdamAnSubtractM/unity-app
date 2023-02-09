import {
	SECRET_HRFETCH_USER,
	SECRET_HRFETCH_PASS,
	SECRET_ADFETCH_USER,
	SECRET_ADFETCH_PASS
} from '$env/static/private';
import { PUBLIC_HRFETCH_URL, PUBLIC_ADFETCH_URL } from '$env/static/public';
import type { LayoutLoad } from './$types';

const getEncodedCredentials = function (username: string, password: string) {
	if (!username || !password) return;
	const credentials = `${username}:${password}`;
	return Buffer.from(credentials).toString('base64');
};

const setEncondedCredentials = function (username: string, password: string) {
	const credentials = getEncodedCredentials(username, password);
	const headers = new Headers();
	headers.append('Authorization', `Basic ${credentials}`);
	console.log(`Credentials`, credentials);
	console.log(`Headers`, headers);
	return headers;
};

export const load = (async ({ fetch }) => {
	const hrData = await fetch(PUBLIC_HRFETCH_URL, {
		method: 'GET',
		headers: setEncondedCredentials(SECRET_HRFETCH_USER, SECRET_HRFETCH_PASS)
	});
	const adData = await fetch(PUBLIC_ADFETCH_URL, {
		method: 'GET',
		headers: setEncondedCredentials(SECRET_ADFETCH_USER, SECRET_ADFETCH_PASS)
	});
	console.log(`hrData`, hrData);
	console.log(`adData`, adData);
	const hrJSON = await hrData.json();
	const adJSON = await adData.json();
	return {
		hrData: hrJSON,
		adData: adJSON
	};
}) satisfies LayoutLoad;
