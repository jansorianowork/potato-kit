import type { Meta, StoryObj } from "@storybook/react";
import { CarouselDemo } from "./Carousel";

type CarouselDemoProps = {
  items: string[];
};

const meta: Meta<typeof CarouselDemo> = {
  title: "Molecules/Carousel",
  component: CarouselDemo,
  tags: ["autodocs"],
  args: {
    items: ["Slide 1", "Slide 2", "Slide 3"],
  },
  argTypes: {
    items: {
      control: { type: "object" },
      description: "Array of strings to display in the carousel",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A fully customizable carousel built with Embla Carousel and composable UI primitives.
Use the \`Carousel\` component with content and navigation components like \`CarouselItem\`, \`CarouselNext\`, etc.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<CarouselDemoProps>;

export const Default: Story = {
  args: {
    items: ["Slide 1", "Slide 2", "Slide 3"],
  },
};

export const FiveSlides: Story = {
  args: {
    items: ["One", "Two", "Three", "Four", "Five"],
  },
};
