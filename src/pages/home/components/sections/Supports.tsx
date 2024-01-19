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
                <div className="flex flex-warp flex-row justify-between">
                    <div className="w-36 h-36">
                        <img className="rounded-3xl w-36 h-36" src="images/sample1.png" alt="" />
                    </div>
                    <div className="w-36 h-36">
                        <img className="rounded-3xl w-36 h-36" src="images/sample1.png" alt="" />
                    </div>
                    <div className="w-36 h-36">
                        <img className="rounded-3xl w-36 h-36" src="images/sample1.png" alt="" />
                    </div>
                    <div className="w-36 h-36">
                        <img className="rounded-3xl w-36 h-36" src="images/sample1.png" alt="" />
                    </div>
                    <div className="w-36 h-36">
                        <img className="rounded-3xl w-36 h-36" src="images/sample1.png" alt="" />
                    </div>
                    <div className="w-36 h-36">
                        <img className="rounded-3xl w-36 h-36" src="images/sample1.png" alt="" />
                    </div>
                </div>
            </ContentFrame>
        </div>
    );
}

export default Supports;
