'use client'

import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  onUploadFiles(files: FileList): void
  onError(error: Error): void
  acceptedFiles?: string[]
  maxFiles?: number
  maxSize?: number
}

export const Dropzone = (props: Props) => {
  const [className, setClassName] = useState(
    'w-full h-24 bg-zinc-800/50 hover:bg-pink-500/10 focus:bg-pink-500/10 border-2 border-zinc-600 hover:border-pink-500 border-dashed rounded-lg transition-colors'
  )
  const {
    onUploadFiles,
    onError,
    acceptedFiles = ['png', 'jpeg', 'jpg', 'gif'],
    maxFiles = 1
  } = props

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files.length > maxFiles) {
      if (!onError) {
        throw new Error(`You can only send ${maxFiles} files.`)
      }

      return onError(new Error(`You can only send ${maxFiles} files.`))
    }

    const extension = event.target.files[0].name.split('.').at(-1)
    if (!acceptedFiles.includes(extension)) {
      if (!onError) {
        throw new Error('Extension not allowed')
      }

      return onError(new Error('Extension not allowed'))
    }

    onUploadFiles(event.target.files)
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setClassName((oldState) => twMerge(oldState, 'bg-zinc-800/50', 'border-zinc-600'))
  }

  const handleDragHover = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setClassName((oldState) => twMerge(oldState, 'bg-pink-500/10', 'border-pink-500'))
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event.dataTransfer.files.length > maxFiles) {
      if (!onError) {
        throw new Error(`You can only send ${maxFiles} files.`)
      }

      return onError(new Error(`You can only send ${maxFiles} files.`))
    }

    const extension = event.dataTransfer.files[0].name.split('.').at(-1)
    if (!acceptedFiles.includes(extension)) {
      if (!onError) {
        throw new Error('Extension not allowed')
      }

      return onError(new Error('Extension not allowed'))
    }

    setClassName((oldState) => twMerge(oldState, 'bg-zinc-800/50', 'border-zinc-600'))

    onUploadFiles(event.dataTransfer.files)
  }

  return (
    <div
      className={className}
      onDragStart={() => console.log('1000')}
      onDragOver={handleDragHover}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label
        htmlFor="dropzone-file"
        className="flex h-full cursor-pointer items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <p className="mb-2 text-sm text-zinc-300">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-zinc-400">PNG, JPG, GIF up to 10MB</p>
        </div>
        <input
          type="file"
          id="dropzone-file"
          className="hidden"
          onChange={handleChangeFile}
        />
      </label>
    </div>
  )
}
