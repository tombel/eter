import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import styles from '../styles/FaqSection.module.css'

export default function Faq(): JSX.Element {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const data = [
    {
      question: 'HOW MANY KUNIVERSE AVATARS ARE THERE?',
      answer: 'There are a total of 9320 Kuniverse Avatars that will be minted.',
    },
    {
      question: 'WHAT IS THEIR RARITY/TIER?',
      answer:
        'The avatars are divided into a variety or rarity categories depending on traits. Each avatar will be unique, and generated through a random weight of traits which affect the visual look & feel. In addition there will be multiple specially designed 1/1 NFTs.',
    },
    {
      question: 'WHERE DO I HAVE TO GO CLAIM THE AVATARS?',
      answer: 'There is only one place where you can mint the Avatars:(Link)',
    },
    {
      question: 'AT WHAT TIME DOES THE SALE START?',
      answer: 'The sale will start on (Date) Whitelisted users will have access 48hours before.',
    },
    {
      question: 'HOW MUCH SHOULD I EXPECT TO PAY FOR ONE STEVE AOKI AVATAR NFT?',
      answer: 'One Avatar NFT will cost 100 SAND.',
    },
    {
      question: 'HOW MANY AVATARS CAN I MINT PER WALLET ADDRESS?',
      answer:
        'The Kuniverse Avatars will be released in 3 waves: (Date) : People whitelisted by Kun Aguero himself will have a chance to mint up to 2 avatars per wallet, within a 48hours timeframe. (Date) : People of Aguero’s community that are whitelisted will have a chance to mint up to 2 avatars per wallet, within a 24 hours timeframe.(Date) : Public release. Every user will have the chance to mint up to 4 avatars per wallet. *please note that the firts whitelist wave will be limited to a maximum of (6000?) Kuniverse Avatars. This is to ensure a fair distribution for all other users.',
    },
    {
      question: 'HOW CAN I SEE MY AVATAR?',
      answer: 'The Kun Aguero Avatars will be revealed 48hs after minting on OpenSea.',
    },
    {
      question: 'CAN I MINT USING ANY WALLET?',
      answer: 'Yes, you can mint with whatever wallet you have.',
    },
    {
      question: 'WHAT CAN I DO WITH THE AVATARS?',
      answer:
        'Each Avatar will be playable inside The Sandbox in all the multiplayer experiences to come starting from the Kuniverse Season in November. We will also introduce unique Play&Earn opportunities for avatar holders, giving any holder the opportunity to earn SAND through gameplay.',
    },
    {
      question: 'HOW CAN I USE MY AVATAR INSIDE THE SANDBOX?',
      answer:
        'You will be able to use it as an Avatar by simply selecting it in the Avatar Manager in The Sandbox dashboard once it has been enabled.',
    },
    {
      question: 'WHERE CAN I BUY A KUN AGUERO AVATAR AFTER THE INITIAL SALE IS OVER?',
      answer:
        'After the initial sale is over, you will be able to purchase as many avatars as you like from users that are willing to sell theirs on the secondary marketplace OpenSea.',
    },
    {
      question: 'HOW DO I GET WHITELISTED?',
      answer:
        'Participating on our Kuniverse Twitter and Kun’s Discord contests can also give you early acces to mint your NFT.(Faltan Fechas)',
    },
    {
      question: 'MY AVATARS ARE NOT REVEALED YET ON OPENSEA, WHAT CAN I DO?',
      answer:
        'If you are checking before they have been revealed, this is normal. If you are checking after that date, press the “Refresh Metadata” button on the top-right corner of OpenSea.',
    },
    {
      question: 'BUYING NFT FOR THE FIRST TIME, HOW CAN I GET STARTED?',
      answer:
        'The process is quite simple. You need to ensure that you have: Created an account on The Sandbox. Ensure you have both the correct amount of SAND to mint the number of avatars you want and some ETH to cover the gas fees. Log into your account and head over to the mint page: (link) Check that your wallet is properly connected and just press the Mint button to retrieve your Avatar.',
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className={styles.FaqSection}>
      <div className="container">
        <h1 className={styles.FaqTitle}>F.A.Q.</h1>
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
