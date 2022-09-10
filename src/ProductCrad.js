import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Picture from './Picture';

const ProductCrad = ({ element }) => {
    const [article, setArticle] = useState({});
    useEffect(() => {
        axios.get(`https://la-mode.shop/api/products/${element.id}?ws_key=SH97SWJXX4NIXZ8ZELVFQ1EXZERWMT8N&output_format=JSON`).then(result =>
            setArticle(result.data.product))
    }, [element]);
    // console.log(article)
    return (
        <div>
            <h1>{article.meta_title}</h1>
            <h2>{article.price}</h2>
            <p>{article.meta_description}</p>
            <Picture element={article?.associations?.images[0]} />
            <button>Details</button>

        </div>
    )
}

export default ProductCrad