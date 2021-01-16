import React from 'react';

/**
 * Get the value of a cookie
 * Source: https://vanillajstoolkit.com/helpers/getcookie/
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();

  return undefined;
}

export default getCookie;
