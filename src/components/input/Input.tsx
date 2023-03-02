import { FormTextBox } from '@platform/react-components'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export const Input = () => {

    const formMethods = useForm({
        defaultValues: {
          foo: 'test'
        }
      })

  return (
    <FormProvider {...formMethods}>
      <FormTextBox name='foo' error helperText='a' value='foo' onChange={()=>{}} inputRef={null}/>
    </FormProvider>
  )
}
