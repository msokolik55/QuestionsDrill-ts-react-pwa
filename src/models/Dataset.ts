import { IQuestion } from "./Question";

export interface IDataset {
	id: string;
	name: string;
	questions: IQuestion[];
}
