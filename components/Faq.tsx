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
    <div className={styles.FaqSection}>
      <div className="container py-24">
        <h1 className={styles.FaqTitle}> {intl.formatMessage({ id: 'page.home.faq.title' })}</h1>
        <div className={styles.FaqContainer}>
          {data.map((item) => {
            return (
              <Accordion allowZeroExpanded key={item.question}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.answer}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            )
          })}
        </div>
      </div>
    </div>
  )
}
