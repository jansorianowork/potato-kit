"use client";

import { useState } from "react";
import DataTable from "@/components/ui/dataTable";
import { Column } from "@/lib/tabletypes";

interface UserData {
	id: number;
	name: string;
	age: number;
	email: string;
	[key: string]: unknown; 
}

const columns: Column[] = [
	{ key: "id", label: "ID", isNumeric: true },
	{ key: "name", label: "Name" },
	{ key: "age", label: "Age", isNumeric: true },
	{ key: "email", label: "Email" },
];

const initialData: UserData[] = [
	{ id: 1, name: "Alice", age: 28, email: "alice@example.com" },
	{ id: 2, name: "Bob", age: 34, email: "bob@example.com" },
	{ id: 3, name: "Charlie", age: 25, email: "charlie@example.com" },
	{ id: 4, name: "Diana", age: 30, email: "diana@example.com" },
	{ id: 5, name: "Eve", age: 22, email: "eve@example.com" },
	{ id: 6, name: "Frank", age: 29, email: "frank@example.com" },
	{ id: 7, name: "Grace", age: 31, email: "grace@example.com" },
];

export function DataTableDemo() {
	const [data] = useState<UserData[]>(initialData);

	return <DataTable data={data} columns={columns} itemsPerPage={5} />;
}
