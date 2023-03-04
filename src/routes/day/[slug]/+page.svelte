<script>
  import {toHTML} from '@portabletext/to-html'
  import SanityImage from '$lib/SanityImage.svelte'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>Date</title>
</svelte:head>

<h1>
  All Data for {new Date(data.posts[0].consumedAt).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })}
</h1>

{#each data.posts as post}
  {#if post.title && post.consumedAt}
    <h2>
      {new Date(post.consumedAt).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })} - {post.title}
    </h2>
  {/if}
  <div class="pad">
    {#if post.image}
       <SanityImage image={post.image}  maxWidth={300}/>
    {/if}
    
    {@html toHTML(post.body)}
    {#if post.slug}
      <a href="/food/{post.slug.current}">Link here</a>
    {/if}
  </div>
{/each}

<style>
  .pad {
    padding-left: 10px;
    border: 2px solid var(--tertiary-color);
  }
</style>
