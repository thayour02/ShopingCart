import { useDispatch } from "react-redux"
import { removeFromCart } from "../../store/slices/cart-slice"


export default function CartFile({ cart }) {

    const dispatch = useDispatch()

    function handleRemoveFromCart() {
        dispatch(removeFromCart(cart.id))
    }
    return <div >
        <div style={{width:"500px", marginLeft:"100px"}} className="flex items-center p-5 justify bg-white mb-3 mt-3 rounded-xl">
            <div className="flex p-3">
                <img src={cart?.image} alt={cart.title} className="h-28 rounded-lg" />
                <div style={{marginLeft:"100px"}} className="ml-10 self-start space-y-5">
                    <h1 className="text-1xl trucate text-cyan-900 font-bold">
                        {cart?.title}
                    </h1>
                    <p className="text-cyan-900 font-extrabold">Price:${cart?.price}</p>
                    <button onClick={handleRemoveFromCart}
                    className="bg-cyan-900  text-white hover:bg-white hover:text-red-900 cursor-pointer border-red-900 rounded-lg font-bold w-40 h-10">
                    Remove from Cart
                </button>
                </div>
            </div>

        </div>
    </div>
}