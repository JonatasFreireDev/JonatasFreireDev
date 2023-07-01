import type { Meta, StoryObj } from "@storybook/react";

import { IconLink } from "./IconLink";
import { FaBeer } from "react-icons/fa";

const meta: Meta<typeof IconLink> = {
  title: "Atoms/IconLink",
  component: IconLink,
  tags: ["autodocs"],
  args: {
    icon: FaBeer,
    href: "#",
  },
};

export default meta;
type Story = StoryObj<typeof IconLink>;

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
