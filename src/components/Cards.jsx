import React from 'react'
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <article class="flex max-w-xl flex-col border-2 border-white p-3 rounded-md items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-gray-500">Sep 18, 2023</time>
                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Web Development</a>
            </div>
            <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-grey-800">
                    <a href="#">
                        <span class="absolute inset-0"></span>
                        Food Delivery space
                    </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 my-4">To bring this project to life, I'm looking for a freelancer with expertise in web development, particularly in creating food delivery or e-commerce websites. If you're interested and available to work on this project, please contact me through following link</p>
                <Link to='#' className='text-white' >Contact Us</Link>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                        <a href="#">
                            <span class="absolute inset-0"></span>
                            Michael Foster
                        </a>
                    </p>
                    <p class="text-gray-600 my-2">Co-Founder / CTO</p>
                </div>
            </div>
        </article>
    )
}

export default Cards