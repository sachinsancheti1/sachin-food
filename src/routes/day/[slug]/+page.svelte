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
  {#if post.consumedAt}
    <h2>
      {new Date(post.consumedAt).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })}
      {#if post.title}
        - {post.title}
      {:else}
        - Feeling {post.feelingRating}/5
      {/if}
    </h2>
  {/if}
  <div class="pad">
    {#if post.image}
      <div class="item">
        <SanityImage image={post.image} maxWidth={300} />
      </div>
    {/if}
    {#if post.body}
      <div class="item">
        {@html toHTML(post.body)}
        {#if post.spice}
          <dt>Spice Level:</dt>
          <dd>{post.spice}/5</dd>
        {/if}
        {#if post.heavy}
          <dt>Heavy Level:</dt>
          <dd>{post.heavy}/5</dd>
        {/if}
        {#if post.slug}<a href="/food/{post.slug.current}">Link here</a>{/if}
      </div>
    {/if}
  </div>
{/each}

<style>
  .pad {
    padding-left: 10px;
    border: 2px solid var(--tertiary-color);
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }

  .pad .item {
    flex: 1 0 300px;
  }

  @media (max-width: 600px) {
    .pad {
      flex-direction: column;
    }
  }
</style>
