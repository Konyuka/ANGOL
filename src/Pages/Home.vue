<template>

<div class="bg-white" data-scroll-container>
  <Header :propValue="propValue" :showNavbar="showNavbar" class="transition duration-700 ease-in-out transform hover:translate-y-1 motion-reduce:transition-none motion-reduce:transform-none" />

  <div class="relative overflow-hidden mt-14">
    
    <main>

      <section data-scroll-section>
      <div class="pt-10 bg-gradient-to-r from-gray-100 to-gray-200 sm:pt-16 lg:pt-8 lg:pb-1 lg:overflow-hidden">
        <div data-scroll data-scroll-speed="4" class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">

            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">

              <div class="lg:py-12">
                
                <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span class="uppercase block font-heading-font text-8xl pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-purple-900">Angol <span class=" text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-500">Media</span> </span>
                  <span data-scroll data-scroll-speed="1" class="text-md font-heading-font pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 sm:pb-5">Grow Your Brand</span>
                </h1>
                <!-- <button @click="check" class="text-black"> Ya CLick Me </button> -->

                <p class="font-primary-font text-gray-800 sm:text-sm font-extralight lg:text-lg xl:text-lg">
                  ANGOL MEDIA is a provider of advertising and media services headquarted in Nairobi, Kenya with a presence in Kigali, Rwanda. <br> <br>
                  We help clients promote and market products through our advertising services. <br>
                  Our campaigns deliver media impressions on high penetration, high velocity, perimeter items such as FMCG, boxtops, shopping bags
                </p>

              </div>
            </div>

            <div data-scroll data-scroll-speed="6" class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div class="mx-auto max-w-md px-1 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="../assets/img/business.svg" alt="">
                <!-- <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg" alt=""> -->
              </div>
            </div>

          </div>
        </div>
      </div>
      </section>

      <!-- Feature section with grid -->
      <section data-scroll-section id="services" >
      <div class="relative bg-gradient-to-r from-gray-100 to-gray-200 py-16 sm:py-24 lg:py-2">
        <div data-scroll data-scroll-speed="4" class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 data-scroll data-scroll-speed="2" class="font-heading-font font-extrabold  tracking-wider uppercase text-7xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-400">Our Services</h2>
          <!-- <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Everything you need to deploy your app
          </p> -->
          <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">

          </p>
          <div class="mt-12">
            <div data-scroll-call="baby()" data-scroll-repeat="true" class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

              <div class="pt-6">
                <a href="">

                <div class="bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transform transition hover:scale-95 duration-700 ease-in-out hover:animate-pulse shadow-2xl group flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-800 to-cyan-300 rounded-md shadow-lg">
                        <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg> -->
                        <i class="h-6 w-6 fas fa-arrow-circle-down fa-2x text-white group-hover:text-black"></i>
                      </span>
                    </div>
                    <h3 class="font-primary-font mt-8 text-2xl font-medium text-gray-400 tracking-tight group-hover:text-cyan-500 ">Branding & Advertising</h3>
                    <i class="fas fa-angle-double-up mt-4 fa-2x text-gray-400 group-hover:text-black transform transition group-hover:scale-125 duration-700 ease-in-out group-hover:animate-bounce"></i>
                  </div>
                </div>
                </a>

              </div>

              <div class="pt-6">
                <a href="">

                <div class="bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transform transition hover:scale-95 duration-700 ease-in-out hover:animate-pulse shadow-2xl group flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-800 to-cyan-300 rounded-md shadow-lg">
                        <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg> -->
                        <i class="h-6 w-6 fas fa-arrow-circle-down fa-2x text-white group-hover:text-black"></i>
                      </span>
                    </div>
                    <h3 class="font-primary-font mt-8 text-2xl font-medium text-gray-400 tracking-tight group-hover:text-cyan-500 ">Innovative Media Solutions </h3>
                    <i class="fas fa-angle-double-up mt-4 fa-2x text-gray-400 group-hover:text-black transform transition group-hover:scale-125 duration-700 ease-in-out group-hover:animate-bounce"></i>
                  </div>
                </div>
                </a>

              </div>

              <div class="pt-6">
                <a href="">

                <div class="bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transform transition hover:scale-95 duration-700 ease-in-out hover:animate-pulse shadow-2xl group flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-800 to-cyan-300 rounded-md shadow-lg">
                        <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg> -->
                        <i class="h-6 w-6 fas fa-arrow-circle-down fa-2x text-white group-hover:text-black"></i>
                        <!-- some -->
                      </span>
                    </div>
                    <h3 class="font-primary-font mt-8 text-2xl font-medium text-gray-400 tracking-tight group-hover:text-cyan-500 ">Front Facing/Coupon Media</h3>
                    <i class="fas fa-angle-double-up mt-4 fa-2x text-gray-400 group-hover:text-black transform transition group-hover:scale-125 duration-700 ease-in-out group-hover:animate-bounce"></i>
                  </div>
                </div>
                </a>

              </div>

              <div class="pt-6">
                <a href="">

                <div class="bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transform transition hover:scale-95 duration-700 ease-in-out hover:animate-pulse shadow-2xl group flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-800 to-cyan-300 rounded-md shadow-lg">
                        <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg> -->
                        <i class="h-6 w-6 fas fa-arrow-circle-down fa-2x text-white group-hover:text-black"></i>
                      </span>
                    </div>
                    <h3 class="font-primary-font mt-8 text-2xl font-medium text-gray-400 tracking-tight group-hover:text-cyan-500 ">In Store 90% Media</h3>
                    <i class="fas fa-angle-double-up mt-4 fa-2x text-gray-400 group-hover:text-black transform transition group-hover:scale-125 duration-700 ease-in-out group-hover:animate-bounce"></i>
                  </div>
                </div>
                </a>

              </div>

              <div class="pt-6">
                <a href="">

                <div class="bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transform transition hover:scale-95 duration-700 ease-in-out hover:animate-pulse shadow-2xl group flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-800 to-cyan-300 rounded-md shadow-lg">
                        <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg> -->
                        <i class="h-6 w-6 fas fa-arrow-circle-down fa-2x text-white group-hover:text-black"></i>
                      </span>
                    </div>
                    <h3 class="font-primary-font mt-8 text-2xl font-medium text-gray-400 tracking-tight group-hover:text-cyan-500 ">In Store Fridge Media</h3>
                    <i class="fas fa-angle-double-up mt-4 fa-2x text-gray-400 group-hover:text-black transform transition group-hover:scale-125 duration-700 ease-in-out group-hover:animate-bounce"></i>
                  </div>
                </div>
                </a>

              </div>

              <div class="pt-6">
                <a href="">

                <div class="bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transform transition hover:scale-95 duration-700 ease-in-out hover:animate-pulse shadow-2xl group flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-800 to-cyan-300 rounded-md shadow-lg">
                        <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg> -->
                        <i class="h-6 w-6 fas fa-arrow-circle-down fa-2x text-white group-hover:text-black"></i>
                      </span>
                    </div>
                    <h3 class="font-primary-font mt-8 text-2xl font-medium text-gray-400 tracking-tight group-hover:text-cyan-500 ">Tailored Media Services</h3>
                    <i class="fas fa-angle-double-up mt-4 fa-2x text-gray-400 group-hover:text-black transform transition group-hover:scale-125 duration-700 ease-in-out group-hover:animate-bounce"></i>
                  </div>
                </div>
                </a>

              </div>

              <div></div>

              <div class="pt-6">
                <a href="">

                <div class="bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transform transition hover:scale-95 duration-700 ease-in-out hover:animate-pulse shadow-2xl group flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-800 to-cyan-300 rounded-md shadow-lg">
                        <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg> -->
                        <i class="h-6 w-6 fas fa-arrow-circle-down fa-2x text-white group-hover:text-black"></i>
                      </span>
                    </div>
                    <h3 class="font-primary-font mt-8 text-2xl font-medium text-gray-400 tracking-tight group-hover:text-cyan-500 ">Complementary Services</h3>
                    <i class="fas fa-angle-double-up mt-4 fa-2x text-gray-400 group-hover:text-black transform transition group-hover:scale-125 duration-700 ease-in-out group-hover:animate-bounce"></i>
                  </div>
                </div>
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
       </section>

  

      <!-- CTA Section -->
      <section data-scroll-section>
      <div class="relative bg-indigo-800">

        <div data-scroll data-scroll-speed="4" class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img class="w-full h-full object-cover" src="../assets/img/marketing.jpg" alt="">
          <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-indigo-800 to-cyan-600 mix-blend-multiply"></div>
        </div>

        <div data-scroll data-scroll-speed="4" class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div class="md:ml-auto md:w-1/2 md:pl-10">
            <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
              Expertise in the service
            </h2>
            <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Tech into Media & Branding
            </p>
            <p class="mt-3 text-lg text-gray-300">
              ANGOL MEDIA is a provider of advertising and media services headquarted in Nairobi, Kenya with a presence in Kigali, Rwanda. We help clients in
              promoting and marketing of products through our advertising services. Our campaigns deliver media impressions on high penetration, high velocity,
              perimeter items such as FMCG, boxtops, shopping bags.
            </p>
            <div class="mt-8">
              <div class="inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Check Out More Projects
                  <!-- Heroicon name: solid/external-link -->
                  <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>
 
      </div>


      </section>

      <!-- This example requires Tailwind CSS v2.0+ -->
      <section data-scroll-section  class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg data-scroll data-scroll-speed="4" class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-workcation">
            <title id="svg-workcation">Workcation</title>
            <defs>
              <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="2" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
          </svg>

          <div  class="relative">
            <img data-scroll data-scroll-speed="4" class="mx-auto h-8" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg" alt="Workcation">
            <blockquote class="mt-10">
              <div data-scroll data-scroll-speed="2" class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  We create meaning for brands so that all outcomes are aligned to a single brand purpose. This consistency of meaning across all mediums creates value over time. That’s what we call “investment creative”.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>



      <!-- This example requires Tailwind CSS v2.0+ -->
      <section data-scroll-section class="bg-indigo-800">
        <div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div  data-scroll data-scroll-speed="2" class="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">
            <div class="md:flex-shrink-0">
              <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple">
            </div>
            <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
              <div class="relative text-lg font-medium text-white md:flex-grow">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
                </p>
              </div>
              <footer data-scroll data-scroll-speed="2" class="mt-8">
                <div class="flex items-start">
                  
                  <div class="ml-4">
                    <div class="text-base font-medium text-white">Reviewer Name</div>
                    <div class="text-base font-medium text-indigo-200">CEO, Tuple</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div data-scroll data-scroll-speed="4" class="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            <div class="md:flex-shrink-0">
              <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg" alt="Workcation">
            </div>
            <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
              <div class="relative text-lg font-medium text-white md:flex-grow">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.
                </p>
              </div>
              <footer class="mt-8">
                <div class="flex items-start">
                  
                  <div class="ml-4">
                    <div class="text-base font-medium text-white">Reviewer Name</div>
                    <div class="text-base font-medium text-indigo-200">CEO, Workcation</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>


    </main>

    <section data-scroll-section>
      <Footer />
    </section>

  </div>

</div>

</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { onMounted, onUpdated, onUnmounted, computed, ref, watch } from 'vue'
import LocomotiveScroll from 'locomotive-scroll';

export default {
  name: 'HomePage',
  components: {
    Header,
    Footer
  },
  // props: [showNavba],
  setup(props) {
    console.log(props.showNavbar)
    
    const initY = ref('')
    const showNavbar = ref(true)
    const propValue = ref('This is the prop value')

    watch(initY, () => {
      onScroll() 
    } )

    onMounted(() => {
       const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
        });
        scroll.on('scroll', (e) => {
            initY.value = e.scroll.y
        });
        console.log(scroll)
    })


    const onScroll = () => {
      if(initY.value < 109){
        showNavbar.value = true;
      }else{
        showNavbar.value = false;
        // alert('radar chafu')
      }
    };
   
    const check = () => {
      const scroll = new LocomotiveScroll(
        {
          el: document.querySelector('[data-scroll-container]'),
          smooth: true
        }
      );
      const target = document.querySelector('#foota');
      scroll.scrollTo(target);
    }

    return {
      scroll,
      check,
      onScroll,
      showNavbar,
      initY,
      propValue,

    }
    
  },
 
  
}
</script>

<style scoped>
.invisible{
 opacity: 0;
 transition: opacity 5s;  
}
.visible{
  opacity: 1;
}
.smooth{
  transition: 4s all ease-out;
}
</style>