import type { Meta, StoryObj } from "@storybook/react";

import { Welcome } from "./Welcome";
import { Container } from "@/components/atoms";

const meta: Meta<typeof Welcome> = {
  title: "Organisms/Welcome",
  component: Welcome,
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
type Story = StoryObj<typeof Welcome>;

export const Default: Story = {};
