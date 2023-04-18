import Link from 'next/link'
import Head from 'next/head'
import FormatDate from "@/components/formatDate"

import Layout, {siteTitle} from "@/components/layout";
import utilStyle from "@/styles/utils.module.css"
import {getSortedPostsData} from "@/../lib/posts";


export async function getStaticProps() {
    const allPostsData = await getSortedPostsData()
    return {
        props: {
            allPostsData,
        }
    }
}

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyle.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is sample website - you`&apos;`ll be building a site like this on our Next.js tutorial.)
                </p>
            </section>

            <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
                <h2 className={utilStyle.headingLg}>Blog</h2>
                <ul className={utilStyle.list}>
                    {
                        allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyle.listItem} key={id}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br/>
                                <small>
                                    <FormatDate dateString={date}/>
                                </small>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </Layout>
    )
}
