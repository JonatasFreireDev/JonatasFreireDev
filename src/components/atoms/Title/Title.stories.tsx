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
    algin: "center",
  },
};

export const AlignLeft: Story = {
  args: {
    algin: "left",
  },
};

export const TextSize: Story = {
  args: {
    size: "lg",
  },
};
