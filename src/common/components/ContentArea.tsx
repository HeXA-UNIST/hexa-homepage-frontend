const ContentAreaWidth = 1080;
const ContentAreaPadding = 20;

type ContentAreaProps = {
  children: React.ReactNode;
  maximizeHeight?: boolean;
};

function ContentArea({
  children,
  maximizeHeight = false
}: ContentAreaProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: maximizeHeight ? "100%" : "auto"
      }}
    >
      <div
        style={{
          flexBasis: `${ContentAreaWidth + ContentAreaPadding * 2}px`,
          flexGrow: 0,
          flexShrink: 1,
          minWidth: "0px",
          position: "relative",
          marginLeft: `${ContentAreaPadding}px`,
          marginRight: `${ContentAreaPadding}px`,
          boxSizing: "border-box",
          height: maximizeHeight ? "100%" : "auto"
        }}
      >
        {children}
      </div>
    </div>
  );
}

ContentArea.defaultProps = {
  maximizeHeight: false
};

export default ContentArea;
