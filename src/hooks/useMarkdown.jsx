import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

/**
 * Custom hook to fetch and translate markdown content into styled JSX.
 * @param {string} filePath - The path to the markdown file.
 * @returns {[string, string, boolean]} Translated and styles JSX, raw markdown content and loading state
 */
export default function useMarkdown(filePath) {
  const [raw, setRaw] = useState('')
  const [loading, setLoading] = useState(true)
  const [jsx, setJsx] = useState('')

  const markdownOptions = {
    overrides: {
      img: {
        component: (props) => {
          return (
            <span className="flex flex-col-reverse">
              {props.alt && (
                <span
                  className="mb-2 block rounded-b bg-slate-200 px-5 py-3 text-sm text-slate-500
                    [&+img]:rounded-b-none"
                >
                  {props.alt}
                </span>
              )}
              <LazyLoadImage
                className="mt-4 rounded"
                src={props.src}
                alt={props.alt}
                effect="blur"
              />
            </span>
          )
        }
      },
      p: {
        component: (props) => (
          <p className="[&:not(:first-of-type)]:mt-4">{props.children}</p>
        )
      },
      h2: {
        component: (props) => <h2 className="mt-8">{props.children}</h2>
      },
      blockquote: {
        component: (props) => (
          <blockquote className="my-4 border-l-4 border-cyan-500 pl-4">
            {props.children}
          </blockquote>
        )
      },
      ul: {
        component: (props) => (
          <ul className="my-2 list-disc pl-8">{props.children}</ul>
        )
      },
      ol: {
        component: (props) => (
          <ol className="my-2 list-decimal pl-8">{props.children}</ol>
        )
      },
      pre: {
        component: (props) => (
          <pre className="my-4 rounded bg-slate-200 px-4 py-3">
            {props.children}
          </pre>
        )
      }
    }
  }

  useEffect(() => {
    setLoading(true)
    fetch(filePath)
      .then((res) => res.text())
      .then((text) => {
        setRaw(text)
        setLoading(false)
        setJsx(<Markdown options={markdownOptions}>{text}</Markdown>)
      })
  }, [filePath])

  return [jsx, raw, loading]
}
