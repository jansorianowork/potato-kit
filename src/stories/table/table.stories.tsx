import type { Meta, StoryObj } from "@storybook/react";
import {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
} from "@/components/ui/table";
import "./table.css";

/**
 * The `Table` component is used to display data in a structured, tabular format.
 * It supports headers, footers, and flexible styling options for various use cases.
 *
 * This component is composed using `TableHeader`, `TableBody`, `TableFooter`,
 * `TableHead`, `TableRow`, and `TableCell` for full flexibility and customization.
 */
const meta: Meta<typeof Table> = {
	title: "Molecules/Table",
	component: Table,
	tags: ["autodocs"],
	subcomponents: {
		TableHeader,
		TableBody,
		TableFooter,
		TableHead,
		TableRow,
		TableCell,
		TableCaption,
	},
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
The **Table** component is used to display data in a structured tabular format. It supports the following features:

- **Flexible Structure**: Use \`TableHeader\`, \`TableBody\`, and \`TableFooter\` to organize data.
- **Customizable Cells**: \`TableHead\` and \`TableCell\` components allow for flexible content and styling.
- **Responsive Design**: Built to be responsive and work across different screen sizes.
- **Accessible**: Follows accessibility best practices for table structures.

### Usage
\`\`\`tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
      <TableHead>Column 3</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data 1</TableCell>
      <TableCell>Data 2</TableCell>
      <TableCell>Data 3</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\`
        `,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Table>;

/**
 * Default Table story with sample data.
 */
export const Default: Story = {
	render: () => (
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>INV-001</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>INV-002</TableCell>
					<TableCell>Pending</TableCell>
					<TableCell>Bank Transfer</TableCell>
					<TableCell className="text-right">$150.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>INV-003</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>PayPal</TableCell>
					<TableCell className="text-right">$350.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>INV-004</TableCell>
					<TableCell>Cancelled</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$200.00</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$950.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "This is the default Table story, showcasing a basic table with header, body, and footer sections containing sample invoice data.",
			},
		},
	},
};

/**
 * Table story with a large dataset.
 */
export const LargeDataset: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>ID</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-right">Join Date</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{Array.from({ length: 10 }).map((_, index) => (
					<TableRow key={index}>
						<TableCell>
							USR-{String(index + 1).padStart(3, "0")}
						</TableCell>
						<TableCell>User {index + 1}</TableCell>
						<TableCell>user{index + 1}@example.com</TableCell>
						<TableCell>
							{index % 2 === 0 ? "Active" : "Inactive"}
						</TableCell>
						<TableCell className="text-right">
							2024-{String(index + 1).padStart(2, "0")}-15
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "This story showcases a table with multiple rows of user data to demonstrate how the table handles larger datasets.",
			},
		},
	},
};

/**
 * Table story with minimal data.
 */
export const Minimal: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Product</TableHead>
					<TableHead>Price</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>Product A</TableCell>
					<TableCell>$99.99</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "This story showcases a minimal table with just a header and a single row of data.",
			},
		},
	},
};

export const WithUI: Story = {
	render: () => (
		<Table className="storybook-table">
			<TableHeader>
				<TableRow>
					<TableHead>ID</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-right">Join Date</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{Array.from({ length: 10 }).map((_, index) => (
					<TableRow key={index}>
						<TableCell>
							USR-{String(index + 1).padStart(3, "0")}
						</TableCell>
						<TableCell>User {index + 1}</TableCell>
						<TableCell>user{index + 1}@example.com</TableCell>
						<TableCell>
							{index % 2 === 0 ? "Active" : "Inactive"}
						</TableCell>
						<TableCell className="text-right">
							2024-{String(index + 1).padStart(2, "0")}-15
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "This story showcases a minimal table with just a header and a single row of data.",
			},
		},
	},
};
