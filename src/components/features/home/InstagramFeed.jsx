import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ContentLoader from '../../ui/loaders/ContentLoader'
import { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from 'motion/react'

const getInstagramFeed = async () => {
  const res = await axios.get(
    'https://api.theodorlundin.se/socials/instagram-feed'
  )
  return res.data
}

export default function InstagramFeed() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['instagram_feed'],
    queryFn: getInstagramFeed
  })

  if (isPending) {
    return <ContentLoader />
  }

  if (isError) {
    return <p>Något gick fel: {error.message}</p>
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:[&>a:last-child]:hidden">
      {data.data.slice(0, 4).map((post, index) => (
        <motion.a
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.25 }}
          viewport={{ once: true }}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          key={post.id}
          className="flex flex-col gap-2 rounded-lg border-1 border-slate-300 p-4 text-slate-800"
        >
          <LazyLoadImage
            src={post.media_url}
            alt={post.caption}
            className="aspect-square w-full rounded object-cover"
          />
          <span>{post.caption}</span>
        </motion.a>
      ))}
    </div>
  )
}
