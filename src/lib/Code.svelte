<script>
  let {portableText} = $props()
  const value = $derived(portableText.value)
</script>

<pre>
  <code class="language-{value.language}">{value.code}</code>
</pre>
