<script>
  import SanityImage from './SanityImage.svelte'
  import {format} from 'date-fns'
  import {toHTML} from '@portabletext/to-html'
  // import { Image } from "@unpic/svelte";
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
            <span>{post.title}</span>
          </h2>
          {#if post.image}
            <div class="image">
              <div class="card--display">
                <SanityImage image={post.image} maxWidth={300} />
                <!-- <Image src={post.img} width=300 layout="constraint" alt={post.title}/> -->
              </div>
              <div class="card--hover">
                <p>{@html toHTML(post.body)}</p>
              </div>
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

  /* a h2 {
    text-decoration-style: wavy;
    text-decoration-line: underline;
    text-decoration-thickness: 1.5px;
  } */

  a h2 span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  a h2 span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
    box-sizing: inherit;
  }

  a:hover h2 span {
    padding-right: 25px;
  }

  a:hover h2 span:after {
    opacity: 1;
    right: 0;
    box-sizing: inherit;
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

  .card--display {
    position: relative;
    transition: 0.5s ease;
  }

  .card--hover {
    position: absolute;
    transition: 0.5s ease;
    top: 5px;
    left: 5px;
  }

  .card--hover *,
  .card--hover p {
    font-size: 1rem;
    color: #000;
    margin: 0px;
  }

  .image:hover .card--hover,
  .image:focus .card--hover,
  .image:focus-visible .card--hover,
  .image:focus-within .card--hover {
    opacity: 1;
  }

  .image:hover .card--display,
  .image:focus .card--display,
  .image:focus-visible .card--display,
  .image:focus-within .card--display {
    opacity: 0.2;
  }

  .image .card--hover {
    opacity: 0;
  }

  .image .card--display {
    opacity: 1;
  }

  .image :global(img) {
    object-fit: cover;
    margin: 0;
  }
</style>
