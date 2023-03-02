import { FormTextBox } from "@platform/react-components";
import React, { useState } from "react";

export const Select = () => {
  const [value, setValue] = useState('')
  return (
    <FormTextBox
      name="foo"
      error
      helperText="a"
      value={value}
      onChange={(e:any) => { 
        const value: any = e.target.value
        setValue(value)
      }}
      inputRef={null}
      selectItems={[
        {
          label: "Foo",
          value: "foo",
        },
        {
          label: "Test",
          value: "test",
        },
      ]}
    />
  );
};
