import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App: React.FC = () => {
    
    const [input, setInput] = useState('')
    const [code, setCode] = useState('')

    const startService = async () => {
        await esbuild.initialize({
            worker: true,
            wasmURL: '/esbuild.wasm',
        })
        
    }

    useEffect(() => {
        startService()
    }, [])

    const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value)
    }
    const clickHandler = async () => {
        const result = await esbuild.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [unpkgPathPlugin()],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window',
              },
        })
        setCode(result.outputFiles[0].text)
    }
    return (
        <div>
            <textarea
                value={input}
                onChange={inputHandler}
                style={{ width: '70%', height: '200px' }}
            ></textarea>
            <div>
                <button onClick={clickHandler}>Submit</button>
            </div>
            <pre>{code}</pre>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
