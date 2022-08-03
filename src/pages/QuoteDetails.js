import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  { id: "q1", author: "Hako", text: "React çalış React!" },
  { id: "q2", author: "Hakole", text: "Çalış biraz daha." },
  { id: "q3", author: "Hakito", text: "Bugün daha da çalış 🤸🏼" },
];

const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id===params.quoteId)
  
  if(!quote) {
    return <p>No quote found!</p>
  }
  
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
