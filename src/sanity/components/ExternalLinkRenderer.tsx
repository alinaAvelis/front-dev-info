import { LaunchIcon } from '@sanity/icons'
import type { PortableTextComponentProps } from '@portabletext/react'

type ExternalLinkValue = {
  href?: string
}

const ExternalLinkRenderer = (
  props: PortableTextComponentProps<ExternalLinkValue>
) => {
  const href = props.value?.href

  return (
    <span>
      {props.renderDefault(props)}
      {href && (
        <a contentEditable={false} href={href} target="_blank" rel="noreferrer">
          <LaunchIcon />
        </a>
      )}
    </span>
  )
}

export default ExternalLinkRenderer