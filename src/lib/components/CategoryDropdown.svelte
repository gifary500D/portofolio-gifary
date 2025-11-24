<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade, slide } from 'svelte/transition';

  export let categories: string[] = [];
  export let selectedCategories: string[] = [];
  
  let isOpen = false;
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
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      isOpen = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="dropdown-container relative">
  <!-- Dropdown Button -->
  <button
    type="button"
    on:click|stopPropagation={toggleDropdown}
    class="flex w-full items-center justify-between rounded-xl border-2 border-purple-500 bg-white px-4 py-3 text-left shadow-lg transition-all hover:border-purple-600 hover:shadow-xl sm:w-80"
  >
    <span class="flex items-center gap-2">
      <span class="text-sm font-semibold text-gray-700">
        {selectedCategories.length} genres selected
      </span>
    </span>
    <svg
      class="h-5 w-5 text-gray-500 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <!-- Dropdown Menu -->
  {#if isOpen}
    <div
      transition:slide={{ duration: 200 }}
      class="absolute z-50 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-2xl sm:w-80"
    >
      <div class="max-h-80 overflow-y-auto p-2">
        {#each categories as category}
          <button
            type="button"
            on:click={() => toggleCategory(category)}
            class="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all hover:bg-purple-50"
          >
            <!-- Checkbox -->
            <div class="flex h-6 w-6 items-center justify-center rounded border-2 {selectedCategories.includes(category) ? 'border-purple-600 bg-purple-600' : 'border-gray-300 bg-white'}">
              {#if selectedCategories.includes(category)}
                <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              {/if}
            </div>
            
            <!-- Label -->
            <span class="text-sm font-medium text-gray-800">{category}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .dropdown-container {
    -webkit-tap-highlight-color: transparent;
  }
</style>