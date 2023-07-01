import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Atoms/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat, tortor ac euismod ultrices, turpis velit maximus nulla, ac maximus magna erat sed urna. Proin commodo pulvinar mi, pulvinar facilisis ligula dignissim at. Aenean sed ultrices elit, id imperdiet velit. Donec eu mauris ut neque vestibulum sollicitudin. Vestibulum sed mattis purus. Nulla turpis augue, venenatis ac blandit eu, facilisis vehicula diam. Etiam mi magna, vulputate sed libero lobortis, bibendum congue est.",
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {};
