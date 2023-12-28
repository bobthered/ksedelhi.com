import { prisma } from '$lib/prisma';

export const load = async ({ params }) => {
	const [firstName, lastName] = params.name
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	const user = await prisma.userProfile.findFirst({
		where: {
			firstName,
			lastName
		}
	});
	return { user };
};
