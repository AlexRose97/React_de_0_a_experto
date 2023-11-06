import PropTypes from 'prop-types'
import { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ with: 0, height: 0 })
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [quote])


  return (
    <>

      <blockquote
        className="blockquote text-end"
        style={{ display: "flex" }}
      >
        <p className="mb-1" ref={pRef}>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}



//propTypes
Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}