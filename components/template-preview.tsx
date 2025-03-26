'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface TemplatePreviewProps {
    template: React.ReactNode
    className?: string
}

export function TemplatePreview({ template, className }: TemplatePreviewProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scale, setScale] = useState(0.25)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Adjust scale based on container width
    useEffect(() => {
        const updateScale = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth
                const newScale = containerWidth / 1920
                setScale(Math.min(newScale, 0.25))
            }
        }

        updateScale()
        window.addEventListener('resize', updateScale)
        return () => window.removeEventListener('resize', updateScale)
    }, [])

    if (!mounted) {
        return (
            <div 
                ref={containerRef}
                className={cn(
                    "relative overflow-hidden rounded-lg border bg-background h-[600px]",
                    className
                )}
            >
                <div className="flex h-full items-center justify-center">
                    Loading preview...
                </div>
            </div>
        )
    }

    return (
        <div 
            ref={containerRef}
            className={cn(
                "relative overflow-hidden rounded-lg border bg-background h-[600px]",
                className
            )}
        >
            <div 
                className="absolute inset-0 overflow-auto"
                style={{ 
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    width: `${100 / scale}%`,
                    height: `${100 / scale}%`,
                }}
            >
                <div className="min-h-screen w-full">
                    {template}
                </div>
            </div>
        </div>
    )
} 