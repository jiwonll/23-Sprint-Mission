import Header from '../components/Header';
import BestSection from '../Routes/BestSection';
import ProdutList from '../Routes/ProductList';

export default function Market(){
    const [items, setItems] = useState([]);
    const [bestItems, setBestItems] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);


    return (
        <>
        <Header/>
        <main>
            <BestSection></BestSection>
            <ProdutList></ProdutList>

        </main>
        
        </>
    )
}