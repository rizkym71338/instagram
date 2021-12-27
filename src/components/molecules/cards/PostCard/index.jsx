import React from "react";
import { More } from "../../../../assets/svg";

const PostCard = (props) => {
    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row space-x-3 items-center">
                    <div className="flex items-center w-11 h-11 mx-auto rounded-full bg-gradient-to-tr from-orange-500 via-red-500 to-fuchsia-500">
                        <a href="#" className="w-10 h-10` mx-auto">
                            <img
                                src={props.img}
                                alt={props.alt}
                                className="rounded-full"
                            />
                        </a>
                    </div>
                    <a href="#" className="text-sm text-gray-700 dark:text-gray-200 font-bold">
                        {props.username}
                    </a>
                </div>
                <a href="#">
                    {More}
                </a>
            </div>
        </>
    )
};

export default PostCard;