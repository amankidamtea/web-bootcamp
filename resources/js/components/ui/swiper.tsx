import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/autoplay';

const slides: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 3", "Slide 3"];

export default function SwiperComponent({ reverse }: {reverse: boolean}) {
  return (
    <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{  delay: 0, disableOnInteraction: true, reverseDirection: reverse }}
          className='w-[200px] h-[600px] overflow-hidden'
          speed={2000}
          direction="vertical"
          allowTouchMove={false}
    >
      {slides.map((slide, index) => (
          <SwiperSlide key={index} className='bg-black   text-white flex items-center justify-center rounded-3xl z-1'>SLide {slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
