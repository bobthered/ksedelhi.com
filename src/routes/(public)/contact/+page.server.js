import { prisma } from '$lib/prisma';
import { formDataToObject } from '$utilities';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		try {
			const data = formDataToObject(await request.formData());
			await prisma.contactSubmission.create({ data });
		} catch (error) {
			console.log(error);
			return fail(400, { error: 'Could not submit your comment.  Please try again.' });
		}
		return { success: true };
	}
};
