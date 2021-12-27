import React from "react";

const ProfileCard = (props) => {
    return (
        <>
            <div className="flex flex-row space-x-3 items-center justify-between">
                <div className="flex flex-row items-center space-x-3">
                    <a href="#">
                        <img
                            src={props.img}
                            alt={props.alt}
                            className="w-14 rounded-full border border-gray-300 dark:text-gray-100"
                        />
                    </a>
                    <div className="flex flex-col">
                        <a href="#" className="text-xs dark:text-gray-200 font-semibold">
                            {props.username}
                        </a>
                        <div className="text-xs text-gray-400 dark:text-gray-500">
                            {props.name}
                        </div>
                    </div>
                </div>
                <a href="#" className="text-blue-400 text-xs font-semibold">
                    Alihkan
                </a>
            </div>
        </>
    )
};

ProfileCard.defaultProps = {
    username: "Username",
    name: "Name",
    alt: "img"
}

export default ProfileCard;