/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Heading from '../Shared/Heading';
import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogData = [
    {
    title: "How to choose perfect smartwatch",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere aliquid enim eaque ipsam dolores repudiandae mollitia quos!",
    published:"Jan 22, 2024 by Mohit",
    image: Img1,
    aosDelay:"0",
    },
    {
    title: "How to choose perfect gadget",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere aliquid enim eaque ipsam dolores repudiandae mollitia quos!",
    published:"May 12, 2024 by Xenon",
    image: Img2,
    aosDelay:"200",
    },
    {
    title: "How to choose perfect VR headset",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere aliquid enim eaque ipsam dolores repudiandae mollitia quos!",
    published:"June 29, 2024 by Lokaditya",
    image: Img3,
    aosDelay:"400",
    },
]

const Blogs = () => {
    return (
        <div className='my-12'>
            <div className="container"><Heading title="Recent News" subtitle={"Explore Our Blogs"} />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 '>
                {BlogData.map((data) => (
                    <div data-aos="fade-up"
                    data-aos-delay={data.aosDelay}  key={data.title} className='bg-white dark:bg-gray-900'>
                        <div className='overflow-hidden rounded-2xl mb-2 '>
                    <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duratoin-500'/></div>
                    <div className='space-y-2'>
                    <p className=' text-gray-500 text-sm'>{data.published}</p>
                    <p className='font-bold line-clamp-1'>{data.title}</p>
                    <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                    </div>
                    </div>
                ))}

                </div>
            </div>
        </div>
    )
}

export default Blogs