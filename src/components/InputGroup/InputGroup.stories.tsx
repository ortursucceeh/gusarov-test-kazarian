// import { SIZES } from "@/utils/constants";
import { Meta, StoryObj } from "@storybook/react";
import { CircleHelp, Mail } from "lucide-react";
import { InputGroup } from "./InputGroup";
import { SIZES } from "@/utils/constants";

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Base: Story = {
  args: {
    id: "email",
    label: "Email",
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={16} />,
    iconRight: <CircleHelp size={16} />,
    text: "This is a hint to help user.",
  },
};

export const BaseError: Story = {
  args: {
    id: "email",
    label: "Email",
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={16} />,
    iconRight: <CircleHelp size={16} />,
    text: "This is a hint to help user.",
    error: "error",
  },
};

export const BaseDisabled: Story = {
  args: {
    id: "email",
    label: "Email",
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={16} />,
    iconRight: <CircleHelp size={16} />,
    text: "This is a hint to help user.",
    disabled: true,
  },
};

export const ExtraSmall: Story = {
  args: {
    id: "email",
    label: "Email",
    size: SIZES.XS,
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={14} />,
    iconRight: <CircleHelp size={14} />,
    text: "This is a hint to help user.",
  },
};

export const Large: Story = {
  args: {
    id: "email",
    label: "Email",
    size: SIZES.L,
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={14} />,
    iconRight: <CircleHelp size={14} />,
    text: "This is a hint to help user.",
  },
};

export const ExtraLarge: Story = {
  args: {
    id: "email",
    label: "Email",
    size: SIZES.XL,
    withHint: true,
    required: true,
    inputType: "email",
    placeholder: "Email",
    iconLeft: <Mail size={14} />,
    iconRight: <CircleHelp size={14} />,
    text: "This is a hint to help user.",
  },
};
// export const Base: Story = {
//   args: {
//     id: "email",
//     type: "email",
//     placeholder: "Email",
//     required: true,
//   },
// };

// export const Large: Story = {
//   args: {
//     id: "email",
//     type: "email",
//     placeholder: "Email",
//     required: true,
//     size: SIZES.L,
//   },
// };

// export const ExtraLarge: Story = {
//   args: {
//     id: "email",
//     type: "email",
//     placeholder: "Email",
//     required: true,
//     size: SIZES.XL,
//   },
// };

// export const BaseQuiet: Story = {
//   args: {
//     id: "email",
//     type: "email",
//     placeholder: "Email",
//     required: true,
//     isQuiet: true,
//   },
// };

// export const BaseIconLeft: Story = {
//   args: {
//     id: "email",
//     type: "email",
//     placeholder: "Email",
//     required: true,
//     iconLeft: <Mail size={16} />,
//   },
// };

// export const BaseIconRight: Story = {
//   args: {
//     id: "email",
//     type: "email",
//     placeholder: "Email",
//     required: true,
//     iconRight: <CircleHelp size={16} />,
//   },
// };

// export const BaseBothIcons: Story = {
//   args: {
//     id: "email",
//     type: "email",
//     placeholder: "Email",
//     required: true,
//     iconLeft: <Mail size={16} />,
//     iconRight: <CircleHelp size={16} />,
//   },
// };

// export const BaseWithError: Story = {
//   args: {
//     id: "email",
//     type: "email",
//     placeholder: "Email",
//     required: true,
//     isError: true,
//   },
// };

// export const BaseDisabeld: Story = {
//   args: {
//     id: "email",
//     type: "email",
//     placeholder: "Email",
//     disabled: true,
//   },
// };

// // export const ExtraLarge: Story = {
// //   args: {
// //     id: "email",
// //     label: "Email",
// //     withHint: true,
// //     required: true,
// //     size: SIZES.XL,
// //   },
// // };

// // export const Disabled: Story = {
// //   args: {
// //     id: "email",
// //     label: "Email",
// //     withHint: true,
// //     required: true,
// //     disabled: true,
// //   },
// // };
