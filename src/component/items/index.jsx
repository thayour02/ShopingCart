import {useDispatch, useSelector} from 'react-redux'
import { addToCart,removeFromCart } from '../../store/slices/cart-slice'

export default function ProductList({product}){
    

    const dispatch = useDispatch()
    const {cart} = useSelector(state=>state)

        function handleAddToCart(){
            dispatch(addToCart(product))
        }

        function handleRemoveFromCart(){
            dispatch(removeFromCart(product.id))
        }

    return <div>
        <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[340px] mt-10 ml-5 rounded-xl">
            <div className="h-[150px]">
                <img src={product?.image} 
                alt={product?.title} 
                className="object-cover h-full w-full"
                />
            </div>
            <div>
                <h1 className="w-40 mt-3 font-bold truncate">{product?.title}</h1>
            </div>
            <div>
              <h2 className="w-40 mt-3 font-bold truncate">${product?.price}</h2>
            </div>
            <div className="flex justify-between items-center  mt-5">
                <button onClick={cart.some(item => item.id === product.id ) ? handleRemoveFromCart : handleAddToCart}
                 className="bg-red-900 border-4 text-white hover:bg-white hover:text-red-900 cursor-pointer border-red-900 rounded-lg font-bold w-40 h-10">
                    {
                        cart.some(item => item.id === product.id ) ? 'Remove from Cart' : 'Add to Cart'
                    }
                 </button>
            </div>
        </div>
    </div>
}