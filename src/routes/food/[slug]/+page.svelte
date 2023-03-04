<script>
  import {toHTML} from '@portabletext/to-html'
  import SanityImage from '$lib/SanityImage.svelte'
  import {format} from 'date-fns'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>{data.post.title}</title>
  <meta property="og:image" content="{data.post.imageURL}?w=600" />
</svelte:head>

<h1>{data.post.title}</h1>
<p>
  Consumed on {new Date(data.post.consumedAt).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })} at {new Date(data.post.consumedAt).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })}
</p>

{#if data.post.image}
  <SanityImage image={data.post.image} maxWidth={900} />
{/if}

<dl>
  {#if data.post.spice}
    <dt>Spice Level:</dt>
    <dd>{data.post.spice}</dd>
  {/if}
  {#if data.post.heavy}
    <dt>Heavy Level:</dt>
    <dd>{data.post.heavy}</dd>
  {/if}
</dl>

<!-- The preferred method would be to use https://github.com/portabletext/svelte-portabletext for {data.post.body} -->
{@html toHTML(data.post.body)}

<a href="/day/{format(new Date(data.post.consumedAt), 'yyyy-MM-dd')}">Link to entire day history</a>
