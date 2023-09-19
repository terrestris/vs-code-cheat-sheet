<!--
  @component Child has to be an icon name of the material symbols font.

  e.g. `<OutlineIcon>star</OutlineIcon>`

  Full list of icons: https://fonts.google.com/icons
-->
<span
  style="font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;"
  class="material-symbols-outlined"
>
  <slot />
</span>

<style lang="less">
  span.material-symbols-outlined {
    font-size: 1em;
  }
</style>
