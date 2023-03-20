import React from 'react'

const TransActionComponent = ({transaction}) => {
  return (
   <section>
 {transaction.map((t)=> {
  return <div key={t.id}>{t.desc}</div>
 })}
   </section>
  )
}

export default TransActionComponent

