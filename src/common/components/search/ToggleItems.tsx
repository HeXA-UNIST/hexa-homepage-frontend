// import { observer } from "mobx-react";
import { useEffect, useState } from "react";

export interface IToggleItem {
    text: string;
    // iconImg: number;
    activeColor: string;
    deactiveColor?: string;
}

enum ToggleState {
    Normal,
    Active,
    Deactive,
}
function ToggleItem<T>({
    id,
    item,
    preToggleState,
    hasDeactive,
    onStateChanged,
}: {
    id: T;
    item: IToggleItem;
    preToggleState: ToggleState;
    hasDeactive: boolean;
    onStateChanged: (value: T, state: ToggleState) => void;
}) {
    const [toggleState, setToggleState] = useState<ToggleState>(preToggleState);
    const [backgroundColor, setbackgroundColor] = useState<string>("#27272a");

    const setColor = (): string => {
        switch (toggleState) {
            case ToggleState.Active:
                return item.activeColor;
            case ToggleState.Deactive:
                return item.deactiveColor ?? "#27272a";
            case ToggleState.Normal:
            default:
                return "#27272a";
        }
    };

    useEffect(() => {
                onStateChanged(id, toggleState);
        setbackgroundColor(setColor());
    }, [toggleState]);

    return (
        <button
            className="rounded-3xl text-white px-5 py-3 whitespace-nowrap"
            onClick={() => {
                if (toggleState === ToggleState.Normal) {
                    setToggleState(ToggleState.Active);
                } else if (toggleState === ToggleState.Deactive) {
                    setToggleState(ToggleState.Normal);
                } else if (hasDeactive) {
                    setToggleState(ToggleState.Deactive);
                } else {
                    setToggleState(ToggleState.Normal);
                }
                
            }}
            type="button"
            style={{ backgroundColor }}
        >
            <div className="mb-[2px]">{item.text}</div>
        </button>
    );
}
function ToggleItems<T>({
    items,
    activeItems,
    deactiveItems,
    onActiveToggleChanged,
    onDeactiveToggleChanged,
    hasDeactive,
}: {
    items: { id: T; data: IToggleItem }[];
    activeItems: T[];
    deactiveItems: T[];
    onActiveToggleChanged: (value: T[]) => void;
    onDeactiveToggleChanged: (value: T[]) => void;
    hasDeactive: boolean;
}) {
    // TODO: 귀찮아서 else if문으로 그냥 덕지덕지 붙임. 나중에 리팩할때는 가독성있게 해주시길..
    const onToggleItemStateChanged = (id: T, state: ToggleState) => {
        if (state === ToggleState.Normal) {
            if (activeItems.includes(id)) {
                onActiveToggleChanged(activeItems.filter((x) => x !== id));
            } else if (deactiveItems.includes(id)) {
                onDeactiveToggleChanged(deactiveItems.filter((x) => x !== id));
            }
        } else if (state === ToggleState.Active) {
            if (!activeItems.includes(id)) {
                onActiveToggleChanged(activeItems.concat(id));
            }
        } else if (state === ToggleState.Deactive) {
            if (activeItems.includes(id)) {
                onActiveToggleChanged(activeItems.filter((x) => x !== id));
            }
            if (!deactiveItems.includes(id)) {
                onDeactiveToggleChanged(deactiveItems.concat(id));
            }
        }
    };

    const PreToggleStateFromId = (id: T): ToggleState => {
        if(activeItems.includes(id)){
            return ToggleState.Active;
        }
        if(deactiveItems.includes(id)){
            return ToggleState.Deactive;
        }
        return ToggleState.Normal;
    }
    return (
        <div className="flex flex-row gap-3">
            {items.map((item) => (
                <ToggleItem
                    key={item.data.text}
                    id={item.id}
                    item={item.data}
                    preToggleState={PreToggleStateFromId(item.id)}
                    hasDeactive={hasDeactive}
                    onStateChanged={onToggleItemStateChanged}
                />
            ))}
        </div>
    );
}

export default ToggleItems;