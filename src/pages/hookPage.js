import React, { useState, useEffect } from 'react'

export default function HookPage (props) {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    console.log('count effect')
    document.title = `点击了${count}次`
  }, [count])

  useEffect(() => {
    console.log('date effect')
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{date.toLocaleDateString()}</p>
    </div>
  )
}