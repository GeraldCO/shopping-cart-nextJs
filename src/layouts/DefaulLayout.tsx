import { ReactNode, useState } from 'react';
import Header from './Header';
import { Item } from '@/types/items';

type Props = {
    children: ReactNode;
}

const DefaultLayout = ({ children}: Props) =>{

    const [cart, setCart] = useState<Item[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showingCart, setShowingCart ] = useState(false);

    const addItem = (newItem: Item) => {
        setCart((prevState) => {
          return[
            ...prevState,
            newItem
          ]
        });
    }

    const changeCartVisiility =()=>{
        setShowingCart(!showingCart);
        }

    return(
        <div>
            <Header
                cartStatus = {cart} 
                addItem={addItem}
                changeCartVisibility={changeCartVisiility}
            />
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )

}

export default DefaultLayout