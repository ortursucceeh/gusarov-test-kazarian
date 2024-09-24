import { SIZES } from "@/utils/constants";
import { InputLabel } from "./InputLabel";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputLabel> = {
  title: "Components/InputLabel",
  component: InputLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    id: "email",
    label: "Email",
    withHint: true,
    required: true,
  },
};

export const ExtraLarge: Story = {
  args: {
    id: "email",
    label: "Email",
    withHint: true,
    required: true,
    size: SIZES.XL,
  },
};

export const Disabled: Story = {
  args: {
    id: "email",
    label: "Email",
    withHint: true,
    required: true,
    disabled: true,
  },
};
