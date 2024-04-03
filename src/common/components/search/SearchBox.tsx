import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "@css/components/SearchBox.css";

import { useState } from "react";

export default function SearchBox({
    value,
    onSubmit,
    placeholder = ""
}: {
    value: string;
    onSubmit: (value: string) => void;
    placeholder?: string;
}) {

    const [searchText, setSearchText] = useState<string>("");

    return (
        <div className="flex flex-row bg-zinc-800 rounded-2xl p-4 min-w-[22rem] h-14">
            <div className="mr-4">
                <FontAwesomeIcon
                    className=" w-6 h-6 text-white"
                    icon={faMagnifyingGlass}
                />
            </div>
            <input
                className=" text-white outline-none bg-transparent pb-1 w-full"
                type="text"
                value={value}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={placeholder}
            />
            <button type="submit" onClick={() => onSubmit(searchText)} aria-label="Search Button"/>
        </div>
    );
}

SearchBox.defaultProps = {
	// 요기에 기본 props를 적어주세여
    placeholder: ""
}

