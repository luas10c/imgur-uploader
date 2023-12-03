'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'

interface Props {
  file: File
}

export const PreviewItem = (props: Props) => {
  const { file } = props
  const [url, setURL] = useState('')
  const [loading, setLoading] = useState(false)

  const handleUploadFile = async () => {
    try {
      setLoading(true)
      const body = new FormData()
      body.append('image', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body
      })
      const { data } = await response.json()
      toast.success('O arquivo foi carregado com sucesso!')
      setURL(data.link)
    } catch (error) {
      toast.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex min-h-[300px] items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-pink-500/10">
              <svg
                viewBox="0 0 120 120"
                width="120"
                height="120"
                stroke="currentColor"
                fill="currentColor"
                className="h-5 w-5 text-pink-500"
              >
                <path d="M11.3 105a3.8 3.8 0 0 1-3.8-3.8V18.8a3.8 3.8 0 0 1 3.7-3.8h97.5a3.8 3.8 0 0 1 3.8 3.7v82.5a3.8 3.8 0 0 1-3.8 3.8H11.3z m36.9-26.8l-8.1-8.1a3.8 3.8 0 0 0-5.3 0L15 90h91.3l-28.4-34a3.8 3.8 0 0 0-5.8 0L53.8 78a3.8 3.8 0 0 1-5.6 0.2zM30 45a11.3 11.3 0 1 0 22.5 0A11.3 11.3 0 0 0 30 45z" />
              </svg>
            </div>
            <header>
              <h2 className="text-sm font-semibold text-zinc-200">{props.file.name}</h2>
              <span className="text-xs font-medium text-zinc-400">
                {(props.file.size / 1024).toFixed(1)}Kb
              </span>
            </header>
          </div>
          <div>...</div>
        </div>
        <div className="flex h-full items-center">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-transparent text-zinc-300 outline-none transition-colors hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-500"
            onClick={handleUploadFile}
            disabled={loading}
          >
            {loading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-pink-500 border-t-transparent"></div>
            ) : (
              <svg
                viewBox="0 0 120 120"
                width="120"
                height="120"
                stroke="currentColor"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M55 75h10V45h15l-20-25-20 25h15z" />
                <path d="M100 90H20v-35H10v35c0 5.5 4.5 10 10 10h80c5.5 0 10-4.5 10-10v-35h-10v35z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {url && (
        <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-8 items-center justify-center rounded-b-lg bg-pink-500/20 px-4 text-sm font-semibold text-zinc-200"
          >
            {url}
          </a>
        </motion.div>
      )}
    </div>
  )
}
