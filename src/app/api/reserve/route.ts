import {NextRequest} from "next/server";
import {db} from "@/lib/firebaseAdmin";

export async function POST(request: NextRequest) {

	const data = await request.json();
	await db.collection('reserveCollection').doc().set({...data, date: new Date()})
		.then((res) => {
			console.log('Document successfully written!');
		})
		.catch((error) => {
			console.error('Error writing document: ', error);
		});
	// await res.set({data});
	return Response.json({message: "Hello, world!"});
}

export async function GET() {
	const dataRef = db.collection('reserveCollection');
	const dataRes = await dataRef.orderBy('date', 'desc').get();
	const dataArray = dataRes.docs.map((doc) => {
		return {id: doc.id, ...doc.data()};
	});
	return Response.json(dataArray);
}
