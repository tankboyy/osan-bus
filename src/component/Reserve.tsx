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
import Stopover from "@/component/estimate/stopover";
import {Controller, useForm} from "react-hook-form";
import {addReserve} from "@/lib/actions";
import {useFormStatus} from "react-dom";

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

export type FormDataType = {
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
	status: '대기중' | '승인' | '완료';
	date: Date;
}

export default function BusInquiryForm() {

	const {register, handleSubmit, setValue, getValues, watch, formState, setError, control} = useForm<FormDataType>({
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
			status: '대기중',
			date: new Date(),
		},
	});

	const {errors} = formState;

	const onSubmit = async (data: any) => {
		// if (errors) return;

		await fetch('http://localhost:3000/api/reserve', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({...data, date: new Date()}),
		})
			.then((res) => {
				console.log('성공');
			})
			.catch((err) => {
				console.log('실패');
			});
	};

	const startDate = watch('startDate')?.date;
	const endDate = watch('endDate')?.date;


	return (
		<div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-md">
			{/*<button onClick={async () => {*/}
			{/*	const data = await fetch("/api/map?keyword=오산시 궐동 궐리사");*/}
			{/*	console.log(await data.json());*/}
			{/*}}>asd*/}
			{/*</button>*/}
			<h1 className="text-2xl font-bold text-center mb-4">견적문의</h1>
			<p className="text-sm text-center text-gray-600 mb-8">
				저희 오산관광의 견적문의 페이지 입니다.
			</p>

			<form className="space-y-6 text-center" onSubmit={handleSubmit(onSubmit)} action={addReserve}>
				{/* 구분 */}
				<div className="flex items-center">
					<Controller rules={{
						required: true,
					}} render={({field}) => (
						<div className="flex flex-col">
							<div className="flex items-center">
								<label className="block w-20 text-sm font-medium text-gray-700 mb-1">구분 *</label>
								<Select onValueChange={field.onChange}>
									<SelectTrigger className="w-[160px]">
										<SelectValue placeholder="구분을 선택해주세요."/>
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{typeList.map((type, i) => (
												<SelectItem key={i} value={`${type}`} className="">
													{type}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>

						</div>)} name="type" defaultValue="" control={control}/>
					{errors.type && <p className="text-red-500 text-left text-sm pl-6 pt-1">구분을 선택해 주세요.</p>}
				</div>


				{/* 성명 */}
				<div className="flex items-center">
					<label className="block w-20 text-sm font-medium text-gray-700 mb-1"> 성명 *</label>
					<Input className="w-[280px] border-2 p-1" placeholder="성명을 입력하세요" {...register("name", {
						required: true,
						minLength: 2,
						// 한글과 영어만 가능하게
						pattern: /^[가-힣a-zA-Z]+$/,
					})}/>
					{errors.name && <p className="text-red-500 text-left text-sm pl-6 pt-1">성명을 확인해 주세요.</p>}

				</div>

				{/* 연락처 */
				}
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
					{errors.phone && <p className="text-red-500 text-left text-sm pl-6 pt-1">연락처를 확인해 주세요.</p>}
				</div>

				{/* 차량 */}
				<Controller
					rules={{
						required: true,
					}}
					render={({field}) => (
						<div className="flex items-center">
							<label className="block w-20 text-sm font-medium text-gray-700 mb-1">차량 *</label>
							<Select onValueChange={field.onChange}>
								<SelectTrigger className="w-[160px]">
									<SelectValue placeholder="차량을 선택해주세요."/>
								</SelectTrigger>
								<SelectContent className=" w-[160px]">
									<SelectGroup>
										{busList.map((bus, i) => (
											<SelectItem key={i} value={`bus${i + 1}`}>
												{bus}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							{errors.busType && <p className="text-red-500 text-left text-sm pl-6 pt-1">차량 종류를 선택해 주세요.</p>}
						</div>
					)} name="busType" defaultValue="" control={control}/>

				{/* 차량대수 및 인원 */}
				<div className="flex items-center">
					<div className="flex items-center">
						<label className="block w-20 text-sm font-medium text-gray-700 mb-1"> 차량대수 *</label>
						<Input className="w-[280px] border-2 p-1" placeholder="차량대수를 입력하세요(숫자만)" {...register('busCount', {
							required: true,
							max: 50,
							pattern: /^[0-9]+$/,
						})}/>
						{errors.busCount && <p className="text-red-500 text-left text-sm pl-6 pt-1">차량 대수를 확인해 주세요.</p>}
					</div>
				</div>
				<div className="flex items-center">
					<label className="block w-20 text-sm font-medium text-gray-700 mb-1">인원 *</label>
					<Input className="w-[280px] border-2 p-1" placeholder="인원을 입력하세요(숫자만)" {...register('person', {
						required: true,
						pattern: /^[0-9]+$/,
					})}/>
					{errors.person && <p className="text-red-500 text-left text-sm pl-6 pt-1">인원을 확인해 주세요.</p>}
				</div>

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
									<SelectItem key={i} value={`${type}`} className="border-b-2 hover:bg-gray-300 last:border-0">
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
					<Select onValueChange={value => setValue('endDate', {
						...getValues('endDate'),
						type: value,
					})}>
						<SelectTrigger className="w-[100px] border-2 p-1 mr-2">
							<SelectValue placeholder="선택해주세요"/>
						</SelectTrigger>
						<SelectContent className="bg-gray-100 w-[100px] rounded-2xl text-center">
							<SelectGroup>
								{mapList.map((type, i) => (
									<SelectItem key={i} value={`${type}`} className="border-b-2 hover:bg-gray-300 last:border-0">
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
