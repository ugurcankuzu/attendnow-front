import TLoginRegister from "@/types/loginRegisterFormType";
import { Dispatch, MouseEvent, SetStateAction } from "react";

interface IFormPickerComponent {
  form: TLoginRegister;
  setFormType: Dispatch<SetStateAction<TLoginRegister>>;
}
export default function FormPicker({
  form,
  setFormType,
}: IFormPickerComponent) {
  return (
    <div className={formPickerStyles.pickerWrapper}>
      <a
        className={`${formPickerStyles.pickerSelection} ${
          form == "REGISTER"
            ? formPickerStyles.pickerSelectionActive
            : formPickerStyles.pickerSelectionNonActive
        }`}
        onClick={() => setFormType("REGISTER")}
      >
        Register
      </a>
      <a
        className={`${formPickerStyles.pickerSelection} ${
          form == "LOGIN"
            ? formPickerStyles.pickerSelectionActive
            : formPickerStyles.pickerSelectionNonActive
        }`}
        onClick={() => setFormType("LOGIN")}
      >
        Login
      </a>
    </div>
  );
}

const formPickerStyles = {
  pickerWrapper: "flex items-center gap-4 w-full",
  pickerSelection:
    "relative cursor-pointer before:block before:content-[''] before:bg-levander-pink before:-bottom-[5px] before:transition-w before:duration-[.75s] before:absolute",
  pickerSelectionActive: "before:w-full before:h-[5px]",
  pickerSelectionNonActive: "before:w-[0] before:h-[5px]",
};
