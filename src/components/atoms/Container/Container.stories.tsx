import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./Container";

const Content = () => {
  return (
    <div style={{ background: "grey", color: "white", padding: "5px" }}>
      Content
    </div>
  );
};

const meta: Meta<typeof Container> = {
  title: "Atoms/Container",
  component: Container,
  args: {
    title: "sae",
    size: "full",
    children: <Content />,
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const FullSize: Story = {
  render: () => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Container size="md" title={"Aoba"}>
        aoba
      </Container>
    </div>
  ),
};

export const MediumSize: Story = {
  args: {
    size: "md",
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm",
  },
};
