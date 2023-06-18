import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='mt-auto'>
    <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
              
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
    <div class="border-2 border-gray-500 rounded-md p-5">
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sridhar</h2>
        <ul class="text-gray-600 dark:text-gray-400 font-medium">
            <li class="mb-4">
                <a href="#" class="hover:underline">+91 9393930393</a>
            </li>
            <li>
                <a href="#" class="hover:underline">hisariasridhar@gmail.com</a>
            </li>
        </ul>
    </div>
    <div class="border-2 border-gray-500 rounded-md p-5">
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Amit</h2>
        <ul class="text-gray-600 dark:text-gray-400 font-medium">
            <li class="mb-4">
                <a href="#" class="hover:underline ">+91 9540604499</a>
            </li>
            <li>
                <a href="#" class="hover:underline">ahisaria79@gmail.com</a>
            </li>
        </ul>
    </div>
    <div class="border-2 border-gray-500 rounded-md p-5">
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Poonam</h2>
        <ul class="text-gray-600 dark:text-gray-400 font-medium">
            <li class="mb-4">
                <a href="#" class="hover:underline">+91 9711883376</a>
            </li>
            <li>
                <a href="#" class="hover:underline">poonamhisaria@gmail.com</a>
            </li>
        </ul>
    </div>
</div>

          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" class="hover:underline">The HisariaHub</Link>. 
              </span>
              <div class="flex mt-4 sm:justify-center sm:mt-0">
                 
                  
                  <Link href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                      <span class="sr-only">GitHub account</span>
                  </Link>
                 
              </div>
          </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer