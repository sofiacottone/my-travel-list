export default function AddItems() {
    return (
        <>
            <form className="add-items" >
                <h3>Add items to your trip's list</h3>
                <select>
                    {Array.from({ length: 20 }, (_, i) => i + 1)
                        .map((num) => (
                            <option value={num} key={num}>
                                {num}
                            </option>
                        ))}
                </select>
                <input type='text' placeholder="Add a new item..." />
                <button>Add</button>
            </form>
        </>
    )
}