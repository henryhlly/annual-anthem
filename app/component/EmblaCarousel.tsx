import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React, { useCallback } from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
  } from './EmblaCarouselArrowButtons'

  export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])



  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><Image src="/general-logo.png" alt="general logo" width={500} height={500} quality={100} /></div>
          <div className="embla__slide"><Image src="/kpop-logo.png" alt="kpop logo" width={500} height={500} quality={100} /></div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  )
}
