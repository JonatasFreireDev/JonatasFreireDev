import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const Content = () => {
  return (
    <div style={{ background: "darkgrey", color: "white", padding: "5px" }}>
      Content
    </div>
  );
};

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "header",
    children: <Content />,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
