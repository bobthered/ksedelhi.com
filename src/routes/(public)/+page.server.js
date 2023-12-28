import { prisma } from '$lib/prisma';

export const load = async () => {
	return {
		events: await prisma.event.findMany()
	};
};
