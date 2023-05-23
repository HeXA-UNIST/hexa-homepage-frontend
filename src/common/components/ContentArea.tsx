const ContentAreaWidth = 1080;
const ContentAreaPadding = 20;

function ContentArea({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
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
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ContentArea;