import axios from 'axios';
import React, { useEffect } from 'react'

const Picture = ({element}) => {
    useEffect(() => {
        axios.get(`https://la-mode.shop/api/images?ws_key=SH97SWJXX4NIXZ8ZELVFQ1EXZERWMT8N&output_format=JSON`).then(result =>
            console.log(result))
    }, []);
    console.log(element)
  return (
    <div></div>
  )
}

export default Picture