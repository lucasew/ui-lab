import type { Meta, StoryObj } from "@storybook/react-vite";
import { Teste } from "./Teste";

const meta = {
  component: Teste,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    item: { control: "text" },
  },
} satisfies Meta<typeof Teste>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Lucas: Story = {
  args: {
    item: "lucas",
  },
};

export const Trabson: Story = {
  args: {
    item: "trabson"
  }
};
