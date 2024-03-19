interface IToggleItem{
    text: string;
    iconImg: number;
    activeColor: string;
}
function ToggleItem<T>({item}: {item: IToggleItem;}) {
    return (
        <div className=" rounded-lg">
            {/* TODO:  */}
        </div>
    );
}
function ToggleItems<T>({
    items,
    onToggleChanged,
}: {
    items: IToggleItem[];
    onToggleChanged: (value: T[]) => void;
}) {
    return (
        <div className="flex flex-row">
            {items.map((item) => (
                <ToggleItem key={item.text} item={item} />
            ))}
        </div>
    );
}
