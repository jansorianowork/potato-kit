import type { Meta, StoryObj } from "@storybook/react";
import { SideBar, SidebarItem } from "./SideBar";
import "./sidebar.css";

const sampleItems: SidebarItem[] = [
  { label: "Dashboard", link: "/dashboard" },
  {
    label: "Settings",
    children: [
      { label: "Profile", link: "/settings/profile" },
      { label: "Security", link: "/settings/security" },
    ],
  },
  { label: "Help", link: "/help" },
];

const meta: Meta<typeof SideBar> = {
  title: "Molecules/SideBar",
  component: SideBar,
  tags: ["autodocs"],
  args: {
    items: sampleItems,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **SideBar** component is a vertical navigation menu. It supports nested links and is ideal for application navigation.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const NestedOnly: Story = {
  args: {
    items: [
      {
        label: "Parent",
        children: [
          { label: "Child 1", link: "/child-1" },
          { label: "Child 2", link: "/child-2" },
        ],
      },
    ],
  },
};
