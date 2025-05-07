// tableTypes.ts
export type ColumnKey = "id" | "name" | "age" | "email";
export interface Column {
	key: ColumnKey;
	label: string;
	isNumeric?: boolean;
}
