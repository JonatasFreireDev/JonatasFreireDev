import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "Atoms/Title",
  component: Title,
  tags: ["autodocs"],
  args: {
    text: "Header",
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Align: Story = {
  args: {
    textAlign: "center",
  },
};

export const AlignLeft: Story = {
  args: {
    textAlign: "left",
  },
};

export const TextSize: Story = {
  args: {
    textSize: "lg",
  },
};
