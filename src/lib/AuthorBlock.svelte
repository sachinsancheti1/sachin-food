<script>
  import AuthorCard from './AuthorCard.svelte'

  let {portableText} = $props()
  const author = $derived(portableText.value?.author)
</script>

{#if author}
  <AuthorCard {author} />
{/if}
