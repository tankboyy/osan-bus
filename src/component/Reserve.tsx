'use client';

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectItem, SelectTrigger, SelectContent, SelectValue, SelectGroup} from "@/components/ui/select";
import {Calendar} from "@/components/ui/calendar";
import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "@radix-ui/react-icons";
import {addDays, format} from "date-fns";
import {ko} from "date-fns/locale";
import Stopover from "./reverse/stopover";
import {useForm} from "react-hook-form";
import {addReserve} from "@/lib/actions";

const typeList = [
	"야유회",
	"산악회",
	"관혼상제",
	"워크샵",
	"동호회",
	"주한대사관",
	"골프",
	"성지순례",
	"인천공항",
	"학교OT/MT",
	"기타",

];

const busList = [
	"32인승 / 우등",
	"45인승",
];

const mapList = [
	"서울",
	"경기",
	"인천",
	"강원",
	"충북",
	"충남",
	"대전",
	"경북",
	"경남",
	"대구",
	"울산",
	"부산",
	"전북",
	"전남",
	"광주",
	"제주",
	"세종",
];

// 위치, 출발지, 출발일 타입
type WaypointDetailType = {
	type: string;
	start: string;
	date: Date | undefined;
}

type FormDataType = {
	type: string;
	name: string;
	phone: string;
	busType: string;
	busCount: number | null;
	person: number | null;
	startDate: WaypointDetailType;
	endDate: WaypointDetailType;
	wayPoints?: string[];
	etc?: string;
	password: string;
}

export default function BusInquiryForm() {

	const {register, handleSubmit, setValue, getValues, watch, formState} = useForm<FormDataType>({
		defaultValues: {
			type: '',
			name: '',
			phone: '',
			busType: '',
			busCount: null,
			person: null,
			startDate: {
				type: '',
				start: '',
				date: undefined,
			},
			endDate: {
				type: '',
				start: '',
				date: undefined,
			},
			wayPoints: [],
			etc: '',
			password: '',
		},
	});

	const {errors} = formState;

	const onSubmit = async (data: any) => {
		console.log(data, 'data');
	};

	const startDate = watch('startDate')?.date;
	const endDate = watch('endDate')?.date;

	// const addReservef = addReserve.bind(null, getValues());


	return (
		<div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-md mt-10">
			<button onClick={() => console.log(formState.dirtyFields)}>asd</button>
			<h1 className="text-2xl font-bold text-center mb-4">견적문의 & 현황</h1>
			<p className="text-sm text-center text-gray-600 mb-8">
				저희 테마고속투어의 견적문의와 현황을 안내해드립니다.
			</p>

			<form className="space-y-6 text-center" onSubmit={handleSubmit(onSubmit)} action={addReserve}>
				{/* 구분 */}
				<div className="flex items-center">
					<label className="block w-20 text-sm font-medium text-gray-700 mb-1">구분 *</label>
					<Select onValueChange={(value) => setValue('type', value)}>
						<SelectTrigger className="w-[160px]">
							<SelectValue placeholder="구분을 선택해주세요."  {...register("type")}/>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{typeList.map((type, i) => (
									<SelectItem key={i} value={`type${i + 1}`} className="">
										{type}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>

				</div>

				{/* 성명 */}
				<div className="flex items-center">
					<label className="block w-20 text-sm font-medium text-gray-700 mb-1">성명 *</label>
					<Input className="w-[280px] border-2 p-1" placeholder="성명을 입력하세요" {...register("name", {
						required: true,
						minLength: 2,
						// 한글과 영어만 가능하게
						pattern: /^[가-힣a-zA-Z]+$/,
					})}/>
				</div>

				{/* 연락처 */}
				<div className="flex items-center">
					<label className="block w-20 text-sm font-medium text-gray-700 mb-1">연락처 *</label>
					<Input className="w-[280px] border-2 p-1" placeholder="연락처를 입력하세요" {...register("phone", {
						required: true,
						maxLength: 11,
						onChange: (e) => {
							console.log(e.target.value, 'e.target.value');
							return 'azz';
						},
						onBlur: (e) => {
							console.log('onBlur', e.target.value);
						}
					})}/>
				</div>

				{/* 차량 */}
				<div className="flex items-center">


					<label className="block w-20 text-sm font-medium text-gray-700 mb-1">차량 *</label>
					<Select onValueChange={value => setValue('busType', value)}>
						<SelectTrigger className="w-[160px] border-2 p-1">
							<SelectValue placeholder="차량을 선택해주세요."/>
						</SelectTrigger>
						<SelectContent className="bg-gray-100 w-[160px] rounded-2xl text-center">
							<SelectGroup>
								{busList.map((bus, i) => (
									<SelectItem key={i} value={`bus${i + 1}`} className="border-b-2 last:border-0">
										{bus}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				{/* 차량대수 및 인원 */}
				<div className="grid grid-cols-2 gap-4">
					<div className="flex items-center">
						<label className="block w-20 text-sm font-medium text-gray-700 mb-1">차량대수 *</label>
						<Input className="w-[280px] border-2 p-1" placeholder="차량 대수를 입력하세요" {...register('busCount')}/>
					</div>
					<div className="flex items-center">


						<label className="block w-20 text-sm font-medium text-gray-700 mb-1">인원 *</label>
						<Input className="w-[280px] border-2 p-1" placeholder="인원을 입력하세요" {...register('person')}/>
					</div>
				</div>

				{/* 출발지 및 목적지 */}
				{/*<div className="grid grid-cols-2 gap-4">*/}
				<div className="flex items-center">

					<label className="block w-20 text-sm font-medium text-gray-700 mb-1">출발지 *</label>
					<Select onValueChange={value => setValue('startDate', {
						...getValues('startDate'),
						type: value,
					})}>
						<SelectTrigger className="w-[100px] border-2 p-1 mr-2">
							<SelectValue placeholder="선택해주세요"/>
						</SelectTrigger>
						<SelectContent className="bg-gray-100 w-[100px] rounded-2xl text-center">
							<SelectGroup>
								{mapList.map((type, i) => (
									<SelectItem key={i} value={`type${i + 1}`} className="border-b-2 hover:bg-gray-300 last:border-0">
										{type}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
					<Input className="w-[280px] border-2 p-1 mr-2" placeholder="출발지를 입력하세요" onChange={(e) => {
						setValue('startDate', {
							...getValues('startDate'),
							start: e.target.value,
						});
					}}/>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={"outline"}
								className={cn(
									"w-[240px] justify-start text-left font-normal",
									!startDate && "text-muted-foreground"
								)}
							>
								<CalendarIcon/>
								{startDate ? format(startDate, "PPP", {
									locale: ko,
								}) : <span>출발일</span>}
							</Button>
						</PopoverTrigger>
						<PopoverContent
							align="start"
							className="flex w-auto flex-col space-y-2 p-2"
						>
							<div className="rounded-md border">
								<Calendar mode="single" selected={startDate} onSelect={(e) => {
									e &&
									setValue('startDate', {
										...getValues('startDate'),
										date: e,
									});
								}} locale={ko}/>
							</div>
						</PopoverContent>
					</Popover>
				</div>
				<div className="flex items-center">
					<label className="block w-20 text-sm font-medium text-gray-700 mb-1">목적지 *</label>
					<Select>
						<SelectTrigger className="w-[100px] border-2 p-1 mr-2">
							<SelectValue placeholder="선택해주세요"/>
						</SelectTrigger>
						<SelectContent className="bg-gray-100 w-[100px] rounded-2xl text-center">
							<SelectGroup>
								{mapList.map((type, i) => (
									<SelectItem key={i} value={`type${i + 1}`} className="border-b-2 hover:bg-gray-300 last:border-0">
										{type}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
					<Input className="w-[280px] border-2 p-1 mr-2" placeholder="목적지를 입력하세요"/>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={"outline"}
								className={cn(
									"w-[240px] justify-start text-left font-normal",
									!endDate && "text-muted-foreground"
								)}
							>
								<CalendarIcon/>
								{endDate ? format(endDate, "PPP", {
									locale: ko,
								}) : <span>도착일</span>}
							</Button>
						</PopoverTrigger>
						<PopoverContent
							align="start"
							className="flex w-auto flex-col space-y-2 p-2"
						>
							<div className="rounded-md border">
								<Calendar mode="single" selected={endDate} onSelect={(e) => {
									e &&
									setValue('endDate', {
										...getValues('endDate'),
										date: e,
									});
								}} locale={ko}/>
							</div>
						</PopoverContent>
					</Popover>
				</div>
				{/*</div>*/}

				{/* 기타 사항 */}
				<div className="flex items-center">
					<Stopover/>
				</div>
				<div className="flex items-center">
					<label className="block w-20 text-sm font-medium text-gray-700 mb-1 mr-2">기타 사항</label>
					<Textarea placeholder="기타 요청 사항을 입력하세요" onChange={e => {
						setValue('etc', e.target.value);
					}}/>
				</div>

				{/* 비밀번호 */}
				<div className="flex items-center">


					<label className="block w-20 text-sm font-medium text-gray-700 mb-1">비밀번호 *</label>
					<Input className="w-[280px] border-2 p-1" type="password"
								 placeholder="비밀번호를 입력하세요" {...register("password")}/>
				</div>

				{/* 버튼 */}
				{/*{formerror}*/}
				<div className="flex justify-between">
					<Button variant="default" className="w-full mr-2" type="submit">
						견적등록
					</Button>
					<Button variant="outline" className="w-full">
						취소
					</Button>
				</div>
			</form>
		</div>
	);
}
