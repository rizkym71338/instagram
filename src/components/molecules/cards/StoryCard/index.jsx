import React from "react";

const StoryCard = (props) => {
    return (
        <>
            <div className="flex flex-col justify-center space-y-1 items-center">
                <div className="flex items-center w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-orange-500 via-red-500 to-fuchsia-500">
                    <a href="#" className="w-12 h-12` mx-auto">
                        <img
                            src={props.img}
                            alt={props.alt}
                            className="rounded-full"
                        />
                    </a>
                </div>
                <div className="text-xs font-semibold text-center text-gray-700 dark:text-gray-200">
                    {props.username}
                </div>
            </div>
        </>
    )
};

StoryCard.defaultProps = {
    alt: "img",
    username: "Username"
}

export default StoryCard;