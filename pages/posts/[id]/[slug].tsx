import { Post, PostService } from 'enzomoraes-alganews-sdk';
import { ResourceNotFoundError } from 'enzomoraes-alganews-sdk/dist/errors';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import Markdown from '../../../components/Markdown';
import PostHeader from '../../../components/PostHeader';

export default function PostPage(props: PostProps) {
  const { post } = props;
  return (
    <>
      <Head>
        {/* Open graph - pre visualizacao do site */}
        <meta property='og:title' content={post?.title} />
        <meta property='og:site_name' content='AlgaNews' />
        <meta property='og:url' content='alganews.com.br' />
        <meta property='og:description' content={post?.body.slice(0, 54)} />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={post?.imageUrls.medium} />
        <title>{ post?.title } - AlgaNews</title>
        <link
          rel='canonical'
          href={`http://localhost:3000/posts/${props.post?.id}/${props.post?.slug}`}
        />
      </Head>
      {post && (
        <PostHeader
          createdAt={post?.createdAt}
          editor={post?.editor}
          thumbnail={post?.imageUrls.large}
          title={post?.title}
        ></PostHeader>
      )}
      {post?.body && <Markdown>{post.body}</Markdown>}
    </>
  );
}

interface PostProps extends NextPageProps {
  post?: Post.Detailed;
  host?: string;
}

interface Params extends ParsedUrlQuery {
  id: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps<
  PostProps,
  Params
> = async ({ params, req }) => {
  try {
    if (!params) return { notFound: true };

    const { id } = params;
    const postId = Number(id);

    if (isNaN(postId)) return { notFound: true };

    const post = await PostService.getExistingPost(postId);

    return {
      props: { post, host: req.headers.host },
    };
  } catch (error: any) {
    if (error instanceof ResourceNotFoundError) {
      return { notFound: true };
    }
    return {
      props: {
        error: {
          message: error.message,
          statusCode: error.data?.status || 500,
        },
      },
    };
  }
};
