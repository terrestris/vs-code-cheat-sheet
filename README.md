## VS Code Cheat Sheet

### How to add a shortcut, extension or edit the notes ❓

In the current state, this Cheat-Sheet is not connected to any database.
But you can add shortcuts or extensions anyways.

Just add your shortcut or extension in the corresponding file in the `public` folder.

❗Hint: You can copy the vsCodeKey with right click in your settings overview.

You can edit the notes.md the same way. Notice that it is a markdown file so you
can use Markdown or HTML syntax.

Later on we might have a UI and a database to store this properly.

### DEV Guide

To develop this Cheat Sheet:

```sh
  # Install latest bun version (if not installed):
  curl -fsSL https://bun.sh/install | bash
  # Install dependencies
  bun install
  # Run dev server
  bun run dev
  # Build app
  bun run build
  # Host the build app localy
  bun run preview
```

Always install dependencies as devDepency (`bun install -d`) as svelte while compile the code anyway.
