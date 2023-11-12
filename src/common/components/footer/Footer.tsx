import ContentArea from "@components/ContentArea";

function Footer() {
    return (
        <div className="footer-area bg-neutral-800">
            <ContentArea>
                <div className="text-left mt-28">
                    <img
                        className="mb-6"
                        src="images/hexaLogoTypo1.svg"
                        alt=""
                    />
                    <img
                        className="mb-10"
                        src="images/hexaLogoTypo2.svg"
                        alt=""
                    />
                    <div className="text-white mb-8">
                        <div>
                            (44919) 울산광역시 울주군 언양읍 유니스트길 50,
                            203동(학생회관) 415호
                        </div>
                        <div className="mb-5">hexa.unist@gmail.com</div>
                        <div>Developed in HeXA, Licensed under MIT License</div>
                    </div>
                    <div className="flex flex-row mb-10 w-64 justify-between">
                        <div className="flex justify-center content-center w-14 h-14 bg-zinc-700 rounded-xl">
                            <img className="w-10" src="images/icon/facebookLogo.svg" alt="" />
                        </div>
                        <div className="flex justify-center content-center w-14 h-14 bg-zinc-700 rounded-xl">
                            <img className="w-10" src="images/icon/instagramLogo.svg" alt="" />
                        </div>
                        <div className="flex justify-center content-center w-14 h-14 bg-zinc-700 rounded-xl">
                            <img className="w-10" src="images/icon/mailLogo.svg" alt="" />
                        </div>
                        <div className="flex justify-center content-center w-14 h-14 bg-zinc-700 rounded-xl">
                            <img className="w-10" src="images/icon/githubLogo.svg" alt="" />
                        </div>
                    </div>
                </div>
            </ContentArea>
        </div>
    );
}

export default Footer;
