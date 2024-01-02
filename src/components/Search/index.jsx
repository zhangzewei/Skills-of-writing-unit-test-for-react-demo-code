import _debounce from 'lodash-es/debounce';
import Input from "../Input";

export default function Search({
    onChange,
    onSearch
}) {
    const handleClickSearch = () => {
        onSearch && onSearch()
    }
    return <div>
        <Input
            type='search'
            onChange={onChange ? _debounce(onChange, 50) : () => {}}
        />
        <button onClick={handleClickSearch}>Search</button>
    </div>
}