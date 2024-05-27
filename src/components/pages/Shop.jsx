import React from 'react'
import Column from '../Column';
import Coffee from '../Coffee';
// import { Link } from 'react-router-dom'

const Shop = () => {

  let coffee = [
    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img1-1.jpg",
      name: "Green Plates",
      desc: "DINNERWARE",
      rupee: "$60.00",
    },

    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img2.jpg",
      name: "Coffee Thermos",
      desc: "DINNERWARE",
      rupee: "$40.00",
    },

    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img3.jpg",
      name: "Night Table",
      desc: "FURNITURE",
      rupee: "$110.00",
    },

    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img4.jpg",
      name: "Green Sofa",
      desc: "FURNITURE",
      rupee: "$250.00",
    },

    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img5.jpg",
      name: "Coffee Table",
      desc: "FURNITURE",
      rupee: "$100.00",
    },

    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img6.jpg",
      name: "Sugar Bowl",
      desc: "DINNERWARE",
      rupee: "$70.00",
    },

    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img7.jpg",
      name: "Water Jug",
      desc: "DINNERWARE",
      rupee: "$65.00",
    },

    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img8.jpg",
      name: "Hanging Light",
      desc: "LIGHTING",
      rupee: "$45.00",
    },

    


  ]

  return (
    <div>
      <Column/>
    

      <section className="coffee">
        <div className="container">
          <div className="row">
            {
              coffee.map((val, ind) => {
                return (
                  <div className="col-md-6">
                    <Coffee image={val.image} name={val.name} desc={val.desc} rupee={val.rupee} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Shop;
