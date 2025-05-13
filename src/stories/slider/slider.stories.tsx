import type { Meta, StoryObj } from "@storybook/react";
import { SliderDemo } from "./slider";
import "./slider.css";

const meta: Meta<typeof SliderDemo> = {
  title: "Atoms/Slider",
  component: SliderDemo,
  tags: ["autodocs"],
  args: {
    defaultValue: [25],
    min: 0,
    max: 100,
    step: 5,
  },
  argTypes: {
    defaultValue: {
      control: "object",
      description: "Initial slider value (supports range)",
    },
    min: {
      control: "number",
      description: "Minimum value of the slider",
    },
    max: {
      control: "number",
      description: "Maximum value of the slider",
    },
    step: {
      control: "number",
      description: "Increment between steps",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Slider** component is a Radix UI-based slider used for numeric selection.
It supports single and range values, keyboard interaction, and full accessibility.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SliderDemo>;

export const Default: Story = {};

export const FineGrained: Story = {
  args: {
    step: 1,
    defaultValue: [42],
  },
};

export const RangeSlider: Story = {
  args: {
    defaultValue: [20, 80],
  },
};
