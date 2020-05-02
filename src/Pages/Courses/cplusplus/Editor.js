import React, {useEffect, useState} from "react";
import ContentEditable from "react-contenteditable";
import {changeCode, changeLoggedIn} from "../../../actions";
import {useDispatch} from "react-redux";

const blueWords = ['void ', 'int ', 'char ', 'bool '];
const greenWords = ['#include ', 'string ', 'vector', 'set '];








function Editor(props) {
    const [source, setSource] = useState(props.code);
    const [html, setHTML] = useState(' ');
    const sanitize = () => {
        setHTML(apply(source));
        //updateCode();
    };
    const handleChange = evt => {
        setSource(evt.target.value);
        setHTML(evt.target.value);
    };
    useEffect(() => {
        setHTML(apply(source));
    });

    const dispatch = useDispatch();
    const updateCode = (props) => {
        props = props.replace(/&gt;/g, ">");
        props = props.replace(/&lt;/g, "<");
        props = props.replace(/<div>/g, "");
        props = props.replace(/<br>/g, "");
        props = props.replace(/<\/div>/g, "");
        props = props.replace(/&nbsp/g, " ");
        console.log(props);
        dispatch(changeCode(props))
    };

    const apply = (code) => {
        let text = code;
        text = "" + text;
        text = text.replace(/<span class="blue-text">/g, "");
        text = text.replace(/<span class="greenText">/g, "");
        text = text.replace(/<\/span>/g, "");

        updateCode(text);

        blueWords.map(word => {
            let re = new RegExp(word, 'g');
            text = text.replace(re, '<span class="blue-text">' + word + '</span>')
        });

        greenWords.map(word => {
            let re = new RegExp(word, 'g');
            text = text.replace(re, '<span class="greenText">' + word + '</span>')
        });
        return text;
    };

    return (
        <ContentEditable
            className="editorArea"
            tagName="pre"
            spellCheck={false}
            html={html} // innerHTML of the editable div
            onChange={handleChange} // handle innerHTML change
            onBlur={sanitize}
        />
    )


}

export default Editor;