# Markdown Editor

A sophisticated markdown editor with live preview functionality, built with React, TypeScript, and Tailwind CSS.

## Features

### ✨ Core Features
- **Real-time Preview** - See your markdown rendered instantly as you type
- **Split-pane Layout** - Edit and preview side by side
- **Dark Theme** - Easy on the eyes with a modern dark interface
- **Syntax Highlighting** - Beautiful code blocks with language-specific highlighting
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

### 📝 Markdown Support
- **Headers** (H1, H2, H3, etc.)
- **Text Formatting** (Bold, Italic, Underline)
- **Lists** (Bullet points, numbered lists, task lists)
- **Code Blocks** (Inline code and syntax-highlighted blocks)
- **Links and Images**
- **Tables**
- **Blockquotes**
- **Horizontal Rules**

### 🎨 UI Components
- **Document Tree** - Organize your documents in a sidebar
- **Toolbar** - Quick formatting tools for common markdown elements
- **Header** - Document title, date, and action buttons
- **Footer** - Additional information and controls

## Technology Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **react-markdown** - Markdown rendering
- **react-syntax-highlighter** - Code syntax highlighting
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd markedown
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

### Writing Markdown

The editor supports all standard markdown syntax:

```markdown
# Main Heading
## Sub Heading

**Bold text** and *italic text*

- Bullet points
- Another item

1. Numbered list
2. Second item

`inline code`

```javascript
// Code block
function hello() {
  console.log("Hello World!");
}
```

> This is a blockquote

[Link text](https://example.com)

![Image alt](image-url)
```

### View Modes

- **Edit Mode** - Full-screen editor
- **Preview Mode** - Full-screen preview
- **Split Mode** - Side-by-side editor and preview

### Document Management

- Use the sidebar to organize your documents
- Search through your documents using the search bar
- Create new documents with the plus button

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── editor-pane.tsx
│   ├── preview-pane.tsx
│   ├── header.tsx
│   ├── sidebar.tsx
│   ├── toolbar.tsx
│   └── ...
├── hooks/
│   └── use-mobile.ts # Responsive design hook
├── lib/
│   └── utils.ts      # Utility functions
├── app.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Customization

### Themes
The application uses a dark theme by default. You can customize the colors by modifying the CSS variables in `src/index.css`.

### Styling
All styling is done with Tailwind CSS. You can customize the design by modifying the Tailwind configuration.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [react-markdown](https://github.com/remarkjs/react-markdown) for markdown rendering
- [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) for code highlighting
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for styling
