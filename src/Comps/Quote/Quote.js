import React, { useState,useEffect } from "react";
import axios from "axios"
 const Quote = () => {
  const [quote, setQuote] = useState({ title: "", author: "" });

  const fetchQuote = async () => {
    const URL = "https://api.quotable.io/random";
    try {
      const res = await axios.get(URL);
      const data = JSON.parse(JSON.stringify(res.data));
      console.log(data);
      setQuote({ title: data.content, author: data.author });
    } catch (err) {
      setQuote({
        title:
          "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration",
        author: "Nikola Tesla",
      });
      console.log(err);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div className="Quote flex-center flex-col">
      <span className="quote-title">"{quote.title}"</span>
      <span className="quote-author">- {quote.author}</span>
    </div>
  );
};

export { Quote };
