import { LaunchIcon } from "@sanity/icons";
import type { BlockDecoratorProps } from "sanity";

const ExternalLinkRenderer = (
  props: BlockDecoratorProps & {
    value: {
      href?: string;
    };
  }
) => (
  <span>
    {props.renderDefault(props)}

    <a
      contentEditable={false}
      href={props.value.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LaunchIcon />
    </a>
  </span>
);

export default ExternalLinkRenderer;