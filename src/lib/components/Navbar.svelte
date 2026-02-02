<script lang="ts">
  import { fade } from 'svelte/transition';
  
  export let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function smoothScroll(event: MouseEvent, targetId: string) {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const navbarHeight = 64; // 4rem = 64px
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after clicking
      mobileMenuOpen = false;
    }
  }
</script>

<nav class="fixed top-0 right-0 left-0 z-50 bg-white/90 shadow-lg backdrop-blur-lg">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="flex items-center space-x-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500">
            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span class="text-xl font-bold text-gray-900">Galeri Foto</span>
        </a>
      </div>

      <!-- Desktop Menu - Centered -->
      <div class="absolute left-1/2 hidden -translate-x-1/2 transform md:block">
        <div class="flex items-baseline space-x-8">
          <a 
            href="#home" 
            on:click={(e) => smoothScroll(e, '#home')}
            class="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-sky-600"
          >
            Beranda
          </a>
          <a 
            href="#gallery" 
            on:click={(e) => smoothScroll(e, '#gallery')}
            class="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-sky-600"
          >
            Galeri
          </a>
          <a 
            href="#contact" 
            on:click={(e) => smoothScroll(e, '#contact')}
            class="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-sky-600"
          >
            Kontak
          </a>
        </div>
      </div>

      <!-- Social Links -->
      <div class="hidden items-center space-x-4 md:flex">
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 transition-colors hover:text-sky-600">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-12.014C24.007 5.367 18.641.001.012.017 0z" />
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 transition-colors hover:text-sky-600">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 transition-colors hover:text-sky-600">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-sky-500 focus:outline-none"
          on:click={toggleMobileMenu}
        >
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            {#if !mobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden" transition:fade={{ duration: 200 }}>
      <div class="space-y-1 border-t bg-white px-2 pt-2 pb-3 sm:px-3">
        <a 
          href="#home" 
          on:click={(e) => smoothScroll(e, '#home')}
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-sky-600"
        >
          Beranda
        </a>
        <a 
          href="#gallery" 
          on:click={(e) => smoothScroll(e, '#gallery')}
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-sky-600"
        >
          Galeri
        </a>
        <a 
          href="#contact" 
          on:click={(e) => smoothScroll(e, '#contact')}
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-sky-600"
        >
          Kontak
        </a>
      </div>
    </div>
  {/if}
</nav>