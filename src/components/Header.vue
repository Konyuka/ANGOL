<template>
 
<header class="bg-white z-50 fixed top-0 inset-x-0">
  <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 mix-blend-multiply"></div>
  <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
    <div class="relative h-16 flex justify-between">

      <div class="relative z-10 px-2 flex lg:px-0">
        <div class="flex-shrink-0 flex items-center">
          <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
        </div>
      </div>

      <div class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
        <div class="w-full sm:max-w-xs">
          <label for="search" class="sr-only">Search</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <!-- Heroicon name: solid/search -->
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input id="search" name="search" class="ring-2 ring-gray-400 focus:ring-gray-500 font-primary-font block w-full bg-gray-300 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm" placeholder="Search" type="search">
          </div>
        </div>
      </div>

      <div class="relative z-10 flex items-center lg:hidden">
        <!-- Mobile menu button -->
        <button type="button" class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
        <button type="button" class="bg-cyan-200 transform transition hover:scale-125 duration-700 ease-in-out hover:animate-pulse active:animate-ping mr-4 flex-shrink-0 rounded-full p-1 text-purple-900 hover:text-gray-600 outline-black ring-2 ring-offset-2 ring-offset-gray-300 ring-white">
          <i class="fab fa-facebook fa-2x p-1 "></i>
        </button>
        <button type="button" class="bg-cyan-200 transform transition hover:scale-125 duration-700 ease-in-out hover:animate-pulse active:animate-ping mr-4 flex-shrink-0 rounded-full p-1 text-purple-900 hover:text-gray-600 outline-black  ring-2 ring-offset-2 ring-offset-gray-300 ring-white">
          <i class="fab fa-instagram fa-2x p-1"></i>
        </button>
        <button type="button" class="bg-cyan-200 transform transition hover:scale-125 duration-700 ease-in-out hover:animate-pulse active:animate-ping mr-4 flex-shrink-0 rounded-full p-1 text-purple-900 hover:text-gray-600 outline-black  ring-2 ring-offset-2 ring-offset-gray-300 ring-white">
          <i class="fab fa-twitter fa-2x p-1"></i>
        </button>
        <button type="button" class="bg-cyan-200 transform transition hover:scale-125 duration-700 ease-in-out hover:animate-pulse active:animate-ping flex-shrink-0 rounded-full p-1 text-purple-900 hover:text-gray-600 outline-black  ring-2 ring-offset-2 ring-offset-gray-300 ring-white">
          <i class="fab fa-google fa-2x p-1"></i>
        </button>

      </div>
    </div>

    <nav class="hidden lg:py-4 lg:flex lg:space-x-8" aria-label="Global">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="transform transition hover:scale-125 duration-700 ease-in-out hover:animate-pulse bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-300 hover:to-purple-500 font-heading-font text-black hover:text-white rounded-md py-1 px-3 inline-flex items-center text-xl font-bold " aria-current="page">
        <i class="fas fa-home mr-2"></i>
        Home
      </a>

      <a @click="Services" href="#" class="transform transition hover:scale-125 duration-700 ease-in-out hover:animate-pulse bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-300 hover:to-purple-500 text-black hover:text-white font-heading-font hover:bg-gradient-to-r rounded-md py-1 px-3 inline-flex items-center text-xl font-bold ">
        <i class="fas fa-briefcase mr-2"></i>
        Services
      </a>

      <a href="#" class="transform transition hover:scale-125 duration-700 ease-in-out hover:animate-pulse bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-300 hover:to-purple-500 text-black hover:text-white font-heading-font hover:bg-gradient-to-r rounded-md py-1 px-3 inline-flex items-center text-xl font-bold ">
        <i class="fas fa-question-circle mr-2"></i>
        About
      </a>

      <a href="#" class="transform transition hover:scale-125 duration-700 ease-in-out hover:animate-pulse bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-300 hover:to-purple-500 text-black hover:text-white font-heading-font hover:bg-gradient-to-r rounded-md py-1 px-3 inline-flex items-center text-xl font-bold ">
        <i class="fas fa-envelope-open-text mr-2"></i>
        Contact Us
      </a>
    </nav>
    

  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <nav class="lg:hidden" aria-label="Global" id="mobile-menu">
    <div class="pt-2 pb-3 px-2 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block rounded-md py-2 px-3 text-base font-medium" aria-current="page">Dashboard</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium">Team</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium">Projects</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium">Calendar</a>
    </div>
    <div class="border-t border-gray-700 pt-4 pb-3">
      <div class="px-4 flex items-center">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </div>
        <div class="ml-3">
          <div class="text-base font-medium text-white">Tom Cook</div>
          <div class="text-sm font-medium text-gray-400">tom@example.com</div>
        </div>
        <button type="button" class="ml-auto flex-shrink-0 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>
      <div class="mt-3 px-2 space-y-1">
        <a href="#" class="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>

        <a href="#" class="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>

        <a href="#" class="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
      </div>
    </div>
  </nav>

</header>

</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';

export default {
  name: 'NavBar',
  setup(){


    const Services = () => {
      const scroll = new LocomotiveScroll(
        {
          el: document.querySelector('[data-scroll-container]'),
          smooth: true
        }
      );
      const target = document.querySelector('#services');
      scroll.scrollTo(target);
    }

    return {
      Services,

    }

  }
}
</script>
