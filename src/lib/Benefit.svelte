<script lang="ts">
  import FilledIcon from './FilledIcon.svelte';
  import OutlineIcon from './OutlineIcon.svelte';
  export let benefit = 3;

  let levels = [
    'Minor improvement for special interests.',
    'Nice to have.',
    'Can recommend.',
    'Really helpful.',
    'Use this as much as possible to become faster and better.',
  ];
</script>

<div class="benefit">
  {#each levels as level, i}
    <label title={level} for="">
      {#if i < benefit}
        <OutlineIcon>star</OutlineIcon>
      {:else}
        <FilledIcon>star</FilledIcon>
      {/if}
    </label>
  {/each}
</div>

<style lang="less">
  .benefit {
    font-size: 0.8em;
    white-space: nowrap;
  }
</style>
