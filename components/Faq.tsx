import React from 'react'
import { useIntl } from 'react-intl'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import styles from '../styles/FaqSection.module.css'

export default function Faq(): JSX.Element {
  const intl = useIntl()

  const data = Array(15)
    .fill(null)
    .map((_, index) => {
      return {
        question: intl.formatMessage({ id: `page.home.faq.${index}.question` }),
        answer: intl.formatMessage({ id: `page.home.faq.${index}.answer` }),
      }
    })

  return (
    // <div className="w-full bg-gradient-to-b from-[#0049A0] via-[#5C0B7A] via-90% to-[#120714] flex justify-center items-center flex-wrap">
    <div className="w-full bg-[linear-gradient(#0049A0,#5C0B7A,#5C0B7A,#120714)] flex justify-center items-center flex-wrap">
      <img alt="Arco" src="/images/arco.png" className="w-5/6 lg:-mt-100" />
      <div className="relative container py-24 md:w-[60%] xl:w-[40%] -mt-128 lg:-mt-400 lg:mb-50">
        <h1 className="bg-[#80007C] px-20 py-10 mt-40 text-white uppercase font-bold text-2xl lg:text-4xl text-center border-b shadow-[-5px_0px_#000000] md:text-left">
          {intl.formatMessage({ id: 'page.home.faq.title' })}
        </h1>
        <div className="bg-gradient-to-b from-[#80007C] from-0% via-[#ECC4FF] via-40% to-[#80007C] p-20 mb-40 shadow-[-5px_0px]">
          {data.map((item) => {
            return (
              <Accordion allowZeroExpanded key={item.question} className={styles.accordion__style}>
                <AccordionItem>
                  <AccordionItemHeading className={styles.accordion__heading__style}>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div style={{ whiteSpace: 'pre-line' }}>{item.answer}</div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            )
          })}
        </div>
        <img
          alt="Left kun FAQ"
          src="/images/faq_kun_left.png"
          className="hidden xl:block absolute bottom-0 -translate-x-1/2 -left-100"
        />
        <img
          alt="Right kun FAQ"
          src="/images/faq_kun_right.png"
          className="hidden xl:block absolute bottom-0 translate-x-1/2 -right-100"
        />
      </div>
    </div>
  )
}
