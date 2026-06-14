<script>
  import PostsGrid from '$lib/PostsGrid.svelte'
  import SanityImage from '$lib/SanityImage.svelte'
  import {toHTML} from '@portabletext/to-html'

  let {data} = $props()
</script>

<h1>{data.author.name}</h1>

{#if data.author.image}
  <SanityImage image={data.author.image} maxWidth={700} />
{/if}

{#if data.author?.bio}
  {@html toHTML(data.author.bio)}
{/if}

<h2>Posts by {data.author.name}</h2>

<PostsGrid posts={data.author.posts} />
