<script>
  let { portableText, children } = $props()

  // Block javascript: URLs to prevent XSS via portable text links
  const safeHref = $derived.by(() => {
    const raw = portableText?.value?.href ?? ''
    return /^https?:\/\//i.test(raw) || raw.startsWith('/') || raw.startsWith('#') ? raw : '#'
  })
</script>

<a href={safeHref}>
  {@render children?.()}
</a>
