import MainNav from "@/components/main-nav"
import { buttonVariants } from "@/components/ui/button"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function MarketingLayout({
  children,  
}: {
    children: React.ReactNode
}) {
    return (
        <div className="px-40">
            <header className="z-40 bg-background flex flex-col">
                <div className="h-20 py-6 flex items-center justify-between">
                    <MainNav items={marketingConfig.mainNav} />
                    <nav>
                        <Link
                            href={"/login"}
                            className={cn(
                                    buttonVariants({variant: "secondary", size:"sm"}),
                                    "px-4"
                                )}
                        >
                            ログイン
                        </Link>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
        </div>
    )
}