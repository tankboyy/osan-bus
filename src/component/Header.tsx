// components/Header.js
import Link from 'next/link';
import Image from 'next/image'; // Next.js의 최적화된 Image 컴포넌트

export default function Header() {
	return (
		<header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
			<div className="flex items-center h-20">
				<Image
					src="/logo.png"
					alt="부자관광 로고"
					width={200}
					height={40}
					className="mr-3"
				/>
			</div>
			<nav className="flex space-x-6">
				<Link href="/about">
          <span className="font-semibold text-gray-800 hover:text-red-500 cursor-pointer">
            회사소개
          </span>
				</Link>
				<Link href="/vehicles">
          <span className="font-semibold text-gray-800 hover:text-yellow-500 cursor-pointer">
            차량안내
          </span>
				</Link>
				<Link href="/policy">
          <span className="font-semibold text-gray-800 hover:text-gray-500 cursor-pointer">
            운송약관
          </span>
				</Link>
				<Link href="/contact">
          <span className="font-semibold text-gray-800 hover:text-blue-500 cursor-pointer">
            문의사항
          </span>
				</Link>
			</nav>
		</header>
	);
}
