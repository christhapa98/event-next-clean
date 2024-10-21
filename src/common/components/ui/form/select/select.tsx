"use client"
import React from 'react'
import { Label } from '@/common/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select.base'

interface CusSelectProps {
  label: string;
  defaultValue?: string;
  options: { value: string, label: string }[];
  onChange?: (value: string) => void;
}

export default function CusSelect({ label, defaultValue = '', options, onChange }: CusSelectProps) {
  return (
    <div className='space-y-2 w-full'>
      <Label>{label}</Label>
      <Select
        defaultValue={defaultValue}
        onValueChange={onChange}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a value" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
