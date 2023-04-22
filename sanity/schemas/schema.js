import metadata from "./blocks/metadata";

import stories from "./blocks/stories";
import categories from './blocks/categories';
import books from "./blocks/books";

// components
import youtubeVideo from "./blocks/components/youtubeVideo";
import vimeoVideo from "./blocks/components/vimeoVideo";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  // pages metadata
  metadata,

  categories,
  stories,
  books,

  // components
  youtubeVideo,
  vimeoVideo
]
