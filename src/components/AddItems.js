import { useState } from "react";

export default function AddItems({ onAddItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();

        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now()
        }
        console.log(newItem);

        onAddItems(newItem);

        setDescription('');
        setQuantity(1);

    }
    return (
        <>
            <form className="add-items" onSubmit={handleSubmit}>
                <h3>Add items to your trip's list</h3>
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {Array.from({ length: 20 }, (_, i) => i + 1)
                        .map((num) => (
                            <option value={num} key={num}>
                                {num}
                            </option>
                        ))}
                </select>
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add a new item..." />
                <button>Add</button>
            </form>
        </>
    )
}