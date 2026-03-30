import { FaGithub } from "react-icons/fa";
import { ImFacebook2, ImLinkedin } from "react-icons/im";


const Footer = () => {
    return (
        <div>
            <div className=" bg-gradient-to-r from-pink-500 via-purple-500 to-gray-900 text-base-content lg:p-10 p-6">

                <nav className="text-center">
                    <h6 className=" text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 font-semibold">SK Pathim Hossain</h6>
                    <div className="flex lg:my-[20px] my-[20px] lg:ml-[620px] ml-[50px]">

                        <div className=" text-black mr-[20px]">
                            <a href="https://github.com"><FaGithub className="w-[50px] h-[50px]" /></a>
                        </div>
                        <div className="mr-[20px] text-indigo-600 ">
                            <a href="https://www.facebook.com/share/1ApJdoR9pj/"><ImFacebook2 className="w-[50px] h-[50px] rounded-full" /></a>
                        </div>
                        <div className=" text-blue-600">
                            <a href="https://www.linkedin.com/"><ImLinkedin className="w-[50px] rounded-full h-[50px]" /></a>
                        </div>


                    </div>
                    <p className="text-rose-500 lg:text-xl text-base">All right reserved by SK Pathim Hossain</p>
                </nav>


            </div>


        </div>

    );
};

export default Footer;