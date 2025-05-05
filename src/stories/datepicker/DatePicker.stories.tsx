import type { Meta, StoryObj } from "@storybook/react";
import DatePickerStory from "./DatePicker";
import "./datePicker.css";

const meta: Meta<typeof DatePickerStory> = {
	title: "Molecules/DatePicker",
	component: DatePickerStory,
	tags: ["autodocs"],
	args: {
		placeholder: "Pick a date",
	},
	argTypes: {
		placeholder: {
			control: "text",
			description: "Placeholder text shown when no date is selected",
		},
	},
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
The **DatePicker** component is a reusable input field for selecting dates.
It uses **react-datepicker** and supports a placeholder, custom formatting, and styling.
        `,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof DatePickerStory>;

export const Default: Story = {
	args: {
		placeholder: "Pick a date",
	},
};

export const WithCustomPlaceholder: Story = {
	args: {
		placeholder: "Choose your birthday",
	},
};
