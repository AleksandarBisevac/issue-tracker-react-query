import React from 'react';
import { possibleStatus } from '../helpers/defaultData';

export function StatusSelect({ value, onChange }) {
  return (
    <select value={value} onChange={onChange} className='status-select'>
      <option value={''} children='Select a status to filter' />
      {possibleStatus.map((status) => (
        <option key={status.id} value={status.id} children={status.label} />
      ))}
    </select>
  );
}
