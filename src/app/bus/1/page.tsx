'use client';

export default function Page() {
	return (
		<div className="min-h-screen flex">
			{/* 왼쪽 네비게이션 */}
			<aside className="w-1/4 bg-gray-100 p-6">
				<ul className="space-y-4">
					<li className="font-semibold text-gray-800 cursor-pointer hover:text-blue-500">
						우등 / 38인승
					</li>
					<li className="font-semibold text-gray-800 cursor-pointer hover:text-blue-500">
						45인승
					</li>
				</ul>
			</aside>

			{/* 오른쪽 콘텐츠 */}
			<main className="flex-1 p-10">
				<h1 className="text-3xl font-bold mb-4">우등 32인승</h1>
				<p className="text-lg text-gray-600 mb-6">
					기업체 통근, 현장 학습, 산악회, 관광 등 단체 인원이나 장거리 이동에 적합
				</p>

				{/* 이미지 갤러리 */}
				<div className="grid grid-cols-5 gap-2 mb-6">
					<img
						src="/bus-image1.jpg"
						alt="버스 이미지 1"
						className="w-full h-auto rounded-md"
					/>
					<img
						src="/bus-image2.jpg"
						alt="버스 이미지 2"
						className="w-full h-auto rounded-md"
					/>
					<img
						src="/bus-image3.jpg"
						alt="버스 이미지 3"
						className="w-full h-auto rounded-md"
					/>
					<img
						src="/bus-image4.jpg"
						alt="버스 이미지 4"
						className="w-full h-auto rounded-md"
					/>
					<img
						src="/bus-image5.jpg"
						alt="버스 이미지 5"
						className="w-full h-auto rounded-md"
					/>
				</div>

				{/* 메인 이미지 */}
				<div>
					<img
						src="/main-bus.jpg"
						alt="우등 32인승 버스"
						className="w-full h-auto rounded-md shadow-lg"
					/>
				</div>
			</main>
		</div>
	);
}
