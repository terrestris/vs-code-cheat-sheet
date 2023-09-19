import { derived, writable } from 'svelte/store';
import type { Extension } from '../models/Extension';
import { sortBy } from '../utils';

const initialValue = [{
  name: 'Emoji',
  description: 'Plugin to insert emoji from the command palette',
  link: 'https://marketplace.visualstudio.com/items?itemName=Perkovec.emoji'
}, {
  name: 'Thunder Client',
  description: 'Lightweight Rest API Client for VS Code'
}] satisfies Extension[];

export const extensions = writable<Extension[]>(initialValue);

export const sortedExtensions = derived(extensions, scs => scs.sort(sortBy('benefit', 'desc')));

export const initStore = async () => {
  const result = await fetch('./extensions.json');
  const json = await result.json();
  extensions.set(json);
};
