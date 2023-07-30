import type { Meta, StoryObj } from "@storybook/react";

import { ScrollButton } from "./ScrollButton";

const meta: Meta<typeof ScrollButton> = {
  title: "Molecules/ScrollButton",
  component: ScrollButton,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "1000px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ScrollButton>;

export const Default: Story = {};
