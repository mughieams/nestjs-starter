import { IsArray, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
	IPaginationMeta,
	IPaginationParams,
	IPaginationResult,
} from '../interfaces/pagination.interface';

export class PaginationQueryDto implements IPaginationParams {
	@IsNumber()
	@IsOptional()
	@ApiProperty({ type: Number, description: 'Page number', required: false })
		page: number;
	@IsNumber()
	@IsOptional()
	@ApiProperty({ type: Number, description: 'Page size', required: false })
		limit: number;
	@IsString()
	@IsOptional()
	@ApiProperty({ type: String, description: 'Sort field', required: false })
		sort: string;
	@IsString()
	@IsOptional()
	@ApiProperty({ type: String, description: 'Sort direction', required: false })
		dir: string;
}

export class PaginationMetaDto implements IPaginationMeta {
	@IsNumber()
	@ApiProperty({
		type: Number,
		description: 'Total number of records',
		required: false,
	})
		total: number;
	@IsNumber()
	@ApiProperty({
		type: Number,
		description: 'Total number of pages',
		required: false,
	})
		pages: number;
	@IsNumber()
	@ApiProperty({ type: Number, description: 'Current page', required: false })
		page: number;
	@IsNumber()
	@ApiProperty({ type: Number, description: 'Page size', required: false })
		limit: number;
	@IsNumber()
	@ApiProperty({
		type: Number,
		description: 'Offset of records',
		required: false,
	})
		offset: number;
}

export class PaginationResult<T> implements IPaginationResult<T> {
	@IsNumber()
	@ApiProperty({
		type: Number,
		description: 'Total number of records',
		required: false,
	})
		total: number;
	@IsArray()
	@ApiProperty({ type: Array, description: 'List of records', required: false })
		rows: T;
	@IsObject()
	@ApiProperty({ type: Object, description: 'Pagination meta', required: false })
		meta: PaginationMetaDto;
}
