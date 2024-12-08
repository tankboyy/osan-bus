import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {format} from "date-fns";
import {convertFirestoreTimestampToDate} from "@/lib/utils";
import {FormDataType} from "@/component/Reserve";

const getReserveData = async () => {
	return fetch('http://localhost:3000/api/reserve', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-cache',
	})
		.then(async (res) => await res.json());
};

export default async function EstimateTable() {

	// if (!data.length) return;
	const data = await getReserveData();

	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">구분</TableHead>
						<TableHead>등록자명</TableHead>
						<TableHead>연락처</TableHead>
						<TableHead>출발지</TableHead>
						<TableHead>도착지</TableHead>
						<TableHead>등록일</TableHead>
						<TableHead className="text-right">상태</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((reserve: FormDataType, i: number) => (
						<TableRow key={i} className="hover:bg-blue-100 transition-colors duration-300">
							<TableCell className="font-medium">{reserve.busType}</TableCell>
							<TableCell>{reserve.name}</TableCell>
							<TableCell>{reserve.phone}</TableCell>
							<TableCell>{reserve.startDate.type}</TableCell>
							<TableCell>{reserve.endDate.type}</TableCell>
							<TableCell>{reserve.date && format(convertFirestoreTimestampToDate(reserve.date), 'yyyy년 MM월 dd일')}</TableCell>
							<TableCell className="text-right">{reserve.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
