export interface Option {
	title: string;
	isRight: boolean;
}

export interface Question {
	title: string;
	options: Array<Option>;
}
