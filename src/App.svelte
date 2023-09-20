<script lang="ts">
  import Notes from './lib/Notes.svelte';
  import ExtensionList from './lib/extension/ExtensionList.svelte';
  import ShortcutList from './lib/shortcut/ShortcutList.svelte';
  import ShortcutFilter from './lib/shortcut/ShortcutFilter.svelte';
    import ExtensionFilter from './lib/extension/ExtensionFilter.svelte';
</script>

<main>
  <header>
    <h1>Visual Studio Code Cheat Sheet</h1>
  </header>
  <section class="shortcuts">
    <div class="section-header">
      <h3>Shortcuts</h3>
      <ShortcutFilter />
    </div>
    <ShortcutList />
  </section>
  <section class="extensions">
    <div class="section-header">
      <h3>Extensions</h3>
      <ExtensionFilter />
    </div>
    <ExtensionList />
  </section>
  <section class="notes">
    <h3>Notes</h3>
    <Notes />
  </section>
  <footer>
    <a
      style="float: right;"
      href="https://github.com/terrestris/vs-code-cheat-sheet"
      target="_blank">Code on GitHub</a
    >
  </footer>
</main>

<style lang="less">
  main {
    display: grid;
    min-height: 0;
    min-width: 0;
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
      background: #2c2c32;
      color: #ffffff;
      grid-area: header;
      text-align: center;

      h1 {
        letter-spacing: -0.4px;
        font-weight: 400;
        font-size: 24px;
      }
    }

    footer {
      grid-area: footer;
      background: #2c2c32;
      color: #ffffff;
      a {
        color: #ffffff;
      }
    }

    .section-header {
      top: 0;
      padding: 1em;
      z-index: 1;
      box-shadow: 0 4px 10px -10px gray;
      position: sticky;
      background-color: white;
    }

    h3 {
      text-align: center;
      margin-block-start: 0;
      margin-block-end: 0;
    }

    section {
      overflow: auto;
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
