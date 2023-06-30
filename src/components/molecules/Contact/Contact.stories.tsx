import type { Meta, StoryObj } from "@storybook/react";

import { Contact } from "./Contact";

const meta: Meta<typeof Contact> = {
  title: "Molecules/Contact",
  component: Contact,
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  render: () => <Contact />,
};
