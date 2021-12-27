import React from "react";
import ProfileCard from "../../components/molecules/cards/ProfileCard";
import Navbar from "../../components/organisms/Navbar";

import AlphaDev from "../../assets/img/alpha-dev.jpg";
import Saran from "../../components/organisms/Saran";
import Story from "../../components/organisms/Story";
import Post from "../../components/organisms/Post";
import { ActiveHome } from "../../assets/svg";


const Main = () => {
    return (
        <>
            <div className="sticky top-0 z-50 w-full">
                <Navbar home={ActiveHome} />
            </div>
            <div className="relative z-40 min-h-screen bg-gray-100 dark:bg-gray-800 transition ease-in-out duration-500 bg-opacity-50">
                <div className="flex flex-col lg:flex-row max-w-5xl min-h-screen mx-auto md:px-10">
                    <div className="w-full lg:w-2/3">
                        <div className="my-5">
                            <Story />
                        </div>
                        <div className="mx-5 lg:mx-0 lg:mr-5 lg:mb-20">
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                            <Post
                                img={AlphaDev}
                                post={AlphaDev}
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 sticky lg:h-screen top-20 overflow-auto px-5 lg:px-0">
                        <div className="my-5">
                            <ProfileCard
                                img={AlphaDev}
                                username="alphadev.official"
                                name="Alpha Dev Official"
                            />
                        </div>
                        <div className="mb-5">
                            <Saran />
                        </div>
                        <div className="text-xs text-gray-300 dark:text-gray-500">
                            Tentang Bantuan Pers API Pekerjaan Privasi Ketentuan Lokasi Akun Teratas Tagar Bahasa
                            Bahasa Indonesia
                        </div>
                        <div className="text-xs text-gray-300 dark:text-gray-500 my-5">
                            &copy; 2021 INSTAGRAM FROM META
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Main;