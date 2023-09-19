<script lang="ts">
  import { initStore, shortcuts } from '../stores/shortcuts';
  import { sortBy } from '../utils';
  import Shortcut from './Shortcut.svelte';

  $: sortedShortcuts = $shortcuts.sort(sortBy('benefit', 'desc'));
</script>

<div class="shortcut-list">
  {#await initStore()}
    <p>Fetching Shortcutlist...</p>
  {:then}
    <table>
    {#each sortedShortcuts as shortcut}
      <Shortcut {shortcut} />
    {/each}
    </table>
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>

<style lang="less">
  div.shortcut-list {
    padding: 1em 4em;
    table {
      border-spacing: 0;
    }
  }
</style>
