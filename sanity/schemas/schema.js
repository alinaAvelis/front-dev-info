import metadata from "./blocks/metadata";

import posts from "./blocks/posts";
import categories from './blocks/categories';
import categories_resourses from './blocks/categories_resourses';
import posts_resourses from "./blocks/posts_resourses";
// components
import youtubeVideo from "./blocks/components/youtubeVideo";
import vimeoVideo from "./blocks/components/vimeoVideo";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  // pages metadata
  metadata,

  categories,
  posts,
  categories_resourses,
  posts_resourses,

  // components
  youtubeVideo,
  vimeoVideo
]
