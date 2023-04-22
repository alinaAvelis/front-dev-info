import getVideoId from "get-video-id";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Preview = (props) => {
  const {url, renderDefault} = props
  if (!url) {
    return <div>Missing YouTube URL</div>
  }
  const {id} = getVideoId(url)
  return (
    <div>
      {renderDefault({...props, title: 'YouTube Video'})}
      <LiteYouTubeEmbed id={id} />
    </div>
  )
}

export default {
  name: 'youtubeVideo',
  type: 'object',
  title: 'YouTube Video',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: Preview,
  },
}