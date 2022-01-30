import { IsOptional, IsUrl } from 'class-validator';
import { IThumbnail } from '../interfaces/thumbnail.interface';

export class ThumbnailDto implements IThumbnail {
	@IsUrl()
	@IsOptional()
		potrait: string;
	@IsUrl()
	@IsOptional()
		small: string;
	@IsUrl()
	@IsOptional()
		medium: string;
	@IsUrl()
	@IsOptional()
		large: string;
	@IsUrl()
	@IsOptional()
		extraLarge: string;
}
