import { Item } from "@/types/items"

const shoppingCartItem = function(item: Item){
    return(
        <div className='cart-item'>
            <img src={item.gallery[0]} alt="" />
            <div>
                <h4>{item.name}</h4>
                <p>{item.about[0]}</p>
            </div>
            <div className='item-item-price'>{item.price}</div>
        </div>
    )
}    
