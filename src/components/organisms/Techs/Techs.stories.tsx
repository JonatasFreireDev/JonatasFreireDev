import type { Meta, StoryObj } from "@storybook/react";

import { Techs } from "./Techs";
import { Container } from "@/components/atoms";

const meta: Meta<typeof Techs> = {
  title: "Organisms/Techs",
  component: Techs,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container size="full">
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Techs>;

export const Default: Story = {};
