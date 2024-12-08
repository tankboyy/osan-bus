'use server';


export const addReserve = async (formData: FormData) => {
	// 2초 후 아래가 작동하도록
	await new Promise(resolve => setTimeout(resolve, 2000));

	console.log('zzz');
	console.log(formData.get('name'));
};
