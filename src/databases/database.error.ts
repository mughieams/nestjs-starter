enum PostgresErrorCode {
	NoData = '02000',
	NotNullViolation = '23502',
	ForeignKeyViolation = '23503',
	UniqueViolation = '23505',
}

export default PostgresErrorCode;