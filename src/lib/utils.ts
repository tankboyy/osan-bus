import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}


export function convertFirestoreTimestampToDate(timestamp: any) {
	const {_seconds, _nanoseconds} = timestamp;
	// _seconds를 밀리초로 변환
	return new Date(_seconds * 1000);
}
