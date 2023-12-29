import { prisma } from '$lib/prisma';

export const load = async () => {
	return {
		photos: await prisma.photo.findMany({
			where: {
				public: true
			},
			orderBy: [{ dateAdded: 'desc' }],
			take: 12
		})
	};
};
