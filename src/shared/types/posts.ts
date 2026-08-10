import type { PortableTextBlock } from '@portabletext/types';
export interface PostCategoryType {
    _ref: string;
    _type: 'reference';
  }
export interface PostType {
  _id: string;
  _rev: string;
  _type: 'posts-en' | 'posts-ru';

  active: boolean;
  title: string;
  shortDescription: string | null;
  releaseDate: string;
  tags: string[];
  toOtherPage: boolean;

  category: PostCategoryType;

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