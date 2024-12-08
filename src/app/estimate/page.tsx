import Link from 'next/link';
import EstimateTable from "@/component/estimate/EstimateTable";


export default async function Page() {
	// 견적문의 데이터 예시
	const estimates = [
		{id: 1, title: "견적문의 1", date: "2024-11-01", status: "처리중"},
		{id: 2, title: "견적문의 2", date: "2024-11-05", status: "완료"},
		{id: 3, title: "견적문의 3", date: "2024-11-10", status: "대기중"},
	];

	// 예약 데이터 가져오기

	return (
		<main className="p-8 bg-gray-100 min-h-screen">
			<EstimateTable/>
			{/*<Reserve/>*/}
			<div className="text-center">
				<Link href="/estimate/new">
					<button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600">
						새로운 견적문의
					</button>
				</Link>
			</div>
		</main>
	);
}

// 상태에 따라 색상 변경
function getStatusColor(status) {
	switch (status) {
		case "처리중":
			return "text-yellow-500";
		case "완료":
			return "text-green-500";
		case "대기중":
			return "text-red-500";
		default:
			return "text-gray-500";
	}
}


import Reserve from "@/component/Reserve";
//
// export default function Page() {
// 	return (
// 		<>
// 			<Reserve/>
//
// 		</>
// 	);
// }
