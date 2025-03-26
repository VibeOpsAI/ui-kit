import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { GoogleAnalytics } from '@next/third-parties/google'
import ServiceWorkerInit from '@/components/ServiceWorkerInit'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Shadcn Marketing Blocks',
    description: 'Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    suppressHydrationWarning>
                    {children}
                </ThemeProvider>
                <ServiceWorkerInit />
            </body>
            <GoogleAnalytics gaId="G-6KY6TLKXKY" />
        </html>
    )
}
