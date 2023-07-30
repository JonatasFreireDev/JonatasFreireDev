import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./Container";

const Content = () => {
  return (
    <div style={{ background: "darkgrey", color: "white", padding: "5px" }}>
      Content
    </div>
  );
};

const meta: Meta<typeof Container> = {
  title: "Atoms/Container",
  component: Container,
  tags: ["autodocs"],
  args: {
    title: "Header",
    size: "full",
    children: <Content />,
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const FullSize: Story = {};

export const MediumSize: Story = {
  args: {
    size: "md",
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm",
  },
};

export const WithoutTitle: Story = {
  args: {
    title: undefined,
  },
};
