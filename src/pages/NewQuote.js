import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';


const NewQuote = () => {
    const history = useHistory();
    const addquoteHandler = QuoteData => {
        console.log(QuoteData);
        history.push('/quotes')
    }
    return (
        <QuoteForm onAddQuote= {addquoteHandler}/>
    )
};

export default NewQuote;