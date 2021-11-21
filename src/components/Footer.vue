<template>
  <footer id="foota" class="pb-44   bg-gradient-to-r from-gray-100 to-gray-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div data-scroll data-scroll-speed="4" class="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <img  data class="h-10" src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg" alt="Company name">
            <p class="text-gray-500 text-base">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div class="flex space-x-6">
              <a data-scroll data-scroll-speed="1" href="#" class="text-indigo-700 hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <i class="fab fa-facebook fa-2x p-1"></i>
              </a>

              <a data-scroll data-scroll-speed="1" href="#" class="text-indigo-700 hover:text-gray-500">
                <span class="sr-only">Instagram</span>
                <i class="fab fa-instagram fa-2x p-1"></i>
              </a>

              <a data-scroll data-scroll-speed="1" href="#" class="text-indigo-700 hover:text-gray-500">
                <span class="sr-only">Twitter</span>
                <i class="fab fa-twitter fa-2x p-1"></i>
              </a>

              <a data-scroll data-scroll-speed="1" href="#" class="text-indigo-700 hover:text-gray-500">
                <span class="sr-only">Google</span>
                <i class="fab fa-google fa-2x p-1"></i>
              </a>

              
            </div>
          </div>

          <div data-scroll data-scroll-speed="2" class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
            
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li>
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900">
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900">
                      Guides
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900">
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          
          </div>
        </div>

        <div  class="mt-8 border-t border-gray-200 py-8 flex justify-between">
          <p class="text-base text-gray-400 xl:text-center">
            &copy; 2020 ANGOL, Inc. All rights reserved.
          </p>
          <p class="text-base text-gray-400 xl:text-center">
            Developer - michaelsaiba84@gmail.com
          </p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'theFooter',
}
</script>
