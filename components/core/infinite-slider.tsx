"use client"

import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

interface InfiniteSliderProps {
  gap?: number
  reverse?: boolean
  speedSeconds?: number
  className?: string
  children?: React.ReactNode
}

export function InfiniteSlider({
  children,
  gap = 40,
  reverse = false,
  speedSeconds = 20,
  className = "",
}: InfiniteSliderProps) {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper
      swiper.autoplay.start()
    }
  }, [])

  // Convert children to array for duplication
  const items = Array.isArray(children) ? children : [children]

  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden>
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={gap}
          slidesPerView="auto"
          loop={true}
          speed={speedSeconds * 100} // Convert speedSeconds to milliseconds
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: reverse,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          className="!overflow-visible"
        >
          {/* Duplicate items for seamless loop */}
          {[...items, ...items].map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="flex items-center justify-center px-4">
                {item}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default InfiniteSlider


