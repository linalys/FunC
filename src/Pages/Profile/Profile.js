//Library Imports
import React, {useState} from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Component Imports
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

//Image Imports
import cIcon from "./../Home/CIcon.png";

//CSS Imports
import "./Profile.css"

let langStrings = new LocalizedStrings({
    en: {},
    gr: {}
});

function Profile() {
    langStrings.setLanguage(useSelector(state => state.language));

    const [name, setName] = useState("George");
    const [profileImage, setProfileImage] = useState(cIcon);
    const [membership, setMembership] = useState("Free Member");

    return (
        <div>
            <Header/>
            <div className="profileInfoArea">
                <img
                    src={profileImage} /*Take image from database*/
                    alt="Profile picture"/>
                <h2>
                    {name}
                    <div>
                        <h3>{membership}</h3>
                    </div>
                </h2>
            </div>
            <div className="coursesArea">
                <h2>Keep on going...</h2>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile;