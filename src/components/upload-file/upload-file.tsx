'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { Dropzone } from '../dropzone'
import { PreviewItem } from './preview-item'

export const UploadFile = () => {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div>
      <Dropzone
        onUploadFiles={(files) =>
          setFiles((oldState) => [...oldState, ...Array.from(files)])
        }
        onError={(error) => toast.error(error.message)}
        acceptedFiles={['png', 'jpg', 'jpeg', 'gif']}
        maxSize={10240} // 10MB
        maxFiles={1}
      />
      <div className="mt-8 space-y-6">
        {files.map((item, index) => {
          return <PreviewItem key={`preview-${index}`} file={item} />
        })}
      </div>
    </div>
  )
}
