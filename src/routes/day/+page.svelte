<script>
  import {format} from 'date-fns'
  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>Food History Activity by Date</title>
</svelte:head>

<h1>See the activity for each day/date</h1>

<ul>
  {#each data.uniquedays as day}
    <li>
      <a href="/day/{format(new Date(day.consumedAt), 'yyyy-MM-dd')}"
        >{new Date(day.consumedAt).toLocaleDateString('en', {
          month: 'long',
          day: '2-digit',
          year: 'numeric'
        })}</a
      >
    </li>
  {/each}
</ul>
