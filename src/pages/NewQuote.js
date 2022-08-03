import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHTTP from '../hooks/use-http'


const NewQuote = () => {
    useHTTP()
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