import { Checkbox, FormControlLabel } from "@mui/material";
import { FormTextBox, PrimaryButton } from "@platform/react-components";
import'../medications/medications.css'

export const Medications = () => {
  return (
    <section className="medication">
      <h1>Medications</h1>
      <hr />
      <div>
        <h3>Medication name</h3>
        <FormTextBox
          name="foo"
          error
          helperText="a"
          value="foo"
          onChange={() => {}}
          inputRef={null}
        />
      </div>
      <div>
        <h3>Dosage</h3>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Azythromycin PACK 1GM"
        />
      </div>
      <div>
        <h3>Select a package for Azithomycin</h3>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="3 EA Box"
        />
      </div>
      <div className="medication__dosis">
        <span>Quantity per refil</span>
        <FormTextBox
          name="foo"
          error
          helperText="a"
          value="foo"
          onChange={() => {}}
          inputRef={null}
        />
        <span>Refill frecuency</span>
        <FormTextBox
          name="foo"
          error
          helperText="a"
          value={""}
          onChange={() => {}}
          inputRef={null}
          selectItems={[
            {
              label: "Every day",
              value: "foo",
            },
            {
              label: "Every month",
              value: "test",
            },
          ]}
        />
      </div>
      <hr />
      <PrimaryButton label="Save pharmacy" />
    </section>
  );
};
