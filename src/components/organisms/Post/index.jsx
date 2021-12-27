import React from "react";
import ContentPostCard from "../../molecules/cards/ContentPostCard";
import KomentarPostCard from "../../molecules/cards/KomentarPostCard";
import PostCard from "../../molecules/cards/PostCard";

const Post = (props) => {
    return (
        <>
            <div className="flex flex-col mt-8 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-sm transition ease-in-out duration-500">
                <div className="p-3">
                    <PostCard
                        img={props.img}
                        alt={props.alt}
                        username={props.username}
                    />
                </div>
                <div>
                    <img
                        src={props.post}
                        className="w-full"
                    />
                </div>
                <div className="p-3">
                    <ContentPostCard />
                </div>
                <div>
                    <KomentarPostCard />
                </div>
            </div>
        </>
    )
};

Post.defaultProps = {
    username: "Username",
}

export default Post;