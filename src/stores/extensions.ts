import { derived, writable } from 'svelte/store';
import type { Extension } from '../models/Extension';

const initialValue = [{
  name: 'Emoji',
  description: 'Plugin to insert emoji from the command palette',
  link: 'https://marketplace.visualstudio.com/items?itemName=Perkovec.emoji'
}, {
  name: 'Thunder Client',
  description: 'Lightweight Rest API Client for VS Code'
}] satisfies Extension[];

export const extensions = writable<Extension[]>(initialValue);

export const extensionFilter = writable<string>();
export const filteredExtensions = derived([extensions, extensionFilter], ([$extensions, $filter]) => {
  if (!$filter) {
    return $extensions;
  }
  return $extensions.filter(extension => extension.name.toLowerCase().includes($filter.toLowerCase()));
})

export const initStore = async () => {
  const result = await fetch('./extensions.json');
  const json = await result.json();
  extensions.set(json);
};
