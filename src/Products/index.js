import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react"

const Products = () =>{
    const [products,setProducts] =useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()

    }, [])

    console.log({products});

    const getProducts = async ()=>{
        try{
            setLoading(true);
            const resposnse = await fetch('https://dummyjson.com/products')
            const result = await resposnse.json();
            setProducts(result.products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message);
        }
    }
    if (loading){
        return <h2>loading...</h2>

    }

    return(
        <div>
            <h1>All products</h1>
            {products.map(item =>(
                <div key={item.id}>
                <h2>{item.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default Products






