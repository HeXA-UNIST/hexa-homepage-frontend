import ContentArea from "@components/ContentArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
    return (
        <div className="footer-area bg-neutral-800">
            <ContentArea>
                <div className="text-left mt-20">
                    {/* <img
                        className="mb-6"
                        src="images/hexaLogoTypo1.svg"
                        alt=""
                    /> */}
                    <div className="mb-10 flex flex-row items-center">
                        <img
                            className="w-8 mr-2"
                            src="images/icon/hexaLogo.svg"
                            alt=""
                        />
                        <div className="mb-1 text-white font-semibold text-3xl">
                            HeXA
                        </div>
                    </div>

                    <div className=" text-sm text-white mb-8">
                        <div>
                            (44919) 울산광역시 울주군 언양읍 유니스트길 50,
                            203동(학생회관) 415호
                        </div>
                        <div className="mb-5">hexa.unist@gmail.com</div>
                        <div>Developed in HeXA, Licensed under MIT License</div>
                    </div>
                    <div className="flex flex-row mb-10 w-24 justify-between">
                        <a href="https://www.instagram.com/hexa.unist/" aria-label="instagram">
                            <FontAwesomeIcon
                                className=" w-6 h-6 text-white"
                                icon={faInstagram}
                            />
                        </a>
                        <a href="https://github.com/HeXA-UNIST" aria-label="github">
                            <FontAwesomeIcon
                                className=" w-6 h-6 text-white"
                                icon={faGithub}
                            />
                        </a>
                        <a href="hexa.unist@gmail.com" aria-label="mail">
                            <FontAwesomeIcon
                                className=" w-6 h-6 text-white"
                                icon={faEnvelope}
                            />
                        </a>
                    </div>
                </div>
            </ContentArea>
        </div>
    );
}

export default Footer;
