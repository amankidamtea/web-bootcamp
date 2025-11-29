import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/autoplay';

// const slides: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 3", "Slide 3", "Slide 3"];

type DataType = {
  name: string;
  image: string;
  deskripsi: string;
}



export default function SwiperComponent({ reverse, data, direction, slidesPerView, spaceBetween, allowTouchMove, }: {reverse: boolean, data: DataType[], direction: "horizontal" | "vertical", slidesPerView: number, spaceBetween: number, allowTouchMove: boolean}) {
  return (
    <Swiper
          modules={[Autoplay]}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          loop={true}
          autoplay={{  delay: 0, disableOnInteraction: true, reverseDirection: reverse }}
          className='w-[200px] lg:h-[600px] h-[320px] overflow-hidden'
          speed={5000}
          direction={direction}
          allowTouchMove={allowTouchMove}
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index} className='bg-gray-300 animate-pulse overflow-hidden   text-white flex items-center justify-center rounded-3xl z-1'>
          <img src={slide.image} alt="Slide" className='h-full' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
