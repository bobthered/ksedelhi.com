import { Upload } from '@aws-sdk/lib-storage';
import { S3Client } from '@aws-sdk/client-s3';
import {
	AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY,
	S3_BUCKET,
	S3_REGION
} from '$env/static/private';

export const upload = async (Key: string, Body: Blob) => {
	try {
		const data = await new Promise((resolve) => {
			new Upload({
				client: new S3Client({
					credentials: {
						accessKeyId: AWS_ACCESS_KEY_ID,
						secretAccessKey: AWS_SECRET_ACCESS_KEY
					},
					region: S3_REGION
				}),
				params: {
					ACL: 'public-read',
					Bucket: S3_BUCKET,
					Key,
					Body
				}
			})
				.done()
				.then((data) => {
					resolve(data);
				});
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};
