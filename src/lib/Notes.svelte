<script lang="ts">
  import { parse as parseMarkdown} from 'marked';
  import { initStore, notes } from '../stores/notes';
</script>

<div class="notes">
  {#await initStore()}
    <p>Fetching Notes...</p>
  {:then}
    {@html parseMarkdown.parse($notes)}
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>

<style lang="less">
  div.notes {
    padding: 1em 4em;
  }
  @media print {
    div.notes {
      padding: 1em 0 0 0;
    }
  }
</style>
