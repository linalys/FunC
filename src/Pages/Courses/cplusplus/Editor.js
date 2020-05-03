import React, {useEffect, useState} from "react";
import AceEditor from "react-ace";
import {changeCode} from "../../../actions";
import {useDispatch} from "react-redux";
import ContentEditable from "react-contenteditable";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-min-noconflict/theme-monokai";
import { connect } from 'react-redux';


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            initial: this.props.code
        };

        this.onChange = this.onChange.bind(this);
        this.refName = React.createRef();
    }


    onChange(newValue) {
        this.setState({code: this.refName.current.editor.getValue()});
        console.log(this.state.code);
        const { dispatch } = this.props;
        dispatch(changeCode(this.state.code));
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.code !== nextState.code) {
            return false;
        } else {
            return true;
        }
    }


    render() {
        return (
            <>
                <AceEditor
                    id="MyAceEditor"
                    ref={this.refName}
                    onChange={this.onChange}
                    value={this.state.initial}
                    mode="csharp"
                    theme="monokai"
                    className="inside-Editor"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                />
            </>
        )
    }
}

export default connect()(Editor);
