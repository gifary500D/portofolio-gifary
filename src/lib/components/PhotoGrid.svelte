<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  export let photos: any[] = [];
  
  const dispatch = createEventDispatcher();
  let visiblePhotos: Set<number> = new Set();
  let observer: IntersectionObserver;

  onMount(() => {
    // Intersection Observer untuk animasi scroll
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            visiblePhotos = new Set([...visiblePhotos, index]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe semua photo items
    const photoElements = document.querySelectorAll('.photo-item-observe');
    photoElements.forEach((el) => observer.observe(el));

    return () => {
      if (observer) observer.disconnect();
    };
  });

  function handlePhotoClick(photo: any) {
    dispatch('photoClick', photo);
  }
</script>

<section class="relative z-10 px-4 pb-20 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-7xl">
    <div class="photo-grid">
      {#each photos as photo, index (photo.id)}
        <div
          class="photo-item photo-item-observe group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-xl {photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}"
          class:animate-slide-up={visiblePhotos.has(index)}
          data-index={index}
          on:click={() => handlePhotoClick(photo)}
          on:keydown={(e) => e.key === 'Enter' && handlePhotoClick(photo)}
          role="button"
          tabindex="0"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          <!-- Category Badge -->
          <div class="absolute top-3 left-3">
            <span class="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm md:px-3 md:text-sm">
              {photo.category}
            </span>
          </div>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div class="absolute right-3 bottom-3 left-3 text-white">
              <h3 class="mb-1 text-sm font-bold md:text-lg">{photo.title}</h3>
              {#if photo.personName}
                <p class="mb-1 text-xs text-gray-200 md:text-sm">{photo.personName}</p>
              {/if}
              {#if photo.instagram}
                <p class="text-xs text-purple-300 md:text-sm">{photo.instagram}</p>
              {/if}
              {#if photo.location && !photo.personName}
                <p class="text-xs text-gray-200 md:text-sm">{photo.location}</p>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  @media (min-width: 640px) {
    .photo-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  @media (min-width: 768px) {
    .photo-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
  }

  @media (min-width: 1024px) {
    .photo-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
  }

  @media (min-width: 1280px) {
    .photo-grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .photo-item {
    width: 100%;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .photo-item.animate-slide-up {
    opacity: 1;
    transform: translateY(0);
  }
</style>
