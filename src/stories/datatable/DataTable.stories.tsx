import type { Meta, StoryObj } from "@storybook/react";
import  { DataTableDemo }  from "./DataTable";
import "./datatable.css";

type SampleData = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const sampleData: SampleData[] = [
	{ id: 1, name: "Alice", age: 28, email: "alice@example.com" },
	{ id: 2, name: "Bob", age: 34, email: "bob@example.com" },
	{ id: 3, name: "Charlie", age: 25, email: "charlie@example.com" },
	{ id: 4, name: "Diana", age: 30, email: "diana@example.com" },
	{ id: 5, name: "Eve", age: 22, email: "eve@example.com" },
	{ id: 6, name: "Frank", age: 29, email: "frank@example.com" },
	{ id: 7, name: "Grace", age: 31, email: "grace@example.com" },
];

const columns = [
	{ key: "id", label: "ID", isNumeric: true },
	{ key: "name", label: "Name" },
	{ key: "age", label: "Age", isNumeric: true },
	{ key: "email", label: "Email" }
];

const meta: Meta<typeof DataTableDemo> = {
  title: "Molecules/DataTable",
  component: DataTableDemo,
  tags: ["autodocs"],
  args: {
    data: sampleData,
    columns,
    itemsPerPage: 2,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A sortable, paginated data table with optional numeric alignment and customizable column definitions.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableDemo>;

export const Default: Story = {};

export const CustomPageSize: Story = {
  args: {
    itemsPerPage: 3,
  },
};
