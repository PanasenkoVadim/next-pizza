'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="c734ec3537ffd48cdcef58cdb4a0bd493a3e75a6"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
