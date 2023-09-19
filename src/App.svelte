<script lang="ts">
  import ExtensionList from './lib/ExtensionList.svelte';
  import Notes from './lib/Notes.svelte';
  import ShortcutList from './lib/ShortcutList.svelte';
</script>

<main>
  <header>
    <h1>Visual Studio Code Cheat Sheet</h1>
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
  <footer>
    <a style="float: right;" href="https://github.com/terrestris/vs-code-cheat-sheet" target="_blank">Code on GitHub</a>
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

    h3 {
      z-index: 1;
      box-shadow: 0 4px 10px -10px gray;
      text-align: center;
      padding: 1em;
      position: sticky;
      top: 0;
      margin-block-start: 0;
      margin-block-end: 0;
      background-color: white;
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
