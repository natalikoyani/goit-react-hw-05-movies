export const SearchForm = ({ onSubmit, value }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="input" defaultValue={value} required></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}