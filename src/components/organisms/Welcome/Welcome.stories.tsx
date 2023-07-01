import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "@/components/atoms/Container";
import { Welcome } from "./Welcome";

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
