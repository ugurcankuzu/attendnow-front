import { HTMLAttributes, InputHTMLAttributes } from "react";

interface IInputAttributes {
  inputOpts?: InputHTMLAttributes<HTMLInputElement>;
  styleOpts?: {
    inputWrapper?: string;
    label?: string;
    input?: string;
  };
  labelText: string;
}
export default function Input(args: IInputAttributes) {
  return (
    <div className={args.styleOpts?.inputWrapper ?? inputStyles.inputWrapper}>
      <label className={args.styleOpts?.label ?? inputStyles.label}>
        {args.labelText}
      </label>
      <input
        type=""
        className={args.styleOpts?.input ?? inputStyles.input}
        {...(args.inputOpts ?? null)}
      />
    </div>
  );
}

const inputStyles = {
  inputWrapper: "flex flex-col gap-2",
  input:
    "w-full rounded shadow bg-white px-4 py-2 border border-white transition-border duration-[.25s] hover:border-levander-pink focus:outline-none focus:border-levander-pink",
  label: "text-md",
};
