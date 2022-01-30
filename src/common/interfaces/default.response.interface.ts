// Default Success Response
// https://narasitv.atlassian.net/wiki/spaces/P/pages/54853676/API+Design+Guidelines#Basic-API-Response
export interface ISuccessResponse<T, M> {
	message: string;
	status: number;
	data: T;
	meta: M;
}

export interface IErrorResponse {
	statusCode: number;
	message: string;
}
