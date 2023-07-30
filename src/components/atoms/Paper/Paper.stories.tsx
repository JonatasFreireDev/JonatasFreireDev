import type { Meta, StoryObj } from "@storybook/react";

import { Paper } from "./Paper";

const Content = () => {
  return (
    <div style={{ background: "grey", color: "white", padding: "5px" }}>
      content
    </div>
  );
};

const meta: Meta<typeof Paper> = {
  title: "Atoms/Paper",
  component: Paper,
  tags: ["autodocs"],
  args: {
    children: <Content />,
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const WithBorder: Story = {
  args: {
    border: "md",
  },
};

export const Rounded: Story = {
  args: {
    border: "none",
    rounded: "md",
  },
};
