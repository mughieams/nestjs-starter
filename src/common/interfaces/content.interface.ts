export interface IContentInterface {
	type: string;
	url: string;
}

export interface IContentUrlInterface<T> {
	content: T;
	default: string;
}
