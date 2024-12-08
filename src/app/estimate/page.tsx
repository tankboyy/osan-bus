import Link from 'next/link';
import EstimateTable from "@/component/estimate/EstimateTable";


export default async function Page() {
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
