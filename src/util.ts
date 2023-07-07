const last = <T>(arr: T[]): T => {
	return arr[arr.length - 1];
};

export const nextValue = (arr: number[]) => {
	return arr.length > 0 ? last(arr) + 1 : 0;
};
