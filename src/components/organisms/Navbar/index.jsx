import React, { useEffect, useState } from "react";
import Search from "../../molecules/Search";
import DarkMode from "../../atoms/DarkMode";

import AlphaDev from "../../../assets/img/alpha-dev.jpg"
import { Direct, Home, Like, Bulan, NewPost, People, Matahari } from "../../../assets/svg";

const Navbar = (props) => {

    const [colorTheme, setTheme] = DarkMode();

    return (
        <>
            <div className="bg-white dark:bg-gray-700 transition ease-in-out duration-500 border-b-2 dark:border-gray-600 py-3">
                <div className="max-w-5xl mx-auto px-2 md:px-10 flex flex-row justify-between space-x-3 md:grid md:grid-cols-3">
                    <div className="flex items-center">
                        <a href="/" className="text-xs lg:text-2xl font-bold text-gray-700 dark:text-gray-200">
                            Instagram
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <Search />
                    </div>
                    <div className="flex flex-row justify-end space-x-5 items-center">
                        <a href="/">
                            {props.home}
                        </a>
                        <a href="/chat">
                            {props.chat}
                        </a>
                        <a href="#">
                            {props.newpost}
                        </a>
                        <a href="#">
                            {props.people}
                        </a>
                        <a href="#">
                            {props.like}
                        </a>
                        <a href="/login">
                            <img src={AlphaDev} alt="alpha-dev"
                                className="w-6 rounded-full border border-gray-300"
                            />
                        </a>
                        <div onClick={() => setTheme(colorTheme)} className="duration-500 text-gray-700">
                            {colorTheme === "light" ? Bulan : Matahari}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

Navbar.defaultProps = {
    home: Home,
    chat: Direct,
    people: People,
    newpost: NewPost,
    like: Like,
}

export default Navbar;