<!--
  @component Child has to be an icon name of the material symbols font.

  e.g. `<FilledIcon>star</FilledIcon>`

  Full list of icons: https://fonts.google.com/icons
-->
<span class="material-symbols-outlined">
  <slot />
</span>

<style lang="less">
  span.material-symbols-outlined {
    font-size: 1em;
  }
</style>
