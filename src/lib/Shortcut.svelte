<script lang="ts">
  import type { Shortcut } from '../models/Shortcut';
  import Benefit from './Benefit.svelte';
  import Binding from './Binding.svelte';

  export let shortcut: Shortcut;
</script>

<tr class="shortcut">
  <td class="name" title={shortcut.vsCodeKey}>
    <span>{shortcut.name}</span>
  </td>
  <td>
    <Binding binding={shortcut.binding} />
  </td>
  <td>
    <span class="description">{shortcut.description}</span>
  </td>
  <td class="benefit">
    <Benefit benefit={shortcut.benefit} />
  </td>
</tr>

<style lang="less">
  td {
    vertical-align: top;
    padding: 1em 0;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transition : border 500ms ease-out;
  }
  td.benefit {
    vertical-align: middle;
  }
  tr:hover td {
    border-color: #333;
    border-color: #333;

  }
</style>
