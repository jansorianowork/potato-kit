import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@/components/ui/textarea";

/**
 * The `Textarea` component is a multi-line text input field.
 * It supports various sizes, states, and styling options for different use cases.
 */
const meta: Meta<typeof Textarea> = {
    title: "Molecules/Textarea",
    component: Textarea,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
The **Textarea** component is used for multi-line text input. It supports the following features:

- **Flexible Sizing**: Control the height with CSS or the \`rows\` attribute.
- **States**: Support for disabled, readonly, and error states.
- **Customizable**: Easily styled with custom classes and attributes.
- **Accessible**: Built with accessibility best practices in mind.

### Usage
\`\`\`tsx
<Textarea placeholder="Enter your message..." />
\`\`\`
                `,
            },
        },
    },
    argTypes: {
        placeholder: {
            control: "text",
            description: "Placeholder text displayed when the textarea is empty",
        },
        disabled: {
            control: "boolean",
            description: "Disables the textarea and prevents user input",
        },
        rows: {
            control: "number",
            description: "Number of visible rows",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/**
 * Default Textarea story with placeholder text.
 */
export const Default: Story = {
    args: {
        placeholder: "Enter your message here...",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the default Textarea story with a placeholder text.",
            },
        },
    },
};

/**
 * Textarea with predefined value.
 */
export const WithValue: Story = {
    args: {
        placeholder: "Enter your message here...",
        defaultValue: "This is a textarea with a predefined value. You can edit this text.",
    },
    parameters: {
        docs: {
            description: {
                story: "This story shows a Textarea with a predefined value.",
            },
        },
    },
};

/**
 * Disabled Textarea.
 */
export const Disabled: Story = {
    args: {
        placeholder: "This textarea is disabled",
        disabled: true,
        defaultValue: "You cannot edit this text.",
    },
    parameters: {
        docs: {
            description: {
                story: "This story shows a disabled Textarea that prevents user input.",
            },
        },
    },
};

/**
 * Read-only Textarea.
 */
export const ReadOnly: Story = {
    args: {
        placeholder: "This textarea is read-only",
        readOnly: true,
        defaultValue: "You can view but not edit this text.",
    },
    parameters: {
        docs: {
            description: {
                story: "This story shows a read-only Textarea that cannot be modified.",
            },
        },
    },
};

/**
 * Small Textarea with few rows.
 */
export const Small: Story = {
    args: {
        placeholder: "Small textarea...",
        rows: 2,
    },
    parameters: {
        docs: {
            description: {
                story: "This story shows a small Textarea with 2 rows.",
            },
        },
    },
};

/**
 * Large Textarea with many rows.
 */
export const Large: Story = {
    args: {
        placeholder: "Large textarea for detailed messages...",
        rows: 8,
    },
    parameters: {
        docs: {
            description: {
                story: "This story shows a large Textarea with 8 rows for longer text input.",
            },
        },
    },
};

/**
 * Textarea with error state (using className).
 */
export const WithError: Story = {
    args: {
        placeholder: "Enter your message...",
        className: "border-red-500",
        defaultValue: "This field has an error",
    },
    parameters: {
        docs: {
            description: {
                story: "This story shows a Textarea with an error state using a red border.",
            },
        },
    },
};

/**
 * Textarea with focus state.
 */
export const Focused: Story = {
    args: {
        placeholder: "This textarea is focused...",
        autoFocus: true,
    },
    parameters: {
        docs: {
            description: {
                story: "This story shows a Textarea that is automatically focused when the story loads.",
            },
        },
    },
};