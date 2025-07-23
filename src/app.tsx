"use client"

import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;


export default function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <div className="flex justify-end p-4 border-b border-gray-800">
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-73px)]">
        {/* Editor Column */}
        <div className="w-1/2 border-r border-gray-800 flex flex-col">
          {/* Editor Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-lg font-medium">Editor Pane</h2>
            <div className="flex items-center gap-2">
            </div>
          </div>

          {/* Editor */}
          <div className="flex-1 p-4">
            <textarea
              id="editor"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full h-full bg-transparent text-gray-300 font-mono text-sm resize-none outline-none leading-relaxed"
              placeholder="Start typing your markdown..."
            // spellCheck={false}
            />
          </div>
        </div>

        {/* Preview Column */}
        <div className="w-1/2 flex flex-col">
          {/* Preview Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-lg font-medium">Preview Pane</h2>
          </div>

          {/* Preview */}
          <div className="flex-1 p-6 overflow-auto">
            <div className="text-amber-400 prose prose-invert max-w-none" id="preview">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
              // components={{
              //   code({ className, children, ...props }) {
              //     const match = /language-(\w+)/.exec(className || "")
              //     return match ? (
              //       <SyntaxHighlighter
              //         style={vscDarkPlus}
              //         language={match[1]}
              //         PreTag="div"
              //         className="rounded-md"
              //         {...props}
              //       >
              //         {String(children).replace(/\n$/, "")}
              //       </SyntaxHighlighter>
              //     ) : (
              //       <code className="bg-gray-800 text-yellow-300 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
              //         {children}
              //       </code>
              //     )
              //   }
              //   ,
              //   h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 text-white">{children}</h1>,
              //   h2: ({ children }) => <h2 className="text-xl font-semibold mb-3 text-white">{children}</h2>,
              //   p: ({ children }) => <p className="mb-4 text-gray-300 leading-relaxed">{children}</p>,
              // }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
