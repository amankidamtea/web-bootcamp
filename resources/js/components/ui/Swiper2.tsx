import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; import 'swiper/css/autoplay';
type Props = {
    reverse: boolean;
    direction: "horizontal" | "vertical";
    slidesPerView: number;
    spaceBetween: number;
    allowTouchMove: boolean;
    children: React.ReactNode;
};
export default function SwiperComponent2({ reverse, direction, slidesPerView, spaceBetween, allowTouchMove, children }: Props)
{
    return (
        <Swiper modules={[Autoplay]} slidesPerView={slidesPerView} spaceBetween={spaceBetween} loop={true} autoplay={{ delay: 0, disableOnInteraction: true, reverseDirection: reverse }} speed={5000} direction={direction} allowTouchMove={allowTouchMove} className="w-full overflow-hidden" > {children} </Swiper>
    );
}