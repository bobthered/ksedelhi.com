import { prisma } from '$lib/prisma';

export const load = async () => {
	return {
		userProfiles: await prisma.userProfile.findMany({
			where: {
				status: 'Active'
			}
		})
	};
};
