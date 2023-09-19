<script lang="ts">
  import ExtensionList from './lib/ExtensionList.svelte';
  import Notes from './lib/Notes.svelte';
  import ShortcutList from './lib/ShortcutList.svelte';
</script>

<main>
  <header>
    <h1>VS Code Cheat Sheet</h1>
  </header>
  <section class="shortcuts">
    <h3>Shortcuts</h3>
    <ShortcutList />
  </section>
  <section class="extensions">
    <h3>Extensions</h3>
    <ExtensionList />
  </section>
  <section class="notes">
    <h3>Notes</h3>
    <Notes />
  </section>
</main>

<style lang="less">
  main {
    display: grid;
    width: 100%;
    height: 100%;

    grid-template-areas:
      'header header'
      'shortcuts extensions'
      'shortcuts notes'
      'footer footer';

    grid-template-rows: auto 1fr 1fr auto;
    grid-template-columns: 1fr 1fr;

    header {
      grid-area: header;
      text-align: center;
    }

    h3 {
      text-align: center;
      padding-left: 1em;
    }

    section.shortcuts {
      grid-area: shortcuts;
    }

    section.extensions {
      grid-area: extensions;
    }

    section.notes {
      grid-area: notes;
    }
  }
</style>
