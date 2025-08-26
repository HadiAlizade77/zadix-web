import Hero from '@/components/sections/Hero'
import OutcomeStats from '@/components/sections/OutcomeStats'
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import HowItWorks from '@/components/sections/HowItWorks'
import IndustriesGrid from '@/components/sections/IndustriesGrid'
import PricingSnapshot from '@/components/sections/PricingSnapshot'
import SecurityCompliance from '@/components/sections/SecurityCompliance'
import CTAStrip from '@/components/sections/CTAStrip'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <OutcomeStats />
      <WhatWeBuild />
      <HowItWorks />
      <IndustriesGrid />
      <PricingSnapshot />
      <SecurityCompliance />
      <CTAStrip />
    </div>
  )
}