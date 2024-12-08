import admin from "firebase-admin";
import {getFirestore} from "firebase-admin/firestore";
import {cert} from "firebase-admin/app";

if (!admin.apps.length) {
	admin.initializeApp({
		credential: cert({
			projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
			privateKey: (process.env.NEXT_PUBLIC_PRIVATE_KEY as string).replace(/\\n/g, "\n"),
			clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
		}),
	});
}
export const db = admin.firestore();
