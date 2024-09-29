import './styles.css';
export default function Search() {
    return (
        <form className="shw-search">
            <input className='shw-form-control' type="text" placeholder="Search..." name="Pesquisar" />
            <button className='shw-search-btn' type='submit'>Buscar</button>
        </form>
    )
}