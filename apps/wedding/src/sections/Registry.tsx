import { useState } from 'react'
import Heading from '@/components/Heading'
import Section from '@components/Section'
import { motion } from 'framer-motion'
import { trackGoal } from 'fathom-client'
import clsx from 'clsx'

import RVPottery from '@components/icons/RVPottery'
import NPS from '@components/icons/NPS'
import LMH from '@components/icons/LMH'
import GOALS from '@/lib/fathomGoals'

export default function Registry() {
  const [isRVPotteryHover, setIsRVPotteryHover] = useState(false)
  const [isNPSHover, setIsNPSHover] = useState(false)
  const [isLMHHover, setIsLMHHover] = useState(false)

  return (
    <Section className="bg-primary" id="registry">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <Heading>Registry</Heading>
            <p className="mt-3 mb-8 max-w-3xl font-display font-light tracking-widest text-egg md:text-xl">
              We’re so excited to celebrate with you all. If you wish to give a
              gift, being the indecisive people we are, we have a few options.
            </p>
            <p className="mt-3 max-w-3xl font-display font-light tracking-tight text-egg">
              We have a small registry at{' '}
              <a
                onClick={() => trackGoal(GOALS.registryRVPottery, 0)}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx('font-bold', {
                  'underline underline-offset-4': isRVPotteryHover,
                })}
                onMouseEnter={() => setIsRVPotteryHover(true)}
                onMouseLeave={() => setIsRVPotteryHover(false)}
                href="https://rvpottery.com/apps/giftregistry/registry/217915"
              >
                RV Pottery
              </a>
              , a woman-owned pottery studio based in Nashville. Cash and
              contributions to the honeymoon are welcomed. And we would love for
              folks to consider donating to the{' '}
              <a
                className={clsx('font-bold', {
                  'underline underline-offset-4': isNPSHover,
                })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGoal(GOALS.registryNPS, 0)}
                onMouseEnter={() => setIsNPSHover(true)}
                onMouseLeave={() => setIsNPSHover(false)}
                href="https://give.nationalparks.org/site/TR?px=3537682&fr_id=1060&pg=personal"
              >
                National Park Foundation{' '}
              </a>
              and/or the{' '}
              <a
                className={clsx('font-bold', {
                  'underline underline-offset-4': isLMHHover,
                })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGoal(GOALS.registryLMH, 0)}
                onMouseEnter={() => setIsLMHHover(true)}
                onMouseLeave={() => setIsLMHHover(false)}
                href="https://www.lancastermennonite.org/kristinpalazzomemorialendowment/"
              >
                Kristin Palazzo Endowment for Visual Arts at Lancaster Mennonite
                School
              </a>
              , in honor of Steph’s sister, Kristin, who loved art and would
              have been so excited to welcome Tom into the family.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-0.5 lg:mt-0">
            <div className="col-span-1 flex justify-center bg-primary py-8 px-8">
              <motion.a
                onMouseEnter={() => setIsRVPotteryHover(true)}
                onMouseLeave={() => setIsRVPotteryHover(false)}
                onClick={() => trackGoal(GOALS.registryRVPottery, 0)}
                href="https://rvpottery.com/apps/giftregistry/registry/217915"
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  rotate: isRVPotteryHover ? 2 : 0,
                  scale: isRVPotteryHover ? 1.1 : 1,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: -2,
                }}
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0"
              >
                <RVPottery className="h-16 w-16 sm:h-32 sm:w-32" />
              </motion.a>
            </div>
            <div className="col-span-1 flex justify-center bg-primary py-8 px-8">
              <motion.a
                onMouseEnter={() => setIsNPSHover(true)}
                onMouseLeave={() => setIsNPSHover(false)}
                onClick={() => trackGoal(GOALS.registryNPS, 0)}
                href="https://give.nationalparks.org/site/TR?px=3537682&fr_id=1060&pg=personal"
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  rotate: isNPSHover ? -2 : 0,
                  scale: isNPSHover ? 1.1 : 1,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                }}
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0"
              >
                <NPS className="h-16 w-16 sm:h-32 sm:w-32" />
              </motion.a>
            </div>
            <div className="col-span-1 flex justify-center bg-primary py-8 px-8">
              <motion.a
                onMouseEnter={() => setIsLMHHover(true)}
                onMouseLeave={() => setIsLMHHover(false)}
                onClick={() => trackGoal(GOALS.registryLMH, 0)}
                href="https://www.lancastermennonite.org/kristinpalazzomemorialendowment/"
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  rotate: isLMHHover ? -2 : 0,
                  scale: isLMHHover ? 1.1 : 1,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                }}
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0"
              >
                <LMH className="h-16 w-16 sm:h-32 sm:w-32" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
