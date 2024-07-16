import { useEffect, useState } from "react"
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import ProductList from "../component/items"

export default function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchProduct() {
        setLoading(true)
        try {
            let response = await fetch('https://fakestoreapi.com/products')

            let data = await response.json()

            if (data) {
                setLoading(false)
                setProducts(data)

            }
        } catch (e) {
            setLoading(false)
            throw new Error(e)
        }
    }


    useEffect(() => {
        fetchProduct()
    }, [])


    return <div>
        {
            loading ? (
                <div className="min-h-screen h-full w-full text-9xl duration-500 flex justify-center items-center">
                    <AiOutlineLoading3Quarters
                        height={'520'}
                        width={'520'}
                        color="rgb(127,29,29)"
                        visible={true}
                    />
                </div>
            ) :
                <div className="min-h-{80vh} grid sm:grid-colos-3  md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
                    {
                        products && products.length ?
                            products.map(productItem => 
                            <ProductList product={productItem}/>)
                            : null
                    }
                </div>
        }
    </div>
}