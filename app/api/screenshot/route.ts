import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const path = searchParams.get('path')

        if (!path) {
            return new NextResponse('Path is required', { status: 400 })
        }

        const browser = await puppeteer.launch({
            headless: 'new'
        })
        const page = await browser.newPage()
        
        // Set viewport to 16:10 aspect ratio
        await page.setViewport({
            width: 1920,
            height: 1200,
        })

        // Navigate to the template page
        await page.goto(`${process.env.NEXT_PUBLIC_APP_URL}${path}`)
        
        // Wait for the content to load
        await page.waitForSelector('main')

        // Take the screenshot
        const screenshot = await page.screenshot({
            type: 'png',
            fullPage: false // We want just the viewport
        })

        await browser.close()

        // Return the image
        return new NextResponse(screenshot, {
            headers: {
                'Content-Type': 'image/png',
                'Cache-Control': 'public, max-age=31536000, immutable'
            }
        })
    } catch (error) {
        console.error('Screenshot error:', error)
        return new NextResponse('Error generating screenshot', { status: 500 })
    }
} 