import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/components/ui/button";
import "./button.css";

/**
 * The `Button` component is a versatile UI element for user interactions.
 * It supports various sizes, styles, and states for different use cases.
 */
const meta: Meta<typeof Button> = {
	title: "Molecules/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
The **Button** component is used for user interactions and actions. It supports the following features:

- **Variants**: Default, destructive, outline, secondary, ghost, and link styles.
- **Sizes**: Small, default, large, and icon sizes to fit various layouts.
- **Event Handling**: Full support for click handlers and other interactions.
- **Accessible**: Built with accessibility best practices in mind.

### Usage
\`\`\`tsx
<Button variant="default" onClick={handleClick}>Click me</Button>
<Button variant="outline" size="sm">Small Button</Button>
\`\`\`
                `,
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
			description: "Button style variant",
			table: {
				type: {
					summary:
						"default | destructive | outline | secondary | ghost | link",
				},
				defaultValue: { summary: "default" },
			},
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", "icon"],
			description: "Button size variant",
			table: {
				type: { summary: "default | sm | lg | icon" },
				defaultValue: { summary: "default" },
			},
		},
		onClick: {
			action: "clicked",
			description: "Click event handler",
			table: {
				type: { summary: "function" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Disable the button",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		asChild: {
			control: "boolean",
			description: "Use Slot to allow custom component composition",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
	args: {
		onClick: fn(),
		children: "Button",
		className: "storybook-button",
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Default button variant.
 */
export const Default: Story = {
	args: {
		variant: "default",
		children: "Default Button",
		className: "storybook-button storybook-button--default",
	},
};

/**
 * Destructive button for dangerous actions.
 */
export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Delete",
		className: "storybook-button storybook-button--destructive",
	},
	parameters: {
		docs: {
			description: {
				story: "Use for actions that cannot be undone, like deletions.",
			},
		},
	},
};

/**
 * Outline button variant.
 */
export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline Button",
		className: "storybook-button storybook-button--outline",
	},
};

/**
 * Secondary button variant.
 */
export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary",
		className: "storybook-button storybook-button--secondary",
	},
};

/**
 * Ghost button variant with minimal styling.
 */
export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Ghost Button",
		className: "storybook-button storybook-button--ghost",
	},
};

/**
 * Link button variant.
 */
export const Link: Story = {
	args: {
		variant: "link",
		children: "Link Button",
		className: "storybook-button storybook-button--link",
	},
};

/**
 * Small button size.
 */
export const Small: Story = {
	args: {
		size: "sm",
		children: "Small",
		className:
			"storybook-button storybook-button--default storybook-button--sm",
	},
};

/**
 * Large button size.
 */
export const Large: Story = {
	args: {
		size: "lg",
		children: "Large Button",
		className:
			"storybook-button storybook-button--default storybook-button--lg",
	},
};

/**
 * Icon button size.
 */
export const Icon: Story = {
	args: {
		size: "icon",
		children: "🔍",
		className:
			"storybook-button storybook-button--default storybook-button--icon",
	},
};

/**
 * Disabled button state.
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Disabled Button",
		className: "storybook-button storybook-button--default",
	},
};

/**
 * Destructive button in disabled state.
 */
export const DisabledDestructive: Story = {
	args: {
		variant: "destructive",
		disabled: true,
		children: "Delete",
		className: "storybook-button storybook-button--destructive",
	},
};
