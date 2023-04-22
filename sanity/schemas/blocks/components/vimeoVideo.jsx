import getVideoId from "get-video-id";
import Vimeo from '@u-wave/react-vimeo';

const Preview = (props) => {
  const {url, renderDefault} = props
  if (!url) {
    return <div>Missing YouTube URL</div>
  }
  const {id} = getVideoId(url)
  return (
    <div>
      {renderDefault({...props, title: 'Vimeo Video'})}
      <Vimeo
            video={id}
       />
    </div>
  )
}

export default {
  name: 'vimeoVideo',
  type: 'object',
  title: 'Vimeo video',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Vimeo video URL',
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