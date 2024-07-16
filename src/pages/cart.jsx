import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import CartFile from "../component/cart-file"



export default function Cart() {
    const [totalCart, setTotalCart] = useState(0)
    const { cart } = useSelector(state => state)

// CALCULATE TOTAL AMOUNT AND QUANTITY OF CART ITEM
    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    
    return <div className="flex bg-cyan-900 rounded-xl mb-3 justify-between items-center gap-2">
        {
            cart && cart.length ?
                <>
                    <div className="">
                        <div>
                            {
                                cart.map(cartItem => <CartFile cart={cartItem} />)
                            }
                        </div>
                    </div>
                    <div>
                        <div style={{ marginRight: "300px", width: '300px' }} className="flex flex-col items-center p-5 justify-between bg-cyan-400 w-full mt-5 rounded-xl">
                            <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
                            <p>
                                <span className="text-red-900 font-bold">Total Items</span>
                                <span className="text-bold text-1xl">: {cart.length}</span>
                            </p>
                            <p>
                                <span className="text-red-900 font-bold">Total Amount</span>
                                <span className="text-bold text-1xl">: {totalCart}</span>
                            </p>
                        </div>
                    </div>

                    
                </>

                : <div className="min-h-[80vh] flex flex-col items-center justify-center m-20 p-20">
                    <h1 style={{ marginLeft: "500px" }} className="text-red-900 font-bold text-2xl mb-2">
                        Cart is Empty !!
                    </h1>
                    <Link to={'/'}>
                        <button style={{ marginLeft: "500px" }} className="bg-red-900 border-4 text-white hover:bg-white hover:text-red-900 cursor-pointer border-red-900 rounded-lg font-bold w-40 h-10">
                            Shop Now
                        </button>
                    </Link>
                </div>
        }
    </div>
}