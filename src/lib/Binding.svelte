<script lang="ts">
  import type { KeyName } from '../models/KeyName';
  import type { Binding } from '../models/Shortcut';

  export let binding: Binding;

  const getWidthForKey = (key: KeyName): number => {
    if (key.length < 3 || key.startsWith('Arrow')) return 2;
    if (key === 'Space') return 6;
    return 3;
  };

  const replaceWithIcon = (key: KeyName): string => {
    // TODO:
    if (key === 'ArrowDown') return '↓';
    if (key === 'ArrowUp') return '↑';
    if (key === 'ArrowRight') return '→';
    if (key === 'ArrowLeft') return '←';
    return key;
  };

</script>

<div class="binding">
  {#if Array.isArray(binding)}
    {#each binding as key, i}
      <kbd style={`width: ${getWidthForKey(key)}em;`}><i>{replaceWithIcon(key)}</i></kbd>
      {#if binding.length > i + 1}
        <span class="plus">+</span>
      {/if}
    {/each}
  {:else}
    <kbd><i>{replaceWithIcon(binding)}</i></kbd>
  {/if}
</div>

<style lang="less">
  div.binding {
    display: flex;
    align-items: center;
  }
  kbd {
    color: white;
    position: relative;
    display: inline-block;
    width: 2em; // default will be overwritten
    height: 2em;
    padding: 0.2em 0.4em;
    margin: 0.2em 0.5em;
    border-radius: 0.25em;
    background: linear-gradient(180deg, #282828, #202020);
    box-shadow: inset -0.2em 0 0.2em rgba(0, 0, 0, 0.15),
      inset 0 -0.2em 0.2em rgba(0, 0, 0, 0.25), 0 0 0 0.05em rgba(0, 0, 0, 0.75),
      0.25em 0.5em 0.75em rgba(0, 0, 0, 0.4);
    overflow: hidden;
  }

  kbd::before {
    content: '';
    position: absolute;
    top: 0.075em;
    left: 0.1em;
    bottom: 0.45em;
    right: 0.4em;
    background: linear-gradient(90deg, #232323, #4a4a4a);
    border-radius: 0.25em;
    box-shadow: -0.25em -0.25em 0.25em rgba(255, 255, 255, 0.25),
      0.25em 0.125em 0.25em rgba(0, 0, 0, 0.15);
    border-left: 1px solid #0004;
    border-bottom: 1px solid #0004;
    border-top: 1px solid #0009;
  }

  kbd i {
    position: relative;
    color: #fff;
    font-style: normal;
    font-size: 0.75em;
  }
</style>
