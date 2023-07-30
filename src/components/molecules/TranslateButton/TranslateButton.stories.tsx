import type { Meta, StoryObj } from "@storybook/react";

import { TranslateButton } from "./TranslateButton";

const meta: Meta<typeof TranslateButton> = {
  title: "Molecules/TranslateButton",
  component: TranslateButton,
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
type Story = StoryObj<typeof TranslateButton>;

export const Default: Story = {};
