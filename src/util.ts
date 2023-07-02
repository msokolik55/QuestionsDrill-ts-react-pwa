const last = (arr: any[]) => {
	return arr[arr.length - 1];
};

export const nextValue = (arr: number[]) => {
	return arr.length > 0 ? last(arr) + 1 : 0;
};
