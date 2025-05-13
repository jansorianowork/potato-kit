import type { Meta, StoryObj } from "@storybook/react";
import { FormDemo } from "./form";
import "./form.css";

const meta: Meta<typeof FormDemo> = {
  title: "Molecules/Form",
  component: FormDemo,
  tags: ["autodocs"],
  args: {
    defaultName: "",
    label: "Name",
    placeholder: "Your name",
    description: "This is your display name.",
  },
  argTypes: {
    defaultName: {
      control: "text",
      description: "Default value for the name input",
    },
    label: {
      control: "text",
      description: "Label text for the input field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text in the input",
    },
    description: {
      control: "text",
      description: "Helper text shown below the input",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Form** component is a wrapper around \`react-hook-form\` and Radix primitives that provides validation context and custom UI pieces like \`FormLabel\`, \`FormControl\`, \`FormMessage\`, and more.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormDemo>;

export const Default: Story = {
  args: {
    defaultName: "John Doe",
    label: "Full Name",
    placeholder: "Enter your full name",
    description: "Used for your public profile.",
  },
};
