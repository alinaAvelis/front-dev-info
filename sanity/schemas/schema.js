import metadata from "./blocks/metadata";

import posts from "./blocks/posts";
import categories from './blocks/categories';

// components
import youtubeVideo from "./blocks/components/youtubeVideo";
import vimeoVideo from "./blocks/components/vimeoVideo";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  // pages metadata
  metadata,

  categories,
  posts,

  // components
  youtubeVideo,
  vimeoVideo
]
