<script>
  import SanityImage from './SanityImage.svelte'
  import {format} from 'date-fns'
  export let post
</script>

<article>
  <div>
    <div class="card">
      <div class="card-top">
        {#if post.spice}
          <span class="numb">{post.spice} </span>
        {:else}
          <span class="numb">? </span>
        {/if}
        <img
          src="/chilli.svg"
          alt="spicy meal"
          title="{post?.spice}/5 level spicy meal"
          width="20px"
          height="20px"
        />
      </div>
      <div class="card-inner">
        <a rel="prefetch" href="/food/{post.slug.current}">
          <h2>
            {post.title}
          </h2>
          {#if post.image}<div class="image">
              <SanityImage image={post.image} maxWidth={300} />
            </div>
          {/if}
        </a>
        <div>
          <hr />
          <small
            >{format(new Date(post.consumedAt), 'hh:mm')} on
            <a class="dashing" href="/day/{format(new Date(post.consumedAt), 'yyyy-MM-dd')}"
              >{format(new Date(post.consumedAt), 'do MMM yy')}</a
            ></small
          >
        </div>
      </div>
      <div class="card-bottom">
        <img
          src="/weight.svg"
          alt="heavy meal"
          title="{post?.heavy}/5 level heavy meal"
          width="20px"
          height="20px"
        />
        {#if post.heavy}
          <span class="numb">{post.heavy} </span>
        {:else}
          <span class="numb">? </span>
        {/if}
      </div>
    </div>
  </div>
</article>

<style>
  article {
    display: flex;
    /* Show images first */
    flex-direction: column-reverse;
    /* Align cards */
    align-self: start;
  }

  hr {
    background: var(--primary-color);
    border: 0;
    height: 1px;
    margin: 0rem 0;
  }

  .card-top {
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    padding: 0 2px 10px 0;
    left: 15px;
    text-align: center;
  }

  .card small {
    color: #000;
  }

  .card-bottom {
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    padding: 10px 0 0 2px;
    right: 15px;
    bottom: 15px;
    text-align: center;
  }

  .numb {
    color: #000;
    font-size: larger;
  }

  .card-top img,
  .card-bottom img {
    max-width: 20px;
    max-height: 20px;
    height: 20px;
    display: inline;
    margin: 0px;
  }

  .card {
    background: white;
    border-color: aquamarine;
    border: 2px;
    border-radius: 10px;
    padding: 20px;
    position: relative;
  }

  .card-inner {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 5px solid #96c7d9;
    border-radius: 5px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 2px 0 10px 0;
    font-weight: 400;
  }

  a {
    text-decoration-style: unset;
    text-decoration-line: none;
  }

  a,
  a:visited {
    color: blue;
  }
  a:hover,
  a:focus {
    color: darkblue;
  }

  a h2 {
    text-decoration-style: wavy;
    text-decoration-line: underline;
    text-decoration-thickness: 1.5px;
  }

  a.dashing {
    text-decoration-style: dashed;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
  }

  .image {
    padding-bottom: 1rem;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    border-radius: 5px;
  }

  .image :global(img) {
    object-fit: cover;
    margin: 0;
  }
</style>
