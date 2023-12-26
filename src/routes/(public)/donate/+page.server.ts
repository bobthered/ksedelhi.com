import { prisma } from '$lib/prisma';

export const load = async () => {
	const donates = await prisma.donate.findMany();
	return {
		donates
	};
};
