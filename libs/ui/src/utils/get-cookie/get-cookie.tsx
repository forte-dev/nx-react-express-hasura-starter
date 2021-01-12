import React from 'react';

/* eslint-disable-next-line */
export interface getCookieProps {
  name: string;
}

export function getCookie(name: getCookieProps) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();

  return undefined;
}

export default getCookie;
