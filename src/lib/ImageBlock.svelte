<script>
  import SanityImage from './SanityImage.svelte'

  let {portableText} = $props()
  const value = $derived(portableText.value)
</script>

{#if value.asset}
  <figure>
    <SanityImage image={value} />
    {#if value.caption}
      <figcaption>{value.caption}</figcaption>
    {/if}
  </figure>
{/if}
