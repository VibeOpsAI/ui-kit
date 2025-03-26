import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { TemplatePreview } from '@/components/template-preview'
import Template1 from './template-1/page'

// Verify the template is loaded
console.log('Template1:', Template1)

const templates = [
    {
        id: 'template-1',
        title: 'Marketing Landing Page',
        description: 'A modern, conversion-focused landing page template perfect for SaaS and marketing websites. Features a hero section, logo cloud, testimonials, and feature highlights.',
        component: Template1,
        href: '/templates/template-1'
    }
]

export default function TemplatesPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Templates</h1>
                    <p className="text-muted-foreground max-w-2xl">
                        Beautiful, responsive templates built with Tailwind CSS and Next.js. Each template is fully customizable and ready for production.
                    </p>
                </div>

                <div className="grid gap-8">
                    {templates.map((template) => (
                        <Card key={template.id} className="overflow-hidden">
                            <div className="grid gap-6 p-6 lg:grid-cols-[2fr_1fr] lg:p-8">
                                <div className="relative">
                                    <TemplatePreview 
                                        template={
                                            <div className="bg-background">
                                                <Template1 />
                                            </div>
                                        }
                                        className="w-full h-[600px] bg-muted rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col justify-between space-y-4">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-bold">{template.title}</h2>
                                        <p className="text-muted-foreground">{template.description}</p>
                                    </div>
                                    <Button asChild className="w-fit">
                                        <Link href={template.href}>
                                            View Template <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
