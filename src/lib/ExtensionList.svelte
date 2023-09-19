<script lang="ts">
  import { initStore, extensions } from '../stores/extensions';
  import { sortBy } from '../utils';
  import Extension from './Extension.svelte';

  $: sortedExtensions = $extensions.sort(sortBy('benefit', 'desc'));
</script>

<div class="extension-list">
  {#await initStore()}
    <p>Fetching Extensionlist...</p>
  {:then}
    {#each sortedExtensions as extension}
      <Extension {extension} />
    {/each}
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>

<style lang="less">
  div.extension-list {
    padding: 1em 4em;
  }
</style>
