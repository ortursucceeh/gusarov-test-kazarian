import { SIZES } from "@/utils/constants";
import { InputAnnotation } from "./InputAnnotation";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputAnnotation> = {
  title: "Components/InputAnnotation",
  component: InputAnnotation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: "This is a hint to help user",
  },
};

export const Large: Story = {
  args: {
    text: "This is a hint to help user",
    size: SIZES.L,
  },
};

export const Error: Story = {
  args: {
    text: "This is a hint to help user",
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    text: "This is a hint to help user",
    disabled: true,
  },
};
