import React, { useState, useEffect } from 'react'

export default function CustomHookPage (props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('counter effect')
    document.title = `点击了${count}次`;
  }, [count]);

  return (
    <div>
      <h3>CustomHookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{useClock().toLocaleTimeString()}</p>
    </div>
  )
}


function useClock () {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log('date effect')
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer)
  }, [])
  return date;
}