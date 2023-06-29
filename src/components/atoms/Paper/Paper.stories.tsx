import type { Meta, StoryObj } from "@storybook/react";

import { Paper } from "./Paper";

const Content = () => {
  return (
    <div style={{ background: "grey", color: "white", padding: "5px" }}>
      Content
    </div>
  );
};

const meta: Meta<typeof Paper> = {
  title: "Atoms/Paper",
  component: Paper,
  args: {
    children: <Content />,
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const FullSize: Story = {
  render: () => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Paper>aoba</Paper>
    </div>
  ),
};
