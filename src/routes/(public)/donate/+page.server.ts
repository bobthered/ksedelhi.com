import { prisma } from '$lib/prisma';

export const load = async () => {
	let donates: { id: string; body: string; imageSrc: string; subtitle: string; title: string }[] =
		[];
	try {
		donates = await prisma.donate.findMany();
	} catch (error) {
		console.log(error);
	}
	return {
		donates
	};
};
