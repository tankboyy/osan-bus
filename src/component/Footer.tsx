// components/Footer.js

export default function Footer() {
	return (
		<footer className="bg-gray-800 text-gray-400 py-8 pt-10">
			<div className="container mx-auto px-4">
				{/* 명함 및 연락처 섹션 */}
				<div className="flex justify-between items-center mb-8">
					{/* 왼쪽: 연락처 정보 */}
					<div className="text-center">
						<h2 className="text-xl font-semibold text-orange-400 mb-2">
							NEED HELP? CALL US
						</h2>
						<p className="text-4xl font-bold text-white">test</p>

						<div className="bg-white text-gray-800 p-4 mt-4 rounded shadow-lg inline-block">
							<p className="flex items-center space-x-2">
								<span className="font-bold">E-MAIL:</span>
								<span className="text-green-600">test</span>
							</p>
							<p className="flex items-center space-x-2">
								<span className="font-bold">FAX:</span>
								<span>test</span>
							</p>
							<p className="flex items-center space-x-2">
								<span className="font-bold">카카오톡:</span>
								<span className="text-red-500">test</span>
							</p>
							<p className="flex items-center space-x-2">
								<span className="font-bold">플러스친구:</span>
								<span>오산관광</span>
							</p>
						</div>
					</div>

					{/* 오른쪽: 회사 로고 */}
					<div className="text-center">
						<img
							src="/logo.png"
							alt="로고"
							className="h-20 mx-auto mb-2"
						/>
						<p>특별한 여행</p>
					</div>

					{/* 소셜 아이콘 */}
					{/*<div className="text-center">*/}
					{/*	<h2 className="text-xl font-semibold text-orange-400 mb-2">*/}
					{/*		FOLLOW US*/}
					{/*	</h2>*/}
					{/*	<div className="flex justify-center space-x-4 text-2xl">*/}
					{/*		<a href="#" className="hover:text-white">*/}
					{/*			<i className="fab fa-youtube"></i>*/}
					{/*		</a>*/}
					{/*		<a href="#" className="hover:text-white">*/}
					{/*			<i className="fab fa-instagram"></i>*/}
					{/*		</a>*/}
					{/*		<a href="#" className="hover:text-white">*/}
					{/*			<i className="fab fa-facebook-f"></i>*/}
					{/*		</a>*/}
					{/*		<a href="#" className="hover:text-white">*/}
					{/*			<i className="fab fa-twitter"></i>*/}
					{/*		</a>*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>

				{/* 하단 회사 정보 및 메뉴 링크 */}
				<div className="border-t border-gray-700 pt-4 text-center">
					<nav className="mb-4">
						<ul className="flex justify-center space-x-8 text-sm">
							<li><a href="#" className="hover:text-white">회사소개</a></li>
							<li><a href="#" className="hover:text-white">차량소개</a></li>
							<li><a href="#" className="hover:text-white">견적문의</a></li>
						</ul>
					</nav>

					<p className="text-sm">
						테마고속투어(주) | 지사: 경기도 하남시 대청로 26 하남 리빌텔 515호 |
						본사: 경기도 연천군 연천읍 현문로 36 | 사업자 등록번호: 126-86-78070
					</p>
					<p className="text-sm">
						통신판매업신고번호: 제2014-경기하남-0055호 | 입금계좌: 국민 596401-01-275990 예금주 테마고속투어(주)
					</p>
					<p className="text-sm mt-2">
						Copyright © 2020 오산관광(주). All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
