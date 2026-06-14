<script>
  import {urlFor} from './sanityClient'
  import {browser} from '$app/environment'

  let {image, maxWidth = 1200, alt = undefined, loading = 'lazy'} = $props()

  // Asset ref format: image-${storedImgId}-${dimensions}-${format} (e.g. image-abc123-1350x900-png)
  const dimensions = $derived(image?.asset?._ref?.split('-')[2])
  const width = $derived(dimensions ? Number(dimensions.split('x')[0]) : maxWidth)
  const height = $derived(dimensions ? Number(dimensions.split('x')[1]) : maxWidth)
  const aspectRatio = $derived(width > 0 ? height / width : 1)

  let imageRef = $state(null)
  let loaded = $state(false)

  $effect(() => {
    if (imageRef) {
      imageRef.onload = () => {
        loaded = true
      }
    }
  })
</script>

{#if browser && image}
  <img
    decoding="async"
    {loading}
    fetchpriority={loading === 'eager' ? 'high' : undefined}
    src={urlFor(image).width(maxWidth).auto('format').fit('max')}
    alt={alt || image.alt || ''}
    class:loaded
    bind:this={imageRef}
    width={maxWidth}
    height={aspectRatio * maxWidth}
  />
{/if}

<style>
  img {
    opacity: 0;
    transition: opacity 500ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }
</style>
