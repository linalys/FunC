import React from "react";
import AceEditor from "react-ace";
import {changeCode} from "../../actions";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-min-noconflict/theme-monokai";
import {connect} from 'react-redux';


class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            language: this.props.language
        };

        this.onChange = this.onChange.bind(this);
        this.refName = React.createRef();
    }


    onChange() {
        this.setState({code: this.refName.current.editor.getValue()});
        const {dispatch} = this.props;
        dispatch(changeCode(this.state.code));
    }


    shouldComponentUpdate(nextProps, nextState, nextContent) {
        return this.state.code === nextState.code;
    }


    render() {
        return (
            <>
                {this.props.code !== '' &&
                <AceEditor
                    id="MyAceEditor"
                    ref={this.refName}
                    onChange={this.onChange}
                    value={this.props.code}
                    mode={this.props.language}
                    theme="monokai"
                    className="inside-Editor"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                />
                }
            </>
        )
    }
}

export default connect()(Editor);
