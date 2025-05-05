import { Meta, StoryObj } from "@storybook/react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "./Accordion";
import "./accordion.css";

/**
 * The `Accordion` component displays a list of vertically stacked sections
 * that can be expanded or collapsed to show or hide content. Ideal for FAQs,
 * menus, or anywhere space needs to be conserved.
 *
 * This component is composed using `AccordionItem`, `AccordionTrigger`,
 * and `AccordionContent` for full flexibility.
 */

const meta: Meta<typeof Accordion> = {
	title: "Molecules/Accordion",
	component: Accordion,
	tags: ["autodocs"],
	subcomponents: { AccordionItem, AccordionTrigger, AccordionContent },
	parameters: {
		layout: "centered",
	},
	args: {
		type: "single",
		collapsible: true,
		className: "storybook-accordion",
	},
	argTypes: {
		type: {
			control: "radio",
			options: ["single", "multiple"],
			description: "Sets whether only one or multiple items can be expanded",
		},
		collapsible: {
			control: "boolean",
			description: "Allows an open item to be collapsed",
		},
		className: {
			control: "text",
			description: "Custom class name for the accordion wrapper",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	args: {
		type: "single",
		collapsible: true,
		className: "storybook-accordion",
	},
	render: (args) => (
		<Accordion {...args}>
			<AccordionItem value="item-1">
				<AccordionTrigger>Item 1</AccordionTrigger>
				<AccordionContent>
					This is the content for Item 1. You can place any text or elements here.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Item 2</AccordionTrigger>
				<AccordionContent>
					This is the content for Item 2. You can place any text or elements here.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Item 3</AccordionTrigger>
				<AccordionContent>
					This is the content for Item 3. You can place any text or elements here.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
	parameters: {
		docs: {
			description: {
				story:
					"A default accordion with three items. Only one item can be open at a time, and items are collapsible.",
			},
		},
	},
};
