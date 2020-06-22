import React, {useState} from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {Container} from "reactstrap";
import {Helmet} from "react-helmet";
import {FormControl, Form, Button} from "react-bootstrap";
import "./AccountSettings.css"
import defaultProfileImage from "../Profile/profileDefault.png";
import {useDispatch, useSelector} from "react-redux";
import LocalizedStrings from "react-localization";
import axios from "axios";
import {logoutUser, setCurrentUser} from "../../actions/authActions";
import setAuthToken from "../../utils/setAuthToken";

let langStrings = new LocalizedStrings({
    en: {
        SettingText: "Account Settings",
        changePhotoTitle: "Change Profile Photo",
        changeText: "Change",
        changeUsernameTitle: "Change Username",
        changeEmail: "Change Email",
        changePassword: "Change Password",
        newPassword: "New password",
        again: " again",
        oldPassword: "Old password",
        deleteAccountTitle: "Delete Your Account",
        deleteText: "Delete",
        noUndoNotification: "You can't undo this option!",
        passwordError: "New password doesn't match with password confirmation",
        passwordSuccess: "Password changed"
    },
    gr: {
        SettingText: "Ρυθμίσεις Λογαριασμού",
        changePhotoTitle: "Αλλαγή Εικόνας Προφίλ",
        changeText: "Αλλαγή",
        changeUsernameTitle: "Αλλαγή Username",
        changeEmail: "Αλλαγή Email",
        changePassword: "Αλλαγή Κωδικού",
        newPassword: "Νέος κωδικός",
        again: " ξανά",
        oldPassword: "Παλιός κωδικός",
        deleteAccountTitle: "Διαγραφή Λογαριασμού",
        deleteText: "Διαγραφή",
        noUndoNotification: "Δεν μπορείτε να αναιρέσετε αυτήν την επιλογή",
        passwordError: "Ο καινούριος κωδικός δεν συμπίπτει με τον κωδικό επιβεβαίωσης",
        passwordSuccess: "Ο κωδικός άλλαξε επιτυχώς"
    }
});

function AccountSettings() {
    const Title = "Account Settings | FunC";
    const loggedIn = useSelector(state => state.auth);
    if (!loggedIn.isAuthenticated) {
        window.location.href = "/signIn";
    }

    const [data, setData] = useState({
        username: loggedIn.user.name,
        email: loggedIn.user.email,
        oldPassword: "",
        newPassword: "",
        newPassword2: ""
    });

    const photo = defaultProfileImage;
    const dispatch = useDispatch();

    function onChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function changeUsername() {
        axios.patch("/api/usermodel/patch/" + loggedIn.user.id, {name: data.username})
            .then(() => {
                const newUser = {...loggedIn.user, name: data.username};
                dispatch(setCurrentUser(newUser));
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    function changeEmail() {
        axios.patch("/api/usermodel/patch/" + loggedIn.user.id, {email: data.email})
            .then(() => {
                const newUser = {...loggedIn.user, email: data.email};
                dispatch(setCurrentUser(newUser));
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    function changePassword() {
        if(data.newPassword !== data.newPassword2){
            alert(langStrings.passwordError);
            return;
        }
        axios.patch("/api/usermodel/patch/" + loggedIn.user.id, {password: data.newPassword, oldPassword: data.oldPassword})
            .then(() => {
                alert(langStrings.passwordSuccess);
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    function deleteUser() {
        const decision = window.confirm(langStrings.noUndoNotification);
        if (decision) {
            axios.delete("/api/usermodel/delete/" + loggedIn.user.id).then(() => {
                dispatch(logoutUser())
            }).catch(
                err => console.log(err)
            )
        }
    }

    langStrings.setLanguage(useSelector(state => state.language));
    return (
        <>
            <Helmet><title>{Title}</title></Helmet>
            <Header/>
            <br/>
            <h1 className="text-center text-white">{langStrings.SettingText}</h1>
            <br/>
            <Container>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">{langStrings.changePhotoTitle}</h2>
                    <img
                        src={photo}
                        className="profileImage"
                        alt="Profile Photo"
                    />
                    <Form.File id="formcheck-api-regular" fluid={false} className="text-white">
                        <Form.File.Input/>
                    </Form.File>
                    <Button className="mt-3" variant="secondary">{langStrings.changeText}</Button>
                </Form>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">{langStrings.changeUsernameTitle}</h2>
                    <FormControl name="username" onChange={onChange} defaultValue={data.username}
                                 className="bg-dark text-white"/>
                    <Button className="mt-3" onClick={changeUsername} variant="secondary">{langStrings.changeText}</Button>
                </Form>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">{langStrings.changeEmail}</h2>
                    <FormControl name="email" onChange={onChange} defaultValue={data.email}
                                 className="bg-dark text-white"/>
                    <Button className="mt-3" onClick={changeEmail} variant="secondary">{langStrings.changeText}</Button>
                </Form>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">{langStrings.changePassword}</h2>
                    <FormControl name="newPassword" type="password" onChange={onChange}
                                 placeholder={langStrings.newPassword} className="bg-dark text-white mb-2"/>
                    <FormControl name="newPassword2" type="password" onChange={onChange}
                                 placeholder={langStrings.newPassword + langStrings.again}
                                 className="bg-dark text-white mb-2"/>
                    <FormControl name="oldPassword" type="password" onChange={onChange}
                                 placeholder={langStrings.oldPassword} className="bg-dark text-white"/>
                    <Button className="mt-3" onClick={changePassword} variant="secondary">{langStrings.changeText}</Button>
                </Form>
            </Container>
            <Container>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">{langStrings.deleteAccountTitle}</h2>
                    <Button variant="danger" onClick={deleteUser}>
                        {langStrings.deleteText}
                    </Button><h6 className="text-white">{langStrings.noUndoNotification}</h6>
                </Form>
            </Container>
            <Footer/>
        </>
    )


}

export default AccountSettings;