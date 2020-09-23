import React, { useState, useEffect } from 'react';

export function FunctionComponent (props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div><p>{date.toLocaleTimeString()}</p></div>
  )
}
