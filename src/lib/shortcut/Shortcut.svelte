<script lang="ts">
  import type { Shortcut } from '../../models/Shortcut';
  import Benefit from '../Benefit.svelte';
  import Binding from '../Binding.svelte';

  export let shortcut: Shortcut;
</script>

<div class="shortcut">
  <label class="name" title={shortcut.vsCodeKey} for="">
    <span>{shortcut.name}</span>
  </label>
  <Binding binding={shortcut.binding} />
  <span class="description">{shortcut.description}</span>
  <Benefit benefit={shortcut.benefit} />
</div>

<style lang="less">
  div.shortcut {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 0;

    .name {
      padding: 0 1em;
      flex: 1;
    }

    :global(.binding) {
      flex: 2;
    }

    .description {
      flex: 4;
      padding: 0 0.25em;
    }
  }
  @media print {
    div.shortcut {
      border-bottom: 1px solid darkgrey;
      align-items: start;
    }
  }
</style>
