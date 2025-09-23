// Cookie utility functions

//! Get a cookie 

export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

//! Set a cookie

export const setCookie = (name: string, value: string): void => {
  document.cookie = `${name}=${value};path=/`;
};

//! Remove a cookie

export const removeCookie = (name: string): void => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

//! Clear all cookies

export const clearAllCookies = (): void => {
  const cookies = document.cookie.split(';');
  cookies.forEach(cookie => {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    removeCookie(name);
  });
};
