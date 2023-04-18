import allCategories from '../../data/allCategories';
import {useState, useEffect} from 'react'
import { Item } from '@/types/items';
import { useRouter } from 'next/router';
import Image, { StaticImageData } from 'next/image';

interface Proxs {
addItem: (newItem: Item) => void
}

const ProductDetails = (props: Proxs)=>{
    const router = useRouter();
    const { pid } = router.query;
    const selectedProduct = allCategories.find((product) => product.id === pid);  // this looks for a product using an id, I need to change number one for the variable receive by parameter
    const [selectedPicture, setSelectedPicture] = useState<StaticImageData | null>(null);

    
    
    var  {
        category,
        id,
        gallery,
        name,
        description,
        about,
        price
    } = selectedProduct!
    
    
    // useEffect(() => {
    //     setSelectedPicture(gallery[0]);
    //   },[])
    
    return <div>
        <div> {selectedProduct?.name} </div>
        
        <main className="main-container-product">
            <div className="sidebar sidebar-gallery">
                <div className="left-gallery">
                    <ul>
                        {
                            selectedProduct!.gallery!.map((picture)=>(<li className="left-picture">
                                <Image src={picture} alt='product' onClick={()=>setSelectedPicture(picture)}/>
                            </li>))
                        }
                    </ul>
                </div>
                <div className="selected-picture">
                    {/* <Image src={selectedPicture} alt="" /> */}
                </div>
            </div>
            <div className="">
                <h4>{name ?? "asdf21"}</h4>
                Price: {price}

                About this item <br />
                <ul className='about-list'>
                    {
                        about.map((item)=>(<li className="left-picture">
                            {item}
                        </li>))
                    }
                </ul>
                <button onClick={()=>props.addItem(selectedProduct!)}>
                    Add to cart 
                </button>

            </div>
        </main>    
        </div>

}

export default ProductDetails;