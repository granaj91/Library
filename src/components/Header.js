import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text="Add Book"
                color={showAdd ? 'red': 'green'}
                text={showAdd ? 'Close': 'Add Book'} 
                onClick={onAdd}
            />
        </header>
    )
}

export default Header
