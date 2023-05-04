'use client';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image
            className='w-full h-60 object-cover'
            alt='movie'
            width={'1024'}
            height={'512'}
            src={
              'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='w-full h-60 object-cover'
            alt='movie'
            width={'1024'}
            height={'512'}
            src={
              'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
