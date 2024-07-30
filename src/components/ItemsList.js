import Item from "./Item";

export default function ItemsList({ items, onDeleteItems, onToggleItems }) {
    return (
        <>
            <div className="items-list">
                <ul>
                    {items.map((item) => (<Item item={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} key={item.id} />))}
                </ul>
            </div>
        </>
    )
}