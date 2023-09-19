import { writable } from 'svelte/store';

export const notes = writable<string>();

export const initStore = async () => {
  const result = await fetch('./notes.md');
  const text = await result.text();
  notes.set(text);
};
