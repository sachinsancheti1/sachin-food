<script>
  import {page} from '$app/state'
</script>

<h1>{page.status}: {page.error?.message}</h1>
{#if page.status === 500}
  <p>
    Please also check the CORS on Sanity to enable your website to accept requests from your
    domain/localhost
  </p>
{/if}
