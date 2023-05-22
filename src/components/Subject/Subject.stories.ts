import type { Meta, StoryObj } from "@storybook/react";
import Subject from "./index";

const meta: Meta<typeof Subject> = {
  title: "Subject",
  component: Subject,
};

export default meta;
type Story = StoryObj<typeof Subject>;

export const Selected: Story = {};
