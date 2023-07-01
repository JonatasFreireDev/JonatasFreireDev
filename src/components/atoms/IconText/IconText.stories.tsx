import type { Meta, StoryObj } from "@storybook/react";

import { IconText } from "./IconText";
import { FaBeer } from "react-icons/fa";

const meta: Meta<typeof IconText> = {
  title: "Atoms/IconText",
  component: IconText,
  tags: ["autodocs"],
  args: {
    icon: FaBeer,
  },
};

export default meta;
type Story = StoryObj<typeof IconText>;

export const WithText: Story = {
  args: {
    content: "Link To",
  },
};

export const IconRight: Story = {
  args: {
    content: "Link To",
    side: "right",
  },
};

export const WithoutText: Story = {
  args: {},
};
