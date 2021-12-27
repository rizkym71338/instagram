import React from "react";
import { ActiveDirect } from "../../assets/svg";
import Navbar from "../../components/organisms/Navbar";
import ChatLayout from "../../layouts/ChatLayout";

const Chat = () => {
    return (
        <>
            <div>
                <div className="fixed top-0 z-50 w-full">
                    <Navbar chat={ActiveDirect} />
                </div>
                <div>
                    <ChatLayout username="alphadev.official" />
                </div>
            </div>
        </>
    )
};

export default Chat;