import SnippetPreview from '@/components/SnippetPreview'
import { Button } from '@/components/ui/button'
import { ButtonProps } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Shadcn Button Snippets',
    description: 'Custom shadcn buttons for your marketing website.',
}

export default function ButtonsPage() {
    return (
        <div className="space-y-24">
            {/* Base Shadcn Buttons Section */}
            <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
                <div className="group [--color-primary:var(--color-blue-600)] dark:[--color-primary-foreground:var(--color-white)]">
                    <Button>
                        Primary
                    </Button>

                    <div className={actionClasses}>
                        <SnippetPreview description={getButtonVariantDescription('default')} {...formatButtonVariantCode('default', '')} />
                    </div>
                </div>
                <div className="group">
                    <Button variant="destructive">
                        Destructive
                    </Button>

                    <div className={actionClasses}>
                        <SnippetPreview description={getButtonVariantDescription('destructive')} {...formatButtonVariantCode('destructive', '')} />
                    </div>
                </div>
                <div className="group">
                    <Button variant="outline">
                        Outline
                    </Button>

                    <div className={actionClasses}>
                        <SnippetPreview description={getButtonVariantDescription('outline')} {...formatButtonVariantCode('outline', '')} />
                    </div>
                </div>
                <div className="group">
                    <Button variant="secondary">
                        Secondary
                    </Button>

                    <div className={actionClasses}>
                        <SnippetPreview description={getButtonVariantDescription('secondary')} {...formatButtonVariantCode('secondary', '')} />
                    </div>
                </div>
                <div className="group">
                    <Button variant="ghost">
                        Ghost
                    </Button>

                    <div className={actionClasses}>
                        <SnippetPreview description={getButtonVariantDescription('ghost')} {...formatButtonVariantCode('ghost', '')} />
                    </div>
                </div>
                <div className="group">
                    <Button variant="link">
                        Link
                    </Button>

                    <div className={actionClasses}>
                        <SnippetPreview description={getButtonVariantDescription('link')} {...formatButtonVariantCode('link', '')} />
                    </div>
                </div>
            </div>

            {/* Neo Brutalism Section */}
            <div className="space-y-8">
                <h2 className="text-center text-3xl font-bold">Neo Brutalism Buttons</h2>
                <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
                    <div className="group">
                        <Button className="bg-[#FF6B6B] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                            Playful Red
                        </Button>
                        <div className={actionClasses}>
                            <SnippetPreview description="Neo Brutalism style with thick borders and playful shadow" {...formatButtonVariantCode('default', 'bg-[#FF6B6B] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all')} />
                        </div>
                    </div>
                    <div className="group">
                        <Button className="bg-[#4ECDC4] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                            Mint Fresh
                        </Button>
                        <div className={actionClasses}>
                            <SnippetPreview description="Neo Brutalism style with thick borders and playful shadow" {...formatButtonVariantCode('default', 'bg-[#4ECDC4] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all')} />
                        </div>
                    </div>
                    <div className="group">
                        <Button className="bg-[#FFE66D] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                            Sunny Yellow
                        </Button>
                        <div className={actionClasses}>
                            <SnippetPreview description="Neo Brutalism style with thick borders and playful shadow" {...formatButtonVariantCode('default', 'bg-[#FFE66D] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all')} />
                        </div>
                    </div>
                    <div className="group">
                        <Button className="bg-[#95A5A6] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                            Concrete Gray
                        </Button>
                        <div className={actionClasses}>
                            <SnippetPreview description="Neo Brutalism style with thick borders and playful shadow" {...formatButtonVariantCode('default', 'bg-[#95A5A6] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all')} />
                        </div>
                    </div>
                    <div className="group">
                        <Button className="bg-[#A8E6CF] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                            Sage Green
                        </Button>
                        <div className={actionClasses}>
                            <SnippetPreview description="Neo Brutalism style with thick borders and playful shadow" {...formatButtonVariantCode('default', 'bg-[#A8E6CF] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all')} />
                        </div>
                    </div>
                    <div className="group">
                        <Button className="bg-[#FF8B94] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                            Coral Pink
                        </Button>
                        <div className={actionClasses}>
                            <SnippetPreview description="Neo Brutalism style with thick borders and playful shadow" {...formatButtonVariantCode('default', 'bg-[#FF8B94] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const formatButtonVariantCode = (variant: ButtonProps['variant'], code: string) => {
    const displayedCode = `variant: {
    ${variant}: '${code}',
},`
    return {
        codeToCopy: code,
        displayedCode,
    }
}

const getButtonVariantDescription = (variant: ButtonProps['variant']) => {
    return `Add these Utilities to your button component's \`${variant}\` variant to apply this style configuration`
}

const actionClasses = 'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
