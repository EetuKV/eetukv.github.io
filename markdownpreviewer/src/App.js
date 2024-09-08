import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Preview from "./preview";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editor: "# mo\n## joo\n### joo joo\n> Totta\n- niin\n- ja näin\n\n[ylen sivuille](www.yle.fi)\n``print(\"mo\")``\n```\nalert(\"joo\");\n```\nthis is **inportant**\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"};
      this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
      
      this.setState({editor: e.target.value});
//      console.log(this.state.editor);

    }

    render() {
      return (
        <div className="container-fluid">
          <h2>Editor</h2>
 <textarea id="editor" onChange={this.handleChange} value={this.state.editor}/>
          <h2>Preview</h2>
            <Preview content={this.state.editor}/>
          
          
        </div>
      );
    }
  }

  
export default App;
