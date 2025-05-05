import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

// Define custom args shape for Storybook stories
type CardStoryProps = {
  title?: string;
  description?: string;
  content: string;
  footer?: boolean;
  footerButtons?: string[];
};

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Card** component is a flexible container used to display grouped content. It includes optional subcomponents:

- \`CardHeader\` for the title and description.
- \`CardContent\` for the main content.
- \`CardFooter\` for actions or summaries.

Each subcomponent is fully customizable and composable for various use cases.
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<CardStoryProps>;

export const Default: Story = {
  args: {
    title: "Welcome",
    description: "This is a basic card component.",
    content: "You can add any content here — text, form elements, or visuals.",
    footer: true,
    footerButtons: ["Cancel", "Confirm"],
  },
  render: ({ title, description, content, footer, footerButtons }) => (
    <Card>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{content}</CardContent>
      {footer && (
        <CardFooter>
          {footerButtons?.map((text, idx) => (
            <button key={idx}>{text}</button>
          ))}
        </CardFooter>
      )}
    </Card>
  ),
};

export const WithLongContent: Story = {
  args: {
    title: "Article Summary",
    description: "Read this short overview of the latest report.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    footer: true,
    footerButtons: ["Read More"],
  },
  render: Default.render,
};

export const Minimal: Story = {
  args: {
    content: "Just a simple card with no header or footer.",
    footer: false,
  },
  render: Default.render,
};
