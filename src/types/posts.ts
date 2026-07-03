import type { PortableTextBlock } from '@portabletext/types';

export type PostType = {
  _id: string;
  _rev: string;
  _type: 'posts-en' | 'posts-ru';

  active: boolean;
  title: string;
  shortDescription: string | null;
  releaseDate: string;
  tags: string[];
  toOtherPage: boolean;

  category: {
    _ref: string;
    _type: 'reference';
  };

  slug: {
    _type: 'slug';
    current: string;
  };

  content: PortableTextBlock[];

  _createdAt: string;
  _updatedAt: string;
};

export type PostsType = PostType[];

export type PostsFromSanityType = {
  posts: PostsType;
  total: number;
};