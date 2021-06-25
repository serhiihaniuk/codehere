import React from 'react'

interface Context {
    preview?: boolean
    setPreview?: React.Dispatch<React.SetStateAction<boolean>>
}

export const PreviewContext = React.createContext<Context>({})
