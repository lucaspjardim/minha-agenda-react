import React from 'react'

interface HighlightProps {
  text: string
  highlight: string
}

const Highlight: React.FC<HighlightProps> = ({ text, highlight }) => {
  if (!highlight) {
    return <span>{text}</span>
  }
  const regex = new RegExp(`(${highlight})`, 'gi')
  const parts = text.split(regex)

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        )
      )}
    </span>
  )
}

export default Highlight
