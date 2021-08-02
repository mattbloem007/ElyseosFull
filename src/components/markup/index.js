import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import get from 'lodash/get'
import Image from "gatsby-image";
import { BLOCKS } from "@contentful/rich-text-types"


const nodeRenderer = ({ images }) => (
  {
    renderNode: {
      /**
       * Render Images
       */
      [BLOCKS.EMBEDDED_ASSET]: node => {
        if (node.data.target) {
          const { title, description, file } = get(
            node,
            'data.target.fields',
            {}
          )
          // image.src has a url param that we need to strip off to match file.url
          return (
            <Image
              fluid={images.find(image => image.src.split('?')[0] === file.url)}
            />
          )
        }
      },
      // ...other rendering functions
    },
  }
)

export const convertRichText = ({
  images,
  richText,
}: ConvertRichTextArgs: React.ReactNode => documentToReactComponents(richText, nodeRenderer({ images }))
