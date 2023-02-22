<script>
  import SanityImage from './SanityImage.svelte'

  export let post
</script>

<article>
  <a rel="prefetch" href="/food/{post.slug.current}">
    {#if post.image}
      <div class="image">
        <SanityImage image={post.image} maxWidth={300} />
      </div>
    {/if}
    <h2>
      {new Date(post.consumedAt).toLocaleDateString('en-IN')}
      {post.title}
    </h2>
  </a>
</article>

<style>
  article {
    display: flex;
    /* Show images first */
    flex-direction: column-reverse;
    /* Align cards */
    align-self: start;
  }

  h2 {
    margin: 1rem 0 0;
  }

  a h2 {
    text-decoration: none;
  }

  .image {
    padding-bottom: 1rem;
    position: relative;
    overflow: hidden;
    max-width: 100%;
  }

  .image :global(img) {
    object-fit: cover;
    margin: 0;
  }
</style>
