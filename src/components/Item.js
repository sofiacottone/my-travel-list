export default function Item({ item }) {
    return (
        <>
            <li>
                <input type="checkbox" />
                <span>{item.quantity} {item.description} </span>
                <button>❌</button>
            </li>
        </>
    );
}
