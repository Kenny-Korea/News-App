import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => <Input variant="w-60 h-8" placeholder="small" />;
export const Medium = () => <Input variant="w-72 h-10" placeholder="medium" />;
export const Large = () => <Input variant="w-96 h-12" placeholder="large" />;
