<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let categories: string[] = [];
  export let selectedCategories: string[] = [];
  
  let isOpen = false;
  let dropdownRef: HTMLDivElement;
  const dispatch = createEventDispatcher();

  function toggleDropdown(e: Event) {
    e.stopPropagation();
    isOpen = !isOpen;
  }

  function toggleCategory(category: string, e: Event) {
    e.stopPropagation();
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
</script>

<svelte:window on:click={handleClickOutside} />

<div class="dropdown-wrapper" bind:this={dropdownRef}>
  <!-- Button -->
  <button
    type="button"
    on:click={toggleDropdown}
    class="dropdown-btn"
  >
    <span class="dropdown-text">
      {selectedCategories.length > 0 ? `${selectedCategories.length} genre dipilih` : 'Pilih genre'}
    </span>
    <svg
      class="dropdown-icon {isOpen ? 'rotate' : ''}"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <!-- Menu -->
  {#if isOpen}
    <div class="dropdown-menu">
      <div class="dropdown-scroll">
        {#each categories as category}
          <label class="dropdown-item">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              on:change={(e) => toggleCategory(category, e)}
              class="dropdown-checkbox"
            />
            <span class="checkmark {selectedCategories.includes(category) ? 'checked' : ''}">
              {#if selectedCategories.includes(category)}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              {/if}
            </span>
            <span class="dropdown-label">{category}</span>
          </label>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .dropdown-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 20rem;
  }

  /* Button */
  .dropdown-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.625rem 1rem;
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid #38bdf8;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .dropdown-btn:hover {
    border-color: #0ea5e9;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .dropdown-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }

  .dropdown-icon {
    width: 1rem;
    height: 1rem;
    color: #0ea5e9;
    transition: transform 0.2s ease;
  }

  .dropdown-icon.rotate {
    transform: rotate(180deg);
  }

  /* Menu */
  .dropdown-menu {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 0.375rem);
    z-index: 50;
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid #bae6fd;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.15s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dropdown-scroll {
    max-height: 18rem;
    overflow-y: auto;
    padding: 0.375rem;
  }

  /* Scrollbar minimal */
  .dropdown-scroll::-webkit-scrollbar {
    width: 4px;
  }

  .dropdown-scroll::-webkit-scrollbar-track {
    background: transparent;
  }

  .dropdown-scroll::-webkit-scrollbar-thumb {
    background: #bae6fd;
    border-radius: 2px;
  }

  /* Item */
  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.1s ease;
    user-select: none;
  }

  .dropdown-item:hover {
    background: #f0f9ff;
  }

  .dropdown-checkbox {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .checkmark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    border: 2px solid #d1d5db;
    border-radius: 0.25rem;
    background: white;
    transition: all 0.1s ease;
  }

  .checkmark.checked {
    background: #0ea5e9;
    border-color: #0ea5e9;
  }

  .checkmark svg {
    width: 0.875rem;
    height: 0.875rem;
    color: white;
  }

  .dropdown-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }

  /* Mobile optimization */
  @media (max-width: 640px) {
    .dropdown-wrapper {
      max-width: 100%;
    }
  }
</style>