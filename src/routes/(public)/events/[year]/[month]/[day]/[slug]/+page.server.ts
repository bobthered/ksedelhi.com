import { prisma } from '$lib/prisma/index.js';
import { DateTime } from 'luxon';

export const load = async ({ params }) => {
	const { year, month, day, slug } = params;
	const dateTimeFrom = DateTime.fromFormat(`${year}-${month}-${day}`, 'yyyy-MM-dd').toJSDate();
	const dateTimeTo = DateTime.fromFormat(`${year}-${month}-${day}`, 'yyyy-MM-dd')
		.endOf('day')
		.toJSDate();
	return {
		event: await prisma.event.findFirst({
			where: {
				AND: [
					{
						dateTime: {
							gte: dateTimeFrom
						}
					},
					{
						dateTime: {
							lte: dateTimeTo
						}
					}
				]
			}
		})
	};
};
