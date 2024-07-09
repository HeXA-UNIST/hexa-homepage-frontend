import ContentArea from "@components/ContentArea";

function ContentFrame({
    title,
    subTitle,
    // icon,
    children,
}: {
    title: string;
    subTitle: string;
    // icon: string;
    children: React.ReactNode;
}) {
    return (
        <div className="home-content mb-32">
            <ContentArea>
                <div className="font-bold left-0 top-0 text-left mb-10">
                    {/* <div className="text-6xl">{icon}</div> */}
                    <div className="text-5xl text-white mt-5">{title}</div>
                    <div className="text-2xl text-gray-400 mt-4">{subTitle}</div>
                </div>
                <div>{children}</div>
            </ContentArea>
        </div>
    );
}

export default ContentFrame;
