import { SIZES } from "@/utils/constants";
import { InputText } from "./InputText";
import { Meta, StoryObj } from "@storybook/react";
import { CircleHelp, Mail } from "lucide-react";

const meta: Meta<typeof InputText> = {
  title: "Components/InputText",
  component: InputText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    size: SIZES.XS,
  },
};

export const Base: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
    required: true,
  },
};

export const Large: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    size: SIZES.L,
  },
};

export const ExtraLarge: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    size: SIZES.XL,
  },
};

export const BaseQuiet: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    isQuiet: true,
  },
};

export const BaseIconLeft: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    iconLeft: <Mail size={16} />,
  },
};

export const BaseIconRight: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    iconRight: <CircleHelp size={16} />,
  },
};

export const BaseBothIcons: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    iconLeft: <Mail size={16} />,
    iconRight: <CircleHelp size={16} />,
  },
};

export const BaseWithError: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    isError: true,
  },
};

export const BaseDisabeld: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
    disabled: true,
  },
};

// export const ExtraLarge: Story = {
//   args: {
//     id: "email",
//     label: "Email",
//     withHint: true,
//     required: true,
//     size: SIZES.XL,
//   },
// };

// export const Disabled: Story = {
//   args: {
//     id: "email",
//     label: "Email",
//     withHint: true,
//     required: true,
//     disabled: true,
//   },
// };
