<script lang="ts">
  import { initStore, filteredShortcuts } from '../../stores/shortcuts';
  import { sortBy } from '../../utils';
  import Shortcut from './Shortcut.svelte';

  $: sortedShortcuts = $filteredShortcuts.sort(sortBy('benefit', 'desc'));

</script>

<div class="shortcut-list">
  {#await initStore()}
    <p>Fetching Shortcutlist...</p>
  {:then}
    {#each sortedShortcuts as shortcut}
      <Shortcut {shortcut} />
    {/each}
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>

<style lang="less">
  div.shortcut-list {
    padding: 1em 4em;
  }
  @media print {
    div.shortcut-list {
      padding: 1em 0 0 0;
    }
  }
</style>
