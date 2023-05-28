import React,{useState, Fragment, useEffect} from 'react';
import { useParams } from 'react-router-dom'

const FakeProduct = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    console.log(productId);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setProduct(data);
            })
            .catch((err) => {
                if (err && err.message) {
                    setError(err.message);
                }
            })
    }, [productId]);

    return (
        <Fragment>
            {   
                product ? 
                    <figure>
                        <img src={product.image} alt={product.title} />
                        <figcaption>
                            <h6>Price: {product.price}</h6>
                            <h6>Catagory: {product.category}</h6>
                            <p style={{fontSize:'1rem'}}>{ product.description}</p>
                        </figcaption>
                </figure> :
                <p>Loading.......</p>
            }
            {error && <p>{error}</p>}
      </Fragment>
    )
}

export default FakeProduct