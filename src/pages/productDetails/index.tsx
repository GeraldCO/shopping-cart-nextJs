import allCategories from "../../data/allCategories";
import { Item } from "@/types/items";
import { useRouter } from "next/router";
import Carousel from "@/components/carousel/Carousel";
import DefaultLayout from "@/layouts/DefaulLayout";
import { useCartContext } from "@/components/Cart/useCartContext";

type CarouselItem = {
  image: string;
};

const ProductDetails = (props: any) => {
  const router = useRouter();
  const { pid } = router.query;
  const selectedProduct = allCategories.find((product) => product.id === pid);
  const { items, addItem, removeItem, status, showCart } = useCartContext();

  var { category, id, gallery, name, description, about, price } =
    selectedProduct!;

  var carouselItems: CarouselItem[] = [];

  gallery.map((_pic, index) => {
    carouselItems.push({
      image: gallery[index],
    });
  });

  const handleRemoveButtonClick = () => {
    console.log("Button clicked");
    removeItem('gatito');
  };

  return (
      <DefaultLayout>
        <div>
          <Carousel items={carouselItems} />
          <div> {selectedProduct?.name} </div>

          <main className="main-container-product">
            <div className="">
              <h4>{name ?? ""}</h4>
              Price: {price}
              About this item <br />
              <ul className="about-list">
                {about.map((item) => (
                  <li className="left-picture">{item}</li>
                ))}
              </ul>
              <button onClick={handleRemoveButtonClick}>remove</button>
            </div>
          </main>
        </div>
      </DefaultLayout>
  );
};

export default ProductDetails;
