import React,{useState, useEffect, Fragment} from 'react'

const FromBackend = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:1337/api/products/53678`)
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
    }, []);

    const sendCreateReqHandler = () => {
        fetch('http://localhost:1337/api/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

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
            <button onClick={sendCreateReqHandler}>Create</button>
            {error && <p>{error}</p>}
      </Fragment>
    )
}

export default FromBackend