'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
	return (
		<header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
			<div className="flex items-center h-20">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="부자관광 로고"
						width={200}
						height={40}
						className="mr-3"
					/>
				</Link>
			</div>
			<nav className="flex space-x-6">
				<DropdownMenu>
					<DropdownMenuTrigger
						className="font-semibold text-gray-800 hover:text-red-500 cursor-pointer">회사소개</DropdownMenuTrigger>
					<DropdownMenuContent className="bg-amber-200">
						<DropdownMenuItem>
							<Link href="/greeting">인사말</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/philosophy">경영이념</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/location">회사위치</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<DropdownMenu>
					<DropdownMenuTrigger
						className="font-semibold text-gray-800 hover:text-red-500 cursor-pointer">차량소개</DropdownMenuTrigger>
					<DropdownMenuContent className="bg-amber-200">
						<DropdownMenuItem>
							<Link href="/bus/1">우등 / 38인승</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/bus/2">45인승</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
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
