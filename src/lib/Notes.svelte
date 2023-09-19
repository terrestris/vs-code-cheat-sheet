<script lang="ts">
  import { parse as parseMarkdown} from 'marked';
  import { initStore, notes } from '../stores/notes';
</script>

<div class="extension-list">
  {#await initStore()}
    <p>Fetching Notes...</p>
  {:then}
    {@html parseMarkdown.parse($notes)}
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>

<style lang="less">
  div.extension-list {
    padding: 0 4em;
  }
</style>
