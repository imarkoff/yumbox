import Header from "./header"
import Item from "./item"
import Slider from "./slider"

import item_pic1 from "./assets/item_img.png"

let allProducts = [
    {
      id: 1,
      name: "21 сет",
      img: item_pic1,
      weight: 1500,
      price: 799,
    },
    {
      id: 2,
      name: "22 сет",
      img: item_pic1,
      weight: 1500,
      price: 799,
    },
    {
      id: 3,
      name: "23 сет",
      img: item_pic1,
      weight: 1500,
      price: 799,
    },
    {
      id: 4,
      name: "24 сет",
      img: item_pic1,
      weight: 1500,
      price: 799,
    },
    {
      id: 5,
      name: "25 сет",
      img: item_pic1,
      weight: 1500,
      price: 799,
    }
]

function App() {

  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <h2 className="mid_title">Найчастіше замовляють</h2>
      <div>
        {allProducts.map((item, i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.img} weight={item.weight} price={item.price}></Item>
        })}
      </div>
    </>
  );

}

export default App