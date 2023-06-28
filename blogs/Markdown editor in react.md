## Hi Guys! Learn how to add markdown editor to your website

I have a new markdown editor for writing my blogs. **It has the following features**

1. Ordered Lists
2. Bullets
3. Code
4. Typography
5. Table
6. Various Text Styles
7. HTML Support
8. Links
9. Images and much more.

### To make something like it for yourself in react, Follow these steps:

Install the markdown editor react component

`npm install react-markdown-editor-lite --save` also a markdown parser `npm install markdown-it --save`

**Now add this to your react component**

```tsx
// import react, react-markdown-editor-lite, and a markdown parser you like
import React from 'react';
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}
export default props => {
  return (
    <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
  );
};
```

**For using with Next JS**

```tsx
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

export default function() {
  return <MdEditor style={{ height: '500px' }} renderHTML={/* Render function */} />;
}
```

[Click Here to Learn more](https://www.npmjs.com/package/react-markdown-editor-lite) [https://www.npmjs.com/package/react-markdown-editor-lite](https://www.npmjs.com/package/react-markdown-editor-lite)

### Why should you use a markdown editor

1. It is lighter than common WYSIWYG editors.
2. Based on Markdown language
3. Fast Blog editing without much thinking
4. HTML Support
5. Automatic linkify the links (make them clickable)

#### Thanks For Reading

#### - Himanshu Jangid : Vedik Dev
