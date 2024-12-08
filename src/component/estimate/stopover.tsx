'use client';
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {PlusIcon, MinusIcon} from "@radix-ui/react-icons"; // Radix 아이콘 사용

export default function WaypointForm() {
	const [waypoints, setWaypoints] = useState([""]); // 경유지 입력값 초기화

	// 입력 필드 추가 함수
	const addWaypoint = () => {
		setWaypoints([...waypoints, ""]);
	};

	// 입력 필드 값 변경 핸들러
	const handleWaypointChange = (index: number, value: string) => {
		const newWaypoints = [...waypoints];
		newWaypoints[index] = value;
		setWaypoints(newWaypoints);
	};

	return (
		<div className="flex">
			<label className="block w-20 text-sm font-medium text-gray-700 mb-1 pt-2">경유지</label>
			<div className="flex flex-col space-y-2">
				{waypoints.map((waypoint, index) => (
					<div key={index} className="flex items-center space-x-2">
						<Input
							placeholder="경유지를 입력하세요"
							value={waypoint}
							onChange={(e) => handleWaypointChange(index, e.target.value)}
							className="flex-1"
						/>
					</div>
				))}
			</div>
			<Button
				variant="outline"
				onClick={addWaypoint}
				className="p-2 ml-2"
			>
				<PlusIcon/>
			</Button>
			{waypoints.length > 1 && <Button
        variant="outline"
        onClick={() => setWaypoints(waypoints.slice(0, waypoints.length - 1))}
        className="p-2 ml-2"
      >
        <MinusIcon/>
      </Button>
			}
		</div>
	);
}
