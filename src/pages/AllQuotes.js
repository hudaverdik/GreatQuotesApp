import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: "q1", author: "Hako", text: "React çalış React!" },
  { id: "q2", author: "Hakole", text: "Çalış biraz daha." },
  { id: "q3", author: "Hakito", text: "Bugün daha da çalış 🤸🏼" },
];

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
  );
};

export default AllQuotes;
