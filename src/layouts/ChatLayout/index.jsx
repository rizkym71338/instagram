import React from "react";
import { ArrowBottom, GantiAkun } from "../../assets/svg";

import AlphaDev from "../../assets/img/alpha-dev.jpg"
import ContactChatCard from "../../components/molecules/cards/ContactChatCard";
import ChatButton from "../../components/atoms/buttons/ChatButton";

const ChatLayout = (props) => {

    const LogoChat = <svg className="w-1/2 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="0.5" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="0.5"></polygon></svg>

    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-800 transition ease-in-out duration-500 bg-opacity-50">
                <div className="flex flex-col lg:flex-row h-screen max-w-5xl mx-auto md:px-10 pt-16">
                    <div className="w-full lg:w-2/5 flex flex-col bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded rounded-r-none my-5 transition ease-in-out duration-500">
                        <div className="flex justify-between border-b border-gray-300 dark:border-gray-600 p-5 transition ease-in-out duration-500">
                            <div className="flex space-x-3 w-full justify-center font-semibold dark:text-gray-200">
                                <a href="#">
                                    {props.username}
                                </a>
                                <a href="#" className="rotate-180">
                                    {ArrowBottom}
                                </a>
                            </div>
                            <a href="#">
                                {GantiAkun}
                            </a>
                        </div>
                        <div className="flex flex-col h-full py-3 lg:overflow-y-scroll">
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                            <div>
                                <ContactChatCard img={AlphaDev} />
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-3/5 bg-white dark:bg-gray-700 border border-l-0 border-gray-300 dark:border-gray-600 rounded rounded-l-none my-5 transition ease-in-out duration-500">
                        <div className="flex flex-col justify-center items-center w-full h-full">
                            <div className="flex justify-center">
                                {LogoChat}
                            </div>
                            <div>
                                <span className="block text-center text-2xl dark:text-gray-300">
                                    Pesan Anda
                                </span>
                                <span className="block text-center text-sm text-gray-500">
                                    Kirim foto dan pesan pribadi ke teman atau grup.
                                </span>
                                <div className="mt-5">
                                    <ChatButton
                                        content="Kirim Pesan"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

ChatLayout.defaultProps = {
    username: "Username"
}

export default ChatLayout;