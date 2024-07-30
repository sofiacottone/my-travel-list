import Item from "./Item";

export default function ItemsList({ items }) {
    return (
        <>
            <div className="items-list">
                <ul>
                    {items.map((item) => (<Item item={item} key={item.id} />))}
                </ul>
            </div>
        </>
    )
}