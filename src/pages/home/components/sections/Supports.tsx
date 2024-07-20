import "@css/home/Supports.css";
import ContentFrame from "../content";

function Supports() {
    return (
        <div className="supports-area">
            <ContentFrame
                title="지원"
                subTitle="HeXA에는 다양한 곳으로부터 지원받고 있어요."
                // icon="💎"
            >
                <div className="flex flex-warp flex-row gap-5">
                    <a href="https://www.mobis.co.kr/kr/index.do" aria-label="link" className="w-36 h-36 overflow-hidden rounded-3xl flex justify-center items-center bg-white">
                        <img className="p-2 w-full h-auto " src="/images/supports/Hyundai_Mobis_Logo.png" alt="" />
                    </a>
                    <a href="https://savehome.kr/about" aria-label="link" className="w-36 h-36 overflow-hidden rounded-3xl flex justify-center items-center bg-white">
                        <img className="p-2 w-full h-auto " src="/images/supports/jipjikyeo.png" alt="" />
                    </a>
                    {/* <a className="w-36 h-36">
                        <img className="p-2 w-full h-auto " src="/images/sample1.png" alt="" />
                    </a>
                    <a className="w-36 h-36">
                        <img className="p-2 w-full h-auto " src="/images/sample1.png" alt="" />
                    </a>
                    <a className="w-36 h-36">
                        <img className="p-2 w-full h-auto " src="/images/sample1.png" alt="" />
                    </a>
                    <a className="w-36 h-36">
                        <img className="p-2 w-full h-auto " src="/images/sample1.png" alt="" />
                    </a> */}
                </div>
            </ContentFrame>
        </div>
    );
}

export default Supports;
