const ThemeKey = 'peregrine-theme';

export function getTheme() {
  return localStorage.getItem(ThemeKey) || '';
}

export function setTheme(key: string) {
  localStorage.setItem(ThemeKey, key);
}

export function removeTheme() {
  localStorage.setItem(ThemeKey, '');
}