import { derived, writable } from 'svelte/store';
import type { Shortcut } from '../models/Shortcut';

const initialValue = [{
  name: 'Copy',
  description: 'Copys the selected code',
  benefit: 5,
  binding: ['Ctrl', 'C']
}, {
  name: 'Paste',
  description: 'Pastes the selected code',
  benefit: 5,
  binding: ['Ctrl', 'V']
}] satisfies Shortcut[];

export const shortcuts = writable<Shortcut[]>(initialValue);

export const shortcutFilter = writable<string>();
export const filteredShortcuts = derived([shortcuts, shortcutFilter], ([$shortcuts, $filter]) => {
  if (!$filter) {
    return $shortcuts;
  }
  return $shortcuts.filter(shortcut =>
    shortcut.name.toLowerCase().includes($filter.toLowerCase()) ||
    shortcut.vsCodeKey?.toLowerCase().includes($filter.toLowerCase()) ||
    shortcut.alias?.toLowerCase().includes($filter.toLowerCase())
  )
})

export const initStore = async () => {
  const result = await fetch('./shortcuts.json');
  const json = await result.json();
  shortcuts.set(json);
};
