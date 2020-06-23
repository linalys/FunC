import React from "react";
import {

    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import {MDBIcon} from "mdbreact";
import LocalizedStrings from "react-localization";

let langStrings = new LocalizedStrings({
    en:{
        contact:"Contact Us",
        name : "Name:",
        email:"Email:",
        sub:"Subject:",
        message:"Message:",
        send:"Send"
    },

    gr:{
        contact:"Επικοινωνήστε μαζί μας",
        name : "Όνομα:",
        email:"Email:",
        sub:"Θέμα:",
        message:"Μήνυμα:",
        send:"Αποστολή"
    }

});
export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/maypbqkr"
                method="POST"
            >
                <FormGroup>
                    <Label for="exampleText" size="lg">
                        <p className="text">{langStrings.name}</p>
                    </Label>
                    <br />
                    <input type="text" name="text" id="exampleText" className="bg-dark text-white"/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText" size="lg">
                        <p className="text">{langStrings.email}</p>
                    </Label>
                    <br />
                    <input type="text" name="text" id="exampleText" className="bg-dark text-white"/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText" size="lg">
                        <p className="text">{langStrings.sub}</p>
                    </Label>
                    <br />

                    <input type="text" name="text" id="exampleText" className="bg-dark text-white"/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText" size="lg">
                        <p className="text">{langStrings.message}
                            <MDBIcon far icon="envelope" className="ml-2"/></p>
                    </Label>
                    <br />

                    <Input type="textarea" name="text" id="exampleText2" style={{height: 300}}
                           className="bg-dark text-white"/>
                </FormGroup>
                <FormGroup>
                    <div>
                        <Button size="lg">
                            <p className="text" >{langStrings.send}
                                <MDBIcon far icon="paper-plane" className="ml-2"/>
                            </p>
                        </Button>
                    </div>
                </FormGroup>
                {status === "SUCCESS" && <p>Submitted. You will receive a reply soon!</p> }
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}