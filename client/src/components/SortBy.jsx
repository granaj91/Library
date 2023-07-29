import { useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const SortBy = () => {
    const { setSortBy } = useContext(GlobalContext)

    return (
        <div>
            <label htmlFor="sortby">Sort by:</label>

            <select className="sortby" onChange={(e) => setSortBy(e.target.value)}>
                <option value="author" defaultValue={true}>Author</option>
                <option value="title">Title</option>
            </select>
            
        </div>
    )
}

export default SortBy
