'use client'

import dynamic from 'next/dynamic'

// Dynamically import components with no SSR
const HeroOne = dynamic(() => import('@/app/preview/hero-section/one/page'), { ssr: false })
const LogoCloudOne = dynamic(() => import('@/app/preview/logo-cloud/one/page'), { ssr: false })
const StatsOne = dynamic(() => import('@/app/preview/stats/one/page'), { ssr: false })
const TestimonialsOne = dynamic(() => import('@/app/preview/testimonials/one/page'), { ssr: false })
const FeaturesEleven = dynamic(() => import('@/app/preview/features/eleven/page'), { ssr: false })
const ContentOne = dynamic(() => import('@/app/preview/content/one/page'), { ssr: false })
const CallToActionOne = dynamic(() => import('@/app/preview/call-to-action/one/page'), { ssr: false })

export default function Template1Page() {
    return (
        <main className="bg-background">
            <HeroOne />
            <LogoCloudOne />
            <FeaturesEleven />
            <ContentOne />
            <StatsOne />
            <TestimonialsOne />
            <CallToActionOne />
        </main>
    )
} 