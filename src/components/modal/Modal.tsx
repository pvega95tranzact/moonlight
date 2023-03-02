import { EntityDetails, FormTextBox, PrimaryButton } from "@platform/react-components";
import { useState } from "react";
import { Medications } from "../medications/Medications";

export const Modal = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <PrimaryButton
      label="Open modal"
      onClick={ ()=> setOpen(true) }
    />
    <hr />
     <EntityDetails
      maxWidth="sm"
      navigationProps={{
        canGoNext: true,
        canGoPrevious: true,
        goNext: function noRefCheck() {},
        goPrevious: function noRefCheck() {},
        isVisible: true,
      }}
      onClose={ ()=> setOpen(false) }
      open={open}
    >
      <Medications/>
    </EntityDetails>
    </>
   
  );
};
