<script lang="ts">
  import { shortcutFilter } from '../../stores/shortcuts';
</script>

<input
  class="shortcut-filter"
  placeholder="Filter …"
  autocomplete="off"
  bind:value={$shortcutFilter}
/>

<style lang="less">
  input.shortcut-filter {
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
  @media print {
    input.shortcut-filter:placeholder-shown {
      display: none;
    }
  }
</style>
