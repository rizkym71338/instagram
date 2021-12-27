import React from "react";

const ContactChatCard = (props) => {
    return (
        <>
            <div className="flex flex-row space-x-3 items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex flex-row items-center space-x-3">
                    <a href="#">
                        <img
                            src={props.img}
                            alt={props.alt}
                            className="w-14 rounded-full border border-gray-300 dark:text-gray-100"
                        />
                    </a>
                    <div className="flex flex-col">
                        <a href="#" className="text-sm dark:text-gray-200 font-semibold">
                            {props.username}
                        </a>
                        <div className="text-sm text-gray-400 dark:text-gray-500">
                            {props.history}
                        </div>
                    </div>
                </div>
                <div className="text-gray-400 text-sm font-semibold">
                    0 ming
                </div>
            </div>
        </>
    )
};

ContactChatCard.defaultProps = {
    username: "Username",
    history: "Histori Percakapan",
    alt: "img"
}

export default ContactChatCard;