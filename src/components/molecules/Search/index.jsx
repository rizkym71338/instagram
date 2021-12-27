import React from "react";

const Search = () => {
    return (
        <>
            <div className="pr-6">
                <input
                    type="search"
                    className="form control block w-full px-3 py-1 text-base font-normal text-gray-600 border border-solid border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-800 bg-opacity-50 focus:text-gray-700 focus:border-gray-300 transition ease-in-out duration-300"
                    placeholder="Cari"
                    id="search"

                />
            </div>
        </>
    )
};

export default Search;