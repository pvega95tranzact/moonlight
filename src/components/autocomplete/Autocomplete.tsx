import { AutoComplete } from '@platform/react-components'
import React from 'react'

export const Autocomplete = () => {
  // warning in console
  return (
    <AutoComplete
    fetchSuggestions={ () => [
        "Arnold",
        "Aron",
        "Austin",
        "Ash",
        "James",
        "Jhon",
        "Bart",
        "Kimberly"
      ] }
    fieldName="userName"
    helperText="Field is Required"
    label="Look for user here"
    onChange={function noRefCheck(){}}
    value=""
    error={false}
    />
  )
}
