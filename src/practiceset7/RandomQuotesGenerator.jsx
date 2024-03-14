import React, { useEffect, useState } from "react";

import { fakeFetch } from "../api/fakeFetch21";

const RandomQuotesGenerator = () => {
  const [quotes, setQuotes] = useState();

  const fetchQuotes = async () => {
    const res = await fakeFetch();
    setQuotes(res);
    // console.log(res);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);
  return quotes ? (
    <div>
      <p>
        <b>"{quotes.content}</b>
      </p>
      <p>-{quotes.author}</p>
      <button onClick={fetchQuotes}>New Quote</button>
    </div>
  ) : (
    "Loading Quotes... "
  );
};

export default RandomQuotesGenerator;
