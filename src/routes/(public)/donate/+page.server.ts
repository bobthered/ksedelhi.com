import { prisma } from '$lib/prisma';

export const load = async () => {
	return {
		donates: await prisma.donate.findMany()
	};
};
