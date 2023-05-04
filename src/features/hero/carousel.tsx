'use client';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carousel() {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide className='relative'>
          <Image
            className='w-full h-60 object-cover'
            alt='movie'
            priority={true}
            width={'1024'}
            height={'512'}
            src={
              'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
          />
          {/* information */}
          <div className='absolute right-4 bottom-4 text-right font-semibold'>
            <h3 className='text-2xl text-primary-500'>Once Upon a time</h3>
            <h6 className='text-secondary-500 font-light'>
              There lived a ghost
            </h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <Image
            className='w-full h-60 object-cover'
            alt='movie'
            width={'1024'}
            height={'512'}
            src={
              'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
          />
          {/* information */}
          <div className='absolute right-4 bottom-4 text-right font-semibold'>
            <h3 className='text-2xl text-primary-500'>Once Upon a time</h3>
            <h6 className='text-secondary-500 font-light'>
              There lived a ghost
            </h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
