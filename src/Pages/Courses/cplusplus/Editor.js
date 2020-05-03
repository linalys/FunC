import React, {useEffect, useState} from "react";
import AceEditor from "react-ace";
import {changeCode, changeLoggedIn} from "../../../actions";
import {useDispatch} from "react-redux";
import ContentEditable from "react-contenteditable";

const blueWords = ['void ', 'int ', 'char ', 'bool '];
const greenWords = ['#include ', 'string ', 'vector', 'set '];



function Editor(props) {
    const [source, setSource] = useState(props.code);
    const [html, setHTML] = useState(' ');

    const sanitize = () => {
        //setSource(apply(source));
        setHTML(apply(source));

    };

    useEffect(() => {
        setHTML((source));
        updateCode(source);
    });

    const handleChange = evt => {
        setSource(evt.target.value);
        setHTML(evt.target.value);
    };


    const dispatch = useDispatch();
    const updateCode = (props) => {
        props = props.replace(/&gt;/g, ">");
        props = props.replace(/&lt;/g, "<");
        props = props.replace(/<div>/g, "\n");
        props = props.replace(/<br>/g, " ");
        props = props.replace(/<\/div>/g, " ");
        props = props.replace(/&nbsp;/g, " ");
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

    function onChange(newValue) {
        console.log("change", newValue);
    }
    return (
        <ContentEditable
            className="editorArea"
            tagName="pre"
            id="a3"
            spellCheck={false}
            html={html} // innerHTML of the editable div
            onChange={handleChange} // handle innerHTML change
            onBlur={sanitize}
        />
    )


}

export default Editor;