export default function Item({ item, onDeleteItems, onToggleItems }) {
    return (
        <>
            <li>
                <label style={item.packed ? { textDecoration: 'line-through' } : {}}>
                    <input type="checkbox" name="packed" value={item.packed} onChange={() => onToggleItems(item.id)} />
                    {item.quantity} {item.description}
                </label>
                <button onClick={() => onDeleteItems(item.id)}>❌</button>
            </li>
        </>
    );
}