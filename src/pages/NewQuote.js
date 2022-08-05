import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHTTP from '../hooks/use-http';
import { addQuote} from '../lib/api';


const NewQuote = () => {
    const {sendRequest, status}=useHTTP(addQuote);
    const history = useHistory();

    useEffect(()=>{
        if (status==='completed'){
            history.push('/quotes');
        }
    },[status,history])
    const addquoteHandler = (quoteData) => {
        sendRequest(quoteData)
    }
    return <QuoteForm isLoading={status==='pending'} onAddQuote= {addquoteHandler}/>
};

export default NewQuote;