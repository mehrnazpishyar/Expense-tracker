import React, { useEffect, useState } from "react";

const TransActionComponent = ({ transaction }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transaction);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transaction);
      return;
    }
    const filtered = transaction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transaction]);

  if (!transaction.length) return <h3 style={{marginTop:"20px"}}>add some transaction</h3>

  return (
    <section>
      <input className="search" type="text" value={searchItem} onChange={changeHandler} placeholder="search..."/>
      {filteredTnx.length
        ? filteredTnx.map((t) => {
            return (
              <div
                className="transaction"
                key={t.id}
                style={{ borderRight: t.type === "expense" && "4px solid red" }}
              >
                <span>{t.desc}</span>
                <span>$ {t.amount}</span>
              </div>
            );
          })
        : "no item matchs!"}
    </section>
  );
};

export default TransActionComponent;
