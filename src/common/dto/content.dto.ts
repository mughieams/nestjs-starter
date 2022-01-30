import { Type } from 'class-transformer';
import { IsArray, IsString, IsUrl, ValidateNested } from 'class-validator';
import {
	IContentInterface,
	IContentUrlInterface,
} from '../interfaces/content.interface';

class ContentInterface implements IContentInterface {
	@IsString()
		type: string;
	@IsUrl()
		url: string;
}

export class ContentUrl implements IContentUrlInterface<string> {
	@ValidateNested()
	@IsArray()
	@Type(() => ContentInterface)
		content: string;
	@IsString()
		default: string;
}
