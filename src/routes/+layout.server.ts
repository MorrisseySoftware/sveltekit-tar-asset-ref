import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	return {
		user: 'Hi There'
	};
};
