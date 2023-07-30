import type { Meta, StoryObj } from "@storybook/react";

import { CardTech } from "./CardTech";
import { SiReact } from "react-icons/si";

const meta: Meta<typeof CardTech> = {
  title: "Molecules/CardTech",
  component: CardTech,
  tags: ["autodocs"],
  args: {
    Icon: SiReact,
  },
  argTypes: {
    handleActive: { action: "onMouseEnter" },
  },
};

export default meta;
type Story = StoryObj<typeof CardTech>;

export const Default: Story = {};
