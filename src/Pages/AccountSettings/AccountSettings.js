import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {Container} from "reactstrap";
import {Helmet} from "react-helmet";
import {FormControl, Form, Button} from "react-bootstrap";
import "./AccountSettings.css"
import defaultProfileImage from "../Forms/components/dashboard/profileDefault.png"
import {useSelector} from "react-redux";
import LocalizedStrings from "react-localization";

let langStrings = new LocalizedStrings({
    en: {
        SettingText: "Account UserPasswordSettings",
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
        noUndoNotification: "You can't undo this option!"
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
        noUndoNotification: "Δεν μπορείτε να αναιρέσετε αυτήν την επιλογή"
    }
});

function AccountSettings() {
    const Title = "Account UserPasswordSettings | FunC";

    const photo = defaultProfileImage;
    const username = "Marinos Poiitis";
    const email = "poiitis@pspi.com";

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
                    <FormControl defaultValue={username} className="bg-dark text-white"/>
                    <Button className="mt-3" variant="secondary">{langStrings.changeText}</Button>
                </Form>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">{langStrings.changeEmail}</h2>
                    <FormControl defaultValue={email} className="bg-dark text-white"/>
                    <Button className="mt-3" variant="secondary">{langStrings.changeText}</Button>
                </Form>
                <Form className="w-75 mb-5">
                    <h2 className="text-white">{langStrings.changePassword}</h2>
                    <FormControl type="password" placeholder={langStrings.newPassword} className="bg-dark text-white mb-2"/>
                    <FormControl type="password" placeholder={langStrings.newPassword + langStrings.again} className="bg-dark text-white mb-2"/>
                    <FormControl type="password" placeholder={langStrings.oldPassword} className="bg-dark text-white"/>
                    <Button className="mt-3" variant="secondary">{langStrings.changeText}</Button>
                </Form>
            </Container>
            <Container>
                <Form className="w-75 mb-5">
                <h2 className="text-white">{langStrings.deleteAccountTitle}</h2>
                <Button variant="danger">
                    {langStrings.deleteText}
                </Button><h6 className="text-white">{langStrings.noUndoNotification}</h6>
                </Form>
            </Container>
            <Footer/>
        </>
    )


}

export default AccountSettings;