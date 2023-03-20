import React from "react";

const TransActionComponent = ({ transaction }) => {
  return (
    <section>
      {transaction.length &&
        transaction.map((t) => {
          return (
            <div className="transaction" key={t.id} style={{borderRight: t.type === "expense" && "4px solid red"}}>
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
            </div>
          );
        })}
    </section>
  );
};

export default TransActionComponent;
