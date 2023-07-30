import type { Meta, StoryObj } from "@storybook/react";

import { RowTextKeyValue } from "./RowTextKeyValue";

const meta: Meta<typeof RowTextKeyValue> = {
  title: "Atoms/RowTextKeyValue",
  component: RowTextKeyValue,
  tags: ["autodocs"],
  args: {
    keyText: "key",
    valueText: "value",
  },
};

export default meta;
type Story = StoryObj<typeof RowTextKeyValue>;

export const Default: Story = {};
