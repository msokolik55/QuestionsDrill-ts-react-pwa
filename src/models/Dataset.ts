import { IQuestion } from "./Question";

export interface IDataset {
	name: string;
	questions: IQuestion[];
}
