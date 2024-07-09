import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "@css/components/SearchBox.css";

import { useState, FormEvent } from "react";

export default function SearchBox({
    value,
    onSubmit,
    placeholder = "",
}: {
    value: string;
    onSubmit: (value: string) => void;
    placeholder?: string;
}) {
    const [searchText, setSearchText] = useState<string>(value);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(searchText);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row bg-zinc-800 rounded-2xl p-4 min-w-[22rem] h-14">
            <button
                className="mr-4"
                type="submit"
                // onClick=
                aria-label="Search Button"
            >
                <FontAwesomeIcon
                    className=" w-6 h-6 text-white"
                    icon={faMagnifyingGlass}
                />
            </button>
            <input
                className=" text-white outline-none bg-transparent pb-1 w-full"
                type="text"
                id="searchBox"
                value={searchText}
                name="q"
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={placeholder}
            />
        </form>
    );
}

SearchBox.defaultProps = {
    // 요기에 기본 props를 적어주세여
    placeholder: "",
};
