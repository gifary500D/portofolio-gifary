<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';

  export let categories: string[] = [];
  export let selectedCategories: string[] = [];
  
  let isOpen = false;
  let dropdownRef: HTMLDivElement;
  const dispatch = createEventDispatcher();

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function toggleCategory(category: string) {
    if (selectedCategories.includes(category)) {
      selectedCategories = selectedCategories.filter(c => c !== category);
    } else {
      selectedCategories = [...selectedCategories, category];
    }
    dispatch('change', selectedCategories);
  }

  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
      isOpen = false;
    }
  }

  // Hanya attach listener ketika dropdown terbuka
  $: if (isOpen) {
    setTimeout(() => document.addEventListener('click', handleClickOutside), 0);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }

  onDestroy(() => {
    document.removeEventListener('click', handleClickOutside);
  });
</script>

<div class="dropdown-wrapper relative inline-block w-full sm:w-80" bind:this={dropdownRef}>
  <!-- Dropdown Button - Sky theme -->
  <button
    type="button"
    on:click|stopPropagation={toggleDropdown}
    class="flex w-full items-center justify-between rounded-lg border-2 border-sky-400 bg-white/90 backdrop-blur-sm px-4 py-2.5 text-left shadow-md transition-all duration-200 hover:border-sky-500 hover:shadow-lg hover:bg-white active:scale-[0.98]"
    aria-expanded={isOpen}
    aria-haspopup="listbox"
  >
    <span class="text-sm font-medium text-gray-700">
      {#if selectedCategories.length === 0}
        Pilih genre
      {:else if selectedCategories.length === 1}
        1 genre dipilih
      {:else}
        {selectedCategories.length} genre dipilih
      {/if}
    </span>
    <svg
      class="h-4 w-4 text-sky-600 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <!-- Dropdown Menu - Optimized -->
  {#if isOpen}
    <div
      transition:fade={{ duration: 150 }}
      class="absolute left-0 right-0 z-50 mt-1.5 w-full rounded-lg border border-sky-200 bg-white/95 backdrop-blur-sm shadow-xl"
      role="listbox"
    >
      <div class="max-h-72 overflow-y-auto overscroll-contain p-1.5">
        {#each categories as category (category)}
          <button
            type="button"
            on:click|stopPropagation={() => toggleCategory(category)}
            class="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left transition-colors duration-150 hover:bg-sky-50 active:bg-sky-100"
            role="option"
            aria-selected={selectedCategories.includes(category)}
          >
            <!-- Checkbox - Simplified -->
            <div 
              class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors duration-150 {selectedCategories.includes(category) 
                ? 'border-sky-500 bg-sky-500' 
                : 'border-gray-300 bg-white'}"
            >
              {#if selectedCategories.includes(category)}
                <svg class="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              {/if}
            </div>
            
            <!-- Label -->
            <span class="text-sm font-medium text-gray-700 select-none">{category}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .dropdown-wrapper {
    -webkit-tap-highlight-color: transparent;
    contain: layout style paint;
  }

  /* Smooth scrolling untuk mobile */
  .overflow-y-auto {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: rgb(125 211 252) rgb(240 249 255);
  }

  /* Custom scrollbar untuk webkit browsers */
  .overflow-y-auto::-webkit-scrollbar {
    width: 6px;
  }

  .overflow-y-auto::-webkit-scrollbar-track {
    background: rgb(240 249 255);
    border-radius: 3px;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: rgb(125 211 252);
    border-radius: 3px;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: rgb(56 189 248);
  }
</style>