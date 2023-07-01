import type { Meta, StoryObj } from "@storybook/react";

import { AboutMe } from "./AboutMe";
import { Container } from "@/components/atoms";

const meta: Meta<typeof AboutMe> = {
  title: "Organisms/AboutMe",
  component: AboutMe,
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
type Story = StoryObj<typeof AboutMe>;

export const Default: Story = {};
