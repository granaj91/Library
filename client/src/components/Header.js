import Button from "./Button"
import SortBy from "./SortBy"

const Header = ({ title, onAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <SortBy />
            <Button text="Add Book"
                color="#029666"
                onClick={onAdd}
            />
        </header>
    )
}

export default Header
