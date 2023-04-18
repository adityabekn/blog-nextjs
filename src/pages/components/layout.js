import styles from "@/pages/components/layout.module.css"
import Head from "next/head"
import Image from "next/image"
import utilStyle from "@/styles/utils.module.css"
import Link from "next/link";

const name = 'Aditya Bekti'
export const siteTitle = 'Next.js Sample Website'

function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="Learn how to build a personal website using Next.js"/>
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image src="/images/profile.jpg" className={utilStyle.borderCircle} height={144} width={144}
                               alt=""/>
                        <h1 className={utilStyle.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image src="/images/profile.jpg" className={utilStyle.borderCircle} width={108} height={108}
                                   alt=""/>
                        </Link>
                        <h2 className={utilStyle.headingLg}>
                            <Link href="/" className={utilStyle.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>
            {
                !home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            ← Back to home
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default Layout;