<script>
  import PostsGrid from '$lib/PostsGrid.svelte'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>Food History</title>
</svelte:head>

<h1>Recent food activity</h1>

<PostsGrid posts={data.posts} />
