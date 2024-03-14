import { useEffect, useState } from "react";

import { observer } from "mobx-react";
import useStores from "@hooks/storeHooks";

import profileimg from "@img/profile_img.jpg";

import ContentArea from "@components/ContentArea";
import { Link } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";

// import "@css/app/Header.css";

const useScrollPosition = () => {
    //   const [scrollPosition, setScrollPosition] = useState<boolean>('100%');
    const [scrolling, setScrolling] = useState<boolean>(false);

    useEffect(() => {
        const updatePosition = () => {
            if (window.scrollY > 0 && !scrolling) {
                setScrolling(true);
            } else if (window.scrollY === 0 && scrolling) {
                setScrolling(false);
            }
        };
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, [scrolling]);

    return scrolling;
};

function Header(/* { transparent = false }: { transparent?: boolean } */) {
    const scrolling = useScrollPosition();
    //   const isMobile = useMediaQuery({
    //     query: "(max-width: 700px)",
    //   });

    const { isLoggedIn } = useStores().loginStore;

    //   const height = scrollPosition === 0 ? "74px" : "114px";

    return (
        <div className="header-area">
            <div className="fixed top-0 left-0 w-full z-50">
                <ContentArea fullWidth={scrolling}>
                    <div
                        className={`w-full ${
                            scrolling ? "" : "mt-8 rounded-xl"
                        }`}
                        style={{
                            // position: scrolling ? "fixed" : "sticky",
                            // left: scrolling ? "0" : "auto",
                            backgroundColor: scrolling
                                ? "rgb(38 38 38 / var(--tw-bg-opacity))"
                                : "var(--component-transparent-color)",
                            transition: "all 0.5s ease",
                        }}
                    >
                        <div className="flex flex-row items-center h-16 p-4 rounded-lg font-medium text-base text-gray-200">
                            <Link
                                className="flex flex-row items-center"
                                to="/"
                            >
                                <div className="ml-1 mr-3">
                                    <img
                                        src="images/icon/hexaLogo.svg"
                                        alt=""
                                    />
                                </div>
                                <div className=" text-xl font-bold mb-[3px]">HeXA</div>
                            </Link>
                            <div className="flex flex-grow-[1] ml-10">
                                <div className="flex justify-center items-center w-32">
                                    <Link
                                        className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                        to="/activity/projects"
                                    >
                                        <div className="mb-[3px]">프로젝트</div>
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center w-32">
                                    <Link
                                        className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                        to="/activity/services"
                                    >
                                        <div className="mb-[3px]">서비스</div>
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center w-32">
                                    <Link
                                        className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                        to="/activity/news"
                                    >
                                        <div className="mb-[3px]">소식</div>
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center w-32">
                                    <Link
                                        className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                        to="/activity/seminars"
                                    >
                                        <div className="mb-[3px]">세미나</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="ml-auto max-w-2xl flex justify-evenly flex-grow-0">
                                {isLoggedIn ? (
                                    [
                                        <div className="flex justify-center items-center w-32">
                                            <Link
                                                className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                                to="test"
                                            >
                                                <div className="mb-[3px]">
                                                    마이페이지
                                                </div>
                                            </Link>
                                        </div>,
                                        <div>
                                            <div className="box">
                                                <img
                                                    className="profile"
                                                    src={profileimg}
                                                    alt="face"
                                                />
                                            </div>
                                        </div>,
                                    ]
                                ) : (
                                    <div className="flex justify-center items-center w-32">
                                        <Link
                                            className="max-w-full pl-8 pr-8 rounded-lg transition bg-zinc-900 bg-opacity-0 hover:bg-opacity-70 p-2"
                                            to="/login"
                                        >
                                            <div className="mb-[3px]">
                                                로그인
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </ContentArea>
            </div>
        </div>
    );
}
/*
Header.defaultProps = {
  transparent: false,
};
*/
export default observer(Header);
