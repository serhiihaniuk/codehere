import React, { useRef, useEffect } from 'react'

interface PreviewProps {
    code?: string
}

const html = `
<html>
  <head></head>
  <body>
    <div id="root"></div>
    <script>
      window.addEventListener('message', (event) => {
        eval(event.data);
      }, false);
    </script>
  </body>
</html>
`

const Preview: React.FC<PreviewProps> = ({ code }) => {
    const iframe = useRef<any>()
    useEffect(() => {
        iframe.current.srcdoc = html
        setTimeout(() => {
            iframe.current.contentWindow.postMessage(code, '*')
        }, 25)
    }, [code])

    return (
        <iframe title='q' ref={iframe} sandbox='allow-scripts' srcDoc={html} />
    )
}

export default Preview
