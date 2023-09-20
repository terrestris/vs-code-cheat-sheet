<script lang="ts">
  import { extensionFilter } from '../../stores/extensions';
</script>

<input
  class="extension-filter"
  placeholder="Filter …"
  autocomplete="off"
  bind:value={$extensionFilter}
/>

<style lang="less">
  input.extension-filter {
    font-size: 1.1em;
    border: none;
    border-bottom: 1px solid lightgray;
    transition: border-color 0.3s linear;

    &:focus-visible {
      outline: none;
      border-bottom: 2px solid black;
      margin-bottom: -1px;
    }
  }
</style>
