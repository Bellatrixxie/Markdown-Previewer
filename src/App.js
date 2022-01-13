import { marked } from 'marked';
import React from 'react';
import './App.css';

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer()

const placeholder = `# This is a heading
## This is a sub-heading
This is a [link](https://lauratozerart.com)
> This is a block quote

\`<p>Here's some inline code</p>\`

\`\`\`
//Multi-line code:
function multiply() {
  const array = [1, 2, 3, 4, 5]
  return array.map(num => num * 2)
}
\`\`\`
Here's a list:
1. Sushi
2. Pizza
3. Quesadilla

**Text in bold**

![image](http://www.fillmurray.com/200/300)
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: placeholder
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
        <div>
          <div id="editor-div">
            <h1>Markdown Previewer</h1>
            <textarea id="editor" value={this.state.text} onChange={this.handleChange}></textarea>
          </div>
          <p id="preview" dangerouslySetInnerHTML={{
            __html: marked(this.state.text, {renderer: renderer})
          }}></p>
        </div>
      )
  }
}

export default App;
