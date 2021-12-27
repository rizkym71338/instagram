import React from "react";
import { Bulan, Matahari } from "../../assets/svg";
import DarkMode from "../../components/atoms/DarkMode";

const LoginLayout = () => {

    const [colorTheme, setTheme] = DarkMode();

    return (
        <>
            <div className="h-screen bg-gray-100 dark:bg-gray-800 bg-opacity-50 transition ease-in-out duration-500 py-10">
                <div className="flex flex-col space-y-10 max-w-5xl mx-auto md:px-10">
                    <div className="flex flex-col space-y-5 justify-center items-center">
                        <div class="w-3/4 sm:w-1/2 px-5 md:px-10 py-5 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 transition ease-in-out duration-500">
                            <form action="/" className="text-center w-full">
                                <div onClick={() => setTheme(colorTheme)} className="flex justify-end duration-500 text-gray-700">
                                    {colorTheme === "light" ? Bulan : Matahari}
                                </div>
                                <div className="text-4xl font-bold mb-10 text-gray-700 dark:text-gray-200">
                                    Instagram
                                </div>
                                <div class="form-group mb-3">
                                    <input
                                        type="text"
                                        class="w-full px-2 py-3 text-xs text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded focus:border-gray-300 transition ease-in-out duration-500"
                                        placeholder="Nomor telepon, nama pengguna, atau email"
                                    />
                                </div>
                                <div class="form-group mb-5">
                                    <input
                                        type="password"
                                        class="w-full px-2 py-3 text-xs text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded focus:border-gray-300 transition ease-in-out duration-500"
                                        placeholder="Kata Sandi"
                                    />
                                </div>
                                {/* <div class="flex justify-between items-center mb-6">
                                    <div class="form-group form-check">
                                        <input type="checkbox"
                                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck2" />
                                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
                                    </div>
                                    <a href="#!"
                                        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                                        password?</a>
                                </div> */}
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-500
                                    text-xs font-bold text-white dark:text-gray-200 rounded"
                                >
                                    Login
                                </button>
                                <div className="my-5 text-gray-400 dark:text-gray-200 font-semibold">
                                    ATAU
                                </div>
                                {/* <p class="text-gray-800 mt-6 text-center">Not a member? <a href="#!"
                                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
                                </p> */}
                                <a href="#" className="block mb-5 font-bold text-blue-500">
                                    <span>Masuk dengan Facebook</span>
                                </a>
                                <a href="#" className="text-xs text-gray-600 dark:text-gray-200">
                                    Lupa kata sandi?
                                </a>
                            </form>
                        </div>
                        <div className="w-3/4 sm:w-1/2 px-10 py-5 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 transition ease-in-out duration-500">
                            <div className="flex space-x-2 justify-center">
                                <span className="text-gray-800 text-xs dark:text-gray-200">Tidak punya akun?</span>
                                <a href="#" className="text-blue-500 text-xs font-bold">Buat Akun</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginLayout;
