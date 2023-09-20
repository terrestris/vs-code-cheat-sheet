import type { KeyName } from "./KeyName";

export type Binding = KeyName | KeyName[];

export type Shortcut = {
  name: string;
  description: string;
  binding: Binding;
  alias?: string; // mainly for searching e.g. 'format' ≈ 'indent'
  vsCodeKey?: string;
  benefit?: 1 | 2 | 3 | 4 | 5;
}
