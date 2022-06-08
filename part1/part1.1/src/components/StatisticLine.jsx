import React from 'react'

function StatisticLine({ text, value}) {
  return (
      <tr key={text}>
   <td>{text}</td>
   <td>{value}</td>
   </tr>
  )
}

export default StatisticLine