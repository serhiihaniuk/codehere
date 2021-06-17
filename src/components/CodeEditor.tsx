import React from 'react'
import Editor from '@monaco-editor/react'

interface CodeEditorProps {
    initialValue?: string
    language: string
    onChange(value: string): void
}
const CodeEditor: React.FC<CodeEditorProps> = ({
    initialValue = '//shift+alt+f to format',
    language,
    onChange,
}) => {

    function handleEditorChange(value: string | undefined) {
        if (value) {
            onChange(value)
        }
    }
    return (

        <Editor
            onChange={handleEditorChange}
            value={initialValue}
            height='100%'
            width='100%'
            theme='vs-dark'
            language={language}
            options={{
                wordWrap: 'on',
                tabSize: 2,
                minimap: {
                    enabled: false,
                },
                showUnused: false,
                folding: false,
                lineNumbersMinChars: 3,
                fontSize: 16,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                fontFamily: 'JetBrains Mono'
                
            }}
        />
    )
}

export default CodeEditor
