import React from 'react'
import New from '../Components/New/New'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'

import Newcollection from '../Components/Newcollection/Newcollection'

import Newletter from '../Components/Newletter/Newletter'

function Shop() {
  return (
    <div>
      <New/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Newletter/>
    </div>
  )
}

export default Shop