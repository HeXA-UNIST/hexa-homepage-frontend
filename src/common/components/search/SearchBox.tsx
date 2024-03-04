import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "@css/components/SearchBox.css";

function SearchBox({
    value,
    onChange,
    placeholder = "",
}: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}) {
    return (
        <div className=" bg-zinc-500 rounded-2xl ">
            <div className="search-box__prefix">
                <FontAwesomeIcon
                    className=" w-6 h-6 text-white"
                    icon={faMagnifyingGlass}
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
	// 요기에 기본 props를 적어주세여
    placeholder: ""
}

export default SearchBox;
