import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const keyword = searchParams.get('keyword');

	console.log(keyword);

	try {
		if (!keyword) return Response.json({error: "No keyword provided"});
		const response = await fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(keyword)}`, {
			headers: {
				Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`
			}
		});

		if (!response.ok) {
			throw new Error("Failed to fetch location data");
		}

		const data = await response.json();
		return Response.json(data);
	} catch (error) {
		console.error(error);
		return Response.json({error: "Failed to fetch location data"});
	}
}
