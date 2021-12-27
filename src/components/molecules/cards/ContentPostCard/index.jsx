import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import { Komentar, LikePost, SharePost, Simpan } from "../../../../assets/svg";

const ContentPostCard = (props) => {
    return (
        <>
            <div className="flex flex-col space-y-3">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row space-x-3">
                        <a href="#">
                            {LikePost}
                        </a>
                        <a href="#">
                            {Komentar}
                        </a>
                        <a href="#">
                            {SharePost}
                        </a>
                    </div>
                    <a href="#">
                        {Simpan}
                    </a>
                </div>
                <a href="#" className="text-sm text-gray-700 dark:text-gray-200 font-bold">
                    {props.like}
                </a>
                <a href="#" className="text-xs text-gray-400">
                    {props.waktu}
                </a>
            </div>
        </>
    )
};

ContentPostCard.defaultProps = {
    like: "0 Suka",
    waktu: "0 DETIK YANG LALU"
}

export default ContentPostCard;