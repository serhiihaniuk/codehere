import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import CodeEditor from './components/CodeEditor'
import Preview from './components/Preview'
import build from './bundler'

const App: React.FC = () => {
    const [input, setInput] = useState('')
    const [code, setCode] = useState('')

    const clickHandler = async () => {
        const output = await build(input)
        setCode(output)
    }

    return (
        <div>
            <CodeEditor
                onChange={value => {
                    setInput(value)
                }}
            />

            <div>
                <button onClick={clickHandler}>Submit</button>
            </div>
            <Preview code={code} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
