import React from 'react'
import {NumberSpan, Wrap} from "./SEE.styles.ts";

const SEEHeader = () => {



  const number = "015-8504-8117"

  return (
    <Wrap>
      <NumberSpan>{number}</NumberSpan>
    </Wrap>
  )
}

export default SEEHeader