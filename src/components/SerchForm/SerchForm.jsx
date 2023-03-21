export default function SearchForm({ onSubmit }) {
    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(evt.currentTarget.query.value);
        // evt.currentTarget.reset()
}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="query" />
            <button type="submit">Search</button>
        </form>
    )
}