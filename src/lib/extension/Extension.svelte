<script lang="ts">
  import type { Extension } from '../../models/Extension';
  import Benefit from '../Benefit.svelte';
  import OutlineIcon from '../OutlineIcon.svelte';

  export let extension: Extension;
</script>

<div class="extension">
  <span class="name">
    {extension.name}
    {#if extension.link}
      <a href={extension.link} target="_blank">
        <OutlineIcon>open_in_new</OutlineIcon>
      </a>
    {/if}
  </span>
  <span class="description">{extension.description}</span>
  <Benefit benefit={extension.benefit} />
</div>

<style lang="less">
  div.extension {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 0;

    .name {
      display: flex;
      padding: 0 1em;
      flex: 1;

      a {
        margin-left: 0.5em;
      }
    }

    :global(.binding) {
      flex: 2;
    }

    .description {
      flex: 4;
    }

  }

  @media print {
    div.extension {
      border-bottom: 1px solid darkgrey;
      align-items: start;
    }
  }
</style>
