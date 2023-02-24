import React from "react";

type InputProp = {
  variant: string;
  placeholder: string;
};

const Input = (props: InputProp) => {
  const { variant = "medium" } = props;

  return (
    <>
      <input
        type="text"
        className={`bg-slate-100 px-3 py-2 text-sm outline-none ${variant}`}
      />
    </>
  );
};

export default Input;
