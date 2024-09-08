import { marked } from "marked";
import React from "react";
import purify from "dompurify";

const Preview = (props) => (<div id="preview" dangerouslySetInnerHTML = {{__html: purify.sanitize(marked.parse(props.content, {breaks: true, gfm: true}))}}/>);


export default Preview;