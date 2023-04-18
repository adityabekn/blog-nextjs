import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Date from "@/pages/components/date"

import Layout, {siteTitle} from "@/pages/components/layout";
import utilStyle from "@/styles/utils.module.css"
import {getSortedPostsData} from "@/../lib/posts";


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
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
                    (This is sample website - you'll be building a site like this on our Next.js tutorial.)
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
                                    <Date dateString={date}></Date>
                                </small>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </Layout>
    )
}
