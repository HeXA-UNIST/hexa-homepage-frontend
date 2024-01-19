import { useEffect, useState } from "react";

import { observer } from "mobx-react";
import useStores from "@hooks/storeHooks";

import profileimg from "@img/profile_img.jpg";

import ContentArea from "@components/ContentArea";
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
        <div
            className="header-area"
        >
            <ContentArea fullWidth={!scrolling}>
                <div
                    className="mt-10 mb-10 w-full"
                    style={{
                        position: scrolling ? "fixed" : "sticky",
                        backgroundColor: scrolling
                            ? "var(--component-transparent-color)"
                            : undefined,
                        transition: "all 0.3s ease-in",
                    }}
                >
                    <div
                        className="flex flex-row items-center p-6 bg-neutral-800 rounded-xl font-bold text-xl text-gray-200"
                        style={{
                            height: "74px",
                            borderRadius: "20px",
                        }}
                    >
                        <a className="flex flex-row items-center" href="home">
                            <div className="mr-4">
                                <img src="images/icon/hexaLogo.svg" alt="" />
                            </div>
                            <div className="">HeXA</div>
                        </a>
                        <div className="ml-auto max-w-2xl flex justify-evenly">
                            <div className="flex justify-center items-center w-32">
                                <a
                                    className="max-w-full pl-3 pr-3 rounded-xl transition hover:bg-neutral-700 p-2"
                                    href="/introduction"
                                >
                                    동아리 소개
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-32">
                                <a
                                    className="max-w-full pl-6 pr-6 rounded-xl transition hover:bg-neutral-700 p-2"
                                    href="/introduction"
                                >
                                    뉴스
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-32">
                                <a
                                    className="max-w-full pl-6 pr-6 rounded-xl transition hover:bg-neutral-700 p-2"
                                    href="/introduction"
                                >
                                    서비스
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-32">
                                <a
                                    className="max-w-full pl-6 pr-6 rounded-xl transition hover:bg-neutral-700 p-2"
                                    href="/introduction"
                                >
                                    활동
                                </a>
                            </div>
                            {isLoggedIn ? (
                                [
                                    <div className="flex justify-center items-center w-32">
                                        <a
                                            className="max-w-full pl-6 pr-6 rounded-xl transition hover:bg-neutral-700 p-2"
                                            href="test"
                                        >
                                            마이페이지
                                        </a>
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
                                    <a
                                        className="max-w-full pl-6 pr-6 rounded-xl transition hover:bg-neutral-700 p-2"
                                        href="login"
                                    >
                                        로그인
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ContentArea>
        </div>
    );
}
/*
Header.defaultProps = {
  transparent: false,
};
*/
export default observer(Header);
