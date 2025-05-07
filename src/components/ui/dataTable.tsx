import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Column } from "@/lib/tabletypes";

type SortOrder = "asc" | "desc";

interface DataTableProps<T extends Record<string, unknown>> {
	data: T[];
	columns: Column[];
	itemsPerPage?: number;
	showTotalRow?: boolean; // New optional prop
	calculateTotal?: (key: keyof T) => number; // Function to calculate totals
}

export default function DataTable<T extends Record<string, unknown>>({
	data,
	columns,
	itemsPerPage = 10,
}: DataTableProps<T>) {
	const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
	const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
	const [currentPage, setCurrentPage] = useState(1);
	const [pageInput, setPageInput] = useState("");

	// Sorting function
	const sortedData = [...data].sort((a, b) => {
		if (!sortColumn) return 0;
		const valueA = a[sortColumn]!;
		const valueB = b[sortColumn]!;

		if (typeof valueA === "number" && typeof valueB === "number") {
			return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
		} else {
			return sortOrder === "asc"
				? String(valueA).localeCompare(String(valueB))
				: String(valueB).localeCompare(String(valueA));
		}
	});

	// Handles sorting when clicking a column header
	const handleSort = (column: keyof T) => {
		if (sortColumn === column) {
			setSortOrder(sortOrder === "asc" ? "desc" : "asc");
		} else {
			setSortColumn(column);
			setSortOrder("asc");
		}
	};

	// Pagination
	const totalPages = Math.ceil(sortedData.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentData = sortedData.slice(startIndex, startIndex + itemsPerPage);

	const handlePageChange = () => {
		const pageNumber = parseInt(pageInput, 10);
		if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber);
		}
		setPageInput("");
	};

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full border border-gray-300">
				<thead>
					<tr className="bg-gray-100 border-b">
						{columns.map(({ key, label }) => (
							<th
								key={String(key)}
								className="p-2 border cursor-pointer"
								onClick={() => handleSort(key as keyof T)}
							>
								{label}{" "}
								{sortColumn === key
									? sortOrder === "asc"
										? "▲"
										: "▼"
									: ""}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{currentData.map((item, index) => (
						<tr key={index} className="border-b">
							{columns.map(({ key, isNumeric }) => (
								<td
									key={String(key)}
									className={`p-2 border ${
										isNumeric ? "text-center" : "text-left"
									}`}
								>
									{String(item[key])}
								</td>
							))}
						</tr>
					))}
					{/* Total Row (Optional) */}
				</tbody>
			</table>
			{/* Pagination Controls */}
			<div className="flex justify-between items-center mt-4">
				<Button
					disabled={currentPage === 1}
					onClick={() =>
						setCurrentPage((prev) => Math.max(prev - 1, 1))
					}
				>
					Previous
				</Button>
				<div className="flex items-center gap-2">
					<span>
						Page {currentPage} of {totalPages}
					</span>
					<Input
						type="number"
						value={pageInput}
						onChange={(e) => setPageInput(e.target.value)}
						placeholder="Go to page"
						className="w-20 p-1 border border-gray-300 text-center"
					/>
					<Button onClick={handlePageChange}>Go</Button>
				</div>
				<Button
					disabled={currentPage === totalPages}
					onClick={() =>
						setCurrentPage((prev) => Math.min(prev + 1, totalPages))
					}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
