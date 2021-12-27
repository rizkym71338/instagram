import React from "react";
import { Emote } from "../../../../assets/svg";

const KomentarPostCard = () => {
    return (
        <>
            <div className="flex flex-row items-center space-x-3 border-t border-gray-200 dark:border-gray-600 p-3">
                <a href="#">
                    {Emote}
                </a>
                <div className="flex flex-row space-x-3 w-full">
                    <input
                        type="text"
                        placeholder="Tambahkan Komentar ..."
                        className="w-full h-5 bg-transparent dark:text-gray-200 border-none outline-none"
                    />
                    <a href="#" className="text-blue-500 font-semibold">
                        Kirim
                    </a>
                </div>
            </div>
        </>
    )
};

export default KomentarPostCard;