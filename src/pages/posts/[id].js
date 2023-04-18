import Layout from "@/pages/components/layout";
import { getAllPostsId, getPostData } from "../../../lib/posts";
import Head from "next/head";
import Date from "@/pages/components/date"
import utilStyle from "@/styles/utils.module.css"

export default function Post({ postData }) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyle.headingXl}>{postData.title}</h1>
            <div className={utilStyle.lightText}>
                <Date dateString={postData.date}></Date>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
}

export async function getStaticPaths() {
    const paths = await getAllPostsId()
    console.log(paths)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    console.log(postData)
    return {
        props: {
            postData,
        },
    };
}