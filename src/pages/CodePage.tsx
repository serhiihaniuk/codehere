import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'

import CodeEditor from '../components/CodeEditor'
import Preview from '../components/Preview'
import build from '../bundler'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { htmlDefault, cssDefault, reactDefault } from '../utils/defaultCode'
import { PreviewContext } from '../Context/Context'

const useStyles = makeStyles((theme) => ({
    cell: {
        borderColor: theme.palette.primary.main,
        border: '3px solid',
        flex: '1 1 100%',
        minHeight: 350,
    },
    preview: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
}))

interface Code {
    js: string
    css: string
    html: string
}

const CodePage: React.FC = () => {
    const { preview } = useContext(PreviewContext)
    const defaultCode: Code = {
        js: '//JavaScript',
        css: cssDefault,
        html: '<! -- HTML -->',
    }
    const location = useLocation()
    if (location.pathname === '/vanillajs') {
        defaultCode.html = htmlDefault
    } else {
        defaultCode.js = reactDefault
    }
    const classes = useStyles()

    const [inputHTML, setInputHTML] = useState(defaultCode.html)
    const [inputCSS, setInputCSS] = useState(defaultCode.css)
    const [inputJS, setInputJS] = useState(defaultCode.js)
    const [code, setCode] = useState<Code>(defaultCode)

    useEffect(() => {
        const timer = setTimeout(async () => {
            const outputJS = await build(inputJS)
            setCode({
                js: outputJS,
                css: inputCSS,
                html: inputHTML,
            })
        }, 750)

        return () => {
            clearTimeout(timer)
        }
    }, [inputJS, inputCSS, inputHTML])

    return (
        <div className="Page-Wrapper">
            <Grid
                style={preview ? {} : { flexGrow: 1 }}
                container
                direction="row"
                justify="center"
            >
                {location.pathname !== '/react' && (
                    <Grid className={classes.cell} item xs={12} md={3}>
                        <CodeEditor
                            height={preview}
                            initialValue={defaultCode.html}
                            onChange={(value) => {
                                setInputHTML(value)
                            }}
                            language="html"
                        />
                    </Grid>
                )}
                <Grid className={classes.cell} item xs={12} md={3}>
                    <CodeEditor
                        height={preview}
                        initialValue={defaultCode.css}
                        onChange={(value) => {
                            setInputCSS(value)
                        }}
                        language="css"
                    />
                </Grid>
                <Grid className={classes.cell} item xs={12} md={6}>
                    <CodeEditor
                        height={preview}
                        initialValue={defaultCode.js}
                        onChange={(value) => {
                            setInputJS(value)
                        }}
                        language="javascript"
                    />
                </Grid>
            </Grid>
            {preview && (
                <Grid className={classes.preview} container direction="column">
                    <Grid className={classes.preview} item xs={12}>
                        <Preview
                            codeJS={code.js}
                            codeCSS={code.css}
                            codeHTML={code.html}
                        />
                    </Grid>
                </Grid>
            )}
        </div>
    )
}

export default CodePage
