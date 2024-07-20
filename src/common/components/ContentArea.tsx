const ContentAreaWidth = 1080;
const ContentAreaPadding = 20;

// import { observer } from "mobx-react";

type ContentAreaProps = {
    children: React.ReactNode;
    maximizeHeight?: boolean;
    fullWidth?: boolean;
};

function ContentArea({
    children,
    maximizeHeight = false,
    fullWidth = false,
}: ContentAreaProps) {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                height: maximizeHeight ? "100%" : "auto",
            }}
        >
            <div
                style={{
                    flexBasis: `${
                        fullWidth
                            ? "100%"
                            : `${(ContentAreaWidth + ContentAreaPadding * 2)}px`
                    }`,
                    flexGrow: 0,
                    flexShrink: 1,
                    minWidth: "0px",
                    position: "relative",
                    marginLeft: fullWidth ? "0px" : `${ContentAreaPadding}px`,
                    marginRight: fullWidth ? "0px" : `${ContentAreaPadding}px`,
                    boxSizing: "border-box",
                    height: maximizeHeight ? "100%" : "auto",
                    transition: "all 0.5s ease",
                }}
            >
                {children}
            </div>
        </div>
    );
}

ContentArea.defaultProps = {
    maximizeHeight: false,
    fullWidth: false,
};

export default ContentArea;
