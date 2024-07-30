import Item from "./Item";

export default function ItemsList({ items, onDeleteItems, onToggleItems, onClearList }) {
    return (
        <>
            <div className="items-list">
                <ul>
                    {items.map((item) => (<Item item={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} key={item.id} />))}
                </ul>

            </div>
            <div className="actions">
                <button onClick={onClearList}>Clear list</button>
            </div>
        </>
    )
}