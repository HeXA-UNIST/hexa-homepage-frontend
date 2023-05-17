import SearchIcon from "@mui/icons-material/Search";

import "@css/components/SearchBox.css";

function SearchBox({
  value,
  onChange,
  placeholder = "",
  style,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="search-box" style={style}>
      <div className="search-box__prefix">
        <SearchIcon
          fontSize="medium"
          sx={{
            color: "#555555",
          }}
        />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

SearchBox.defaultProps = {
  placeholder: "",
  style: {},
};

export default SearchBox;
