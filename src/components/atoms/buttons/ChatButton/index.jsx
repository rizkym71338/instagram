import React from "react";

const ChatButton = (props) => {
    return (
        <>
            <div class="flex space-x-2 justify-center">
                <button
                    type="button"
                    className="px-3 py-1.5 rounded text-sm font-semibold bg-blue-500 text-white dark:text-gray-200"
                >
                    {props.content}
                </button>
            </div>
        </>
    )
};

ChatButton.defaultProps = {
    content: "Text Here"
}

export default ChatButton;