import type { Meta, StoryObj } from "@storybook/react";

import { CircularPhoto } from "./CircularPhoto";

const meta: Meta<typeof CircularPhoto> = {
  title: "Atoms/CircularPhoto",
  component: CircularPhoto,
};

export default meta;
type Story = StoryObj<typeof CircularPhoto>;

export const Teste: Story = {
  render: () => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CircularPhoto />
    </div>
  ),
};
