export interface IPaginationParams {
	page: number;
	limit: number;
	sort: string;
	dir: string;
}

export interface IPaginationMeta {
	total: number;
	limit: number;
	offset: number;
}

export interface IPaginationResult<T> {
	total: number;
	rows: T;
	meta: IPaginationMeta;
}
