import React, { useRef, useEffect } from 'react'

interface PreviewProps {
    codeJS?: string
    codeHTML?: string
    codeCSS?: string
}

const Preview: React.FC<PreviewProps> = ({ codeJS, codeCSS, codeHTML }) => {
    const html = `
<html>
  <head>
    <style>
    .animated {
      transform: rotate(45deg);
    }
    body {
      color: rgba(0, 0, 0, 0.87)
      ;
    }
    ${codeCSS}
    </style>
  </head>
  <body>
    <div id="root">${codeHTML}</div>
    <script>
      window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch (err) {
            document.getElementById('root').innerHTML = err
          }
      }, false);
    </script>
  </body>
</html>
`
    const iframe = useRef<any>()
    useEffect(() => {
        iframe.current.srcdoc = html
        setTimeout(() => {
            iframe.current.contentWindow.postMessage(codeJS, '*')
        }, 25)
    }, [codeJS, codeHTML, codeCSS, html])

    return (
        <iframe
            style={{
                width: '100%',
                flexGrow: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                minHeight: 500,
            }}
            title="q"
            ref={iframe}
            sandbox="allow-scripts"
            srcDoc={html}
        />
    )
}

export default Preview
