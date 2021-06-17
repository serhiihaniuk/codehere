import React, { useState, useEffect } from 'react'
import CodeEditor from '../components/CodeEditor'
import Preview from '../components/Preview'
import build from '../bundler'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        height: 300,
    },
    cell: {
        borderColor: theme.palette.primary.main,
        border: '3px solid',
        flex: '1 1 100%',
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
    const classes = useStyles()
    const [inputJS, setInputJS] = useState('')
    const [inputHTML, setInputHTML] = useState('')
    const [inputCSS, setInputCSS] = useState('')
    const [code, setCode] = useState<Code>({ js: '', css: '', html: '' })

    const clickHandler = async () => {
        const outputJS = await build(inputJS)
        setCode({
            js: outputJS,
            css: inputCSS,
            html: inputHTML,
        })
    }

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
        <div className='Page-Wrapper'>
            <Grid
                className={classes.root}
                container
                direction='row'
                justify='center'
            >
                <Grid className={classes.cell} item xs={3}>
                    <CodeEditor
                        initialValue={'<! -- HTML -->'}
                        onChange={value => {
                            setInputHTML(value)
                        }}
                        language='html'
                    />
                </Grid>
                <Grid className={classes.cell} item xs={3}>
                    <CodeEditor
                        initialValue={'/*CSS*/'}
                        onChange={value => {
                            setInputCSS(value)
                        }}
                        language='css'
                    />
                </Grid>
                <Grid className={classes.cell} item xs={6}>
                    <CodeEditor
                        initialValue={'//JavaScript'}
                        onChange={value => {
                            setInputJS(value)
                        }}
                        language='javascript'
                    />
                </Grid>
            </Grid>
            <Grid className={classes.preview} container direction='column'>
                <Grid className={classes.preview} item xs={12}>
                    <Preview
                        codeJS={code.js}
                        codeCSS={code.css}
                        codeHTML={code.html}
                    />
                </Grid>
            </Grid>

            <div>
                <button onClick={clickHandler}>Submit</button>
            </div>
        </div>
    )
}

export default CodePage
