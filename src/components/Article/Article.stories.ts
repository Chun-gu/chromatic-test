import type { Meta, StoryObj } from "@storybook/react";
import Article from "./index";

const meta: Meta<typeof Article> = {
  title: "Article",
  component: Article,
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Selected: Story = {};
