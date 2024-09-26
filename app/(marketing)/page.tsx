import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
    return (
        <>
            <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12 px-10">
                <div className="container text-center flex flex-col items-center gap-4">
                    <Link href={siteConfig.links.zenn} className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm" target="_blank" rel="noreferrer">
                        zennをフォローする
                    </Link>
                    <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Post Writer</h1>
                    <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
                        このアプリケーションはNext.js
                        AppRouterで作られたものです。ユーザは自由に投稿をポストすることができます。
                    </p>
                    <div className="flex space-x-4">
                        <div>
                            <Link href={"/login"} className={cn(buttonVariants({size: "lg"}))}>はじめる</Link>
                        </div>
                        <div>
                            <Link href={siteConfig.links.github} className={cn(buttonVariants({size: "lg", variant: "outline"}))} target="_blank" rel="noreferrer">GitHub</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6">
                <div className="text-center space-y-6 max-w-[58rem] mx-auto">
                    <h2 className="font-extrabold text-3xl md:text-6xl">
                        サービスの特徴
                    </h2>
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">このプロジェクトはモダンな技術スタックを使って作られたWebアプリケーションです。</p>
                </div>

                <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
                    <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col justify-center p-6  h-[180px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"/>
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用。</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col justify-center p-6  h-[180px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 32">
                                <rect width="28" height="28" x="2" y="2" fill="#3178c6" rx="1.312"/>
                                <path fill="#fff" fill-rule="evenodd" d="M18.245 23.759v3.068a6.492 6.492 0 0 0 1.764.575a11.56 11.56 0 0 0 2.146.192a9.968 9.968 0 0 0 2.088-.211a5.11 5.11 0 0 0 1.735-.7a3.542 3.542 0 0 0 1.181-1.266a4.469 4.469 0 0 0 .186-3.394a3.409 3.409 0 0 0-.717-1.117a5.236 5.236 0 0 0-1.123-.877a12.027 12.027 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.089 2.089 0 0 1-.516-.518a1.091 1.091 0 0 1-.181-.618a1.039 1.039 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.439 2.439 0 0 1 .726-.283a4.211 4.211 0 0 1 .956-.1a5.942 5.942 0 0 1 .808.058a6.292 6.292 0 0 1 .856.177a5.994 5.994 0 0 1 .836.3a4.657 4.657 0 0 1 .751.422V13.9a7.509 7.509 0 0 0-1.525-.4a12.426 12.426 0 0 0-1.9-.129a8.767 8.767 0 0 0-2.064.235a5.239 5.239 0 0 0-1.716.733a3.655 3.655 0 0 0-1.171 1.271a3.731 3.731 0 0 0-.431 1.845a3.588 3.588 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.458 6.458 0 0 1 .942.517a2.463 2.463 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.269 1.269 0 0 1-.435.441a2.381 2.381 0 0 1-.726.292a4.377 4.377 0 0 1-1.018.105a5.773 5.773 0 0 1-1.969-.35a5.874 5.874 0 0 1-1.805-1.045Zm-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z"/>
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">TypeScript</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用。</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col justify-center p-6  h-[180px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 256">
                                <g fill="none">
                                    <rect width="256" height="256" fill="#677EEB" rx="60"/>
                                    <path fill="#F7FAFC" fill-rule="evenodd" d="M52.658 165.183a9.385 9.385 0 0 1-.075-9.929L123.044 40.32c3.919-6.393 13.382-5.834 16.521.975l64.369 139.631c2.388 5.181-.361 11.277-5.826 12.917l-100.13 30.039a9.384 9.384 0 0 1-10.622-3.964l-34.698-54.735Zm78.515-91.257c.679-3.382 5.312-3.87 6.68-.703l44.401 102.74a3.518 3.518 0 0 1-2.224 4.768l-69.182 20.652c-2.543.759-4.979-1.463-4.456-4.065l24.781-123.392Z" clip-rule="evenodd"/>
                                </g>
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Prisma</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用。</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col justify-center p-6  h-[180px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 214">
                                <path fill="#635BFF" d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658Zm-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756h-36.694Zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716Zm-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28ZM241.493 36.551l35.698-7.68V0l-35.698 7.538V36.55Zm0 10.809h35.698v124.444h-35.698V47.36Zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524Zm-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022l.142-30.862ZM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774Z"/>
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Stripe</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用。</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col justify-center p-6  h-[180px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 32">
                                <path fill="#44a8b3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"/>
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">TailwindCSS</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用。</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col justify-center p-6  h-[180px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 32">
                                <path fill="#0096e6" d="M16.54 12.663h2.86v2.924h1.446a6.272 6.272 0 0 0 1.988-.333a5.091 5.091 0 0 0 .966-.436a3.584 3.584 0 0 1-.67-1.849a3.907 3.907 0 0 1 .7-2.753l.3-.348l.358.288a4.558 4.558 0 0 1 1.795 2.892a4.375 4.375 0 0 1 3.319.309l.393.226l-.207.4a4.141 4.141 0 0 1-4.157 1.983c-2.48 6.168-7.871 9.088-14.409 9.088c-3.378 0-6.476-1.263-8.241-4.259l-.029-.049l-.252-.519a8.316 8.316 0 0 1-.659-4.208l.04-.433h2.445v-2.923h2.861V9.8h5.721V6.942h3.432v5.721Z"/>
                                <path fill="#fff" d="M12.006 24.567a6.022 6.022 0 0 1-3.14-3.089a10.329 10.329 0 0 1-2.264.343q-.5.028-1.045.028q-.632 0-1.331-.037a9.051 9.051 0 0 0 7 2.769q.392 0 .78-.014ZM7.08 13.346h.2v2.067h-.2Zm-.376 0h.2v2.067H6.7v-2.067Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.2v2.067h-.2v-2.067ZM5 13.14h2.482v2.479H5Zm2.859-2.861h2.48v2.479H7.863Zm2.077.207h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2v-2.066Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.2v2.066h-.2Zm-.207 2.653h2.48v2.48H7.863V13.14Zm2.077.207h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2v-2.067Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.2v2.067h-.2Zm2.654-.207H13.2v2.48h-2.48V13.14Zm2.076.207H13v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.2v2.067h-.2Zm-.206-3.067H13.2v2.479h-2.48v-2.479Zm2.076.207H13v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.2v2.066h-.2Zm2.654 2.653h2.479v2.48h-2.48V13.14Zm2.076.207h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.192v2.067h-.2v-2.067Zm-.206-3.067h2.479v2.479h-2.48v-2.479Zm2.076.207h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.192v2.066h-.2v-2.066Zm-.206-3.067h2.479V9.9h-2.48V7.419Zm2.076.206h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.192v2.066h-.2V7.625Zm2.654 5.514h2.479v2.48h-2.48V13.14Zm2.076.207h.195v2.067h-.2v-2.067Zm-.376 0h.206v2.067h-.206Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.205v-2.067Zm-.368 0h.2v2.067h-.194v-2.067Zm-6.442 6.292a.684.684 0 1 1-.684.684a.684.684 0 0 1 .684-.684Zm0 .194a.489.489 0 0 1 .177.033a.2.2 0 1 0 .275.269a.49.49 0 1 1-.453-.3Z"/>
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Docker</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用。</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">
                        Post Writerはログインするとブログ投稿ができるようになります。
                    </p>
                </div>
            </section>
        </>
    )
}