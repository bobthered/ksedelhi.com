import { prisma } from '$lib/prisma';

export const load = async () => {
	const [events, photos] = await Promise.all([
		prisma.event.findMany({ orderBy: { dateTime: 'asc' } }),
		prisma.photo.findMany({ orderBy: { dateAdded: 'desc' } })
	]);

	return { events, photos };
};
