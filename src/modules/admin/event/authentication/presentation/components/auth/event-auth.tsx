import React from 'react'
import CusSelect from '@/common/components/ui/form/select/select'

const options = [
  { value: 'MASTER_PASSWORD', label: 'Master Password' },
  { value: 'NO_PASSWORD', label: 'No Password' },
  { value: 'UNIQUE_PASSWORD', label: 'Unique Password' },
]

export default function EventAuth() {
  return (
    <div>
      <CusSelect label='Type'
        onChange={(val) => { console.log(val) }}
        defaultValue={"MASTER_PASSWORD"}
        options={options} />
    </div>
  )
}
