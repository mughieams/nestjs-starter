import {
	ValidatorConstraint,
	ValidatorConstraintInterface,
	ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'SlugFormat', async: false })
export class SlugFormat implements ValidatorConstraintInterface {
	validate(text: string, args: ValidationArguments) {
		const regex = /[^a-z0-9-]/gi;
		return !regex.test(text);
	}

	defaultMessage(args: ValidationArguments) {
		return 'Slug format ($value) is wrong!';
	}
}
