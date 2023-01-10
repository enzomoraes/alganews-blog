import { Post, PostService } from 'enzomoraes-alganews-sdk';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import {
  InvalidDataError,
  ResourceNotFoundError,
} from 'enzomoraes-alganews-sdk/dist/errors';
import CustomError from 'enzomoraes-alganews-sdk/dist/CustomError';

export default function PostPage(props: PostProps) {
  return <div>{props.post?.title}</div>;
}

interface PostProps extends NextPageProps {
  post?: Post.Detailed;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<
  PostProps,
  Params
> = async ({ params }) => {
  try {
    if (!params) return { notFound: true };

    const { id } = params;
    const postId = Number(id);

    if (isNaN(postId)) return { notFound: true };

    const post = await PostService.getExistingPost(postId);

    return {
      props: { post },
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
