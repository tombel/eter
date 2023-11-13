import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import FramedAvatar from './FramedAvatar'
import Link from 'next/link'
import collectibles from '../json/collectibles.json'

export default function CollectiblesCarousel(): JSX.Element {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={12}
      visibleSlides={5}
      className="flex justify-center w-full"
      infinite={true}
    >
      <ButtonBack>
        <FramedAvatar
          imgSrc="/images/less-than-symbol.png"
          backgroundStyle="mx-auto w-50 h-50 rounded-full"
        />
      </ButtonBack>
      <Slider className="w-5/6">
        {collectibles.map((item, index) => {
          return (
            <Slide index={index} key={index}>
              <Link href={item.href}>
                <a>
                  <FramedAvatar
                    imgSrc={`/images/${item.img_src}`}
                    backgroundStyle="mx-auto w-2/3 h-2/3 rounded-full translate-y-1/4"
                  />
                </a>
              </Link>
            </Slide>
          )
        })}
      </Slider>
      <ButtonNext>
        <FramedAvatar
          imgSrc="/images/less-than-symbol.png"
          imgStyle="rotate-180"
          backgroundStyle="mx-auto w-50 h-50 rounded-full"
        />
      </ButtonNext>
    </CarouselProvider>
  )
}
