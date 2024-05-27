import React from 'react'
import Banner from '../Banner'
import Decore from '../Decore'
import Items from '../Items'
import Arts from '../Arts'
import Team from '../Team'
import Shipping from '../Shipping'




const Home = () => {

  let decore = [
    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/h5-baner-1.jpg",
      title: "SPECIAL OFFER",
      name: "Recycled metal"
    },
    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2021/01/h5-baner-2.jpg",
      title: "TOP PICKS",
      name: "Custom woodwork"
    },
    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/h5-baner-3.jpg",
      title: "MINIMAL DECORE",
      name: "Handmade potterey"
    }
  ]

  let items = [
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img15.jpg",
      name: "Cupholder",
      desc: "DECORATION",
      rupee: "45.00",
    },

    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img22.jpg",
      name: "Water Pot",
      desc: "DECORATION",
      rupee: "75.00",
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img23.jpg",
      name: "Kitchen Cupboard",
      desc: "FURNITURE",
      rupee: "165.00",
    },

    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img24.jpg",
      name: "Baby Chair",
      desc: "FURNITURE",
      rupee: "95.00",
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img25.jpg",
      name: "Baby Chair",
      desc: "FURNITURE",
      rupee: "95.00",
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img26.jpg",
      name: "Baby Chair",
      desc: "FURNITURE",
      rupee: "95.00",
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img27.jpg",
      name: "Baby Chair",
      desc: "FURNITURE",
      rupee: "95.00",
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img28.jpg",
      name: "Baby Chair",
      desc: "FURNITURE",
      rupee: "95.00",
    },
  ]

  let arts = [
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-1-ver-x2.png",
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-3-ver-x2.png"
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-2-ver-x2.png"
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-4-ver-x2.png"
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-1-ver-x2.png"
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-2-ver-x2.png"
    },


  ]


  let team = [
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-4.jpg",
      name: "Nicolette Ritonni",
      desc: "FINE CERAMICS",
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-3.jpg",
      name: "Juliette Massé",
      desc: "STORE MANAGER",
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-2.jpg",
      name: "Nicolas Waldau",
      desc: "ARCHITECT",
    },
    {
      img: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-1.jpg",
      name: "Yeung Ngai",
      desc: "DESIGNER",
    },
  ]


  let shipping = [
    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2021/04/icon-1.png",
      name: "20 day returns",
      desc: "Vel risus commodo viverra maecenas accumsan.",
    },
    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2021/04/icon-2.png",
      name: "Free Shipping",
      desc: "Vel risus commodo viverra maecenas accumsan.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7c_EP-Y8YofHCtO_Ad8mOP5Yae2ODiDHagg&s",
      name:"Sign up for our newsletter free",
      desc: "Your Email Address",
    },
  ]

  return (
    <>
 
      <Banner />

      <section className="decore">
        <div className="container">
          <div className="row">
            {
              decore.map((val, ind) => {
                return (
                  <div className="col-lg-4">
                    <Decore image={val.image} title={val.title} name={val.name} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="Items">
        <div className="container">
          <div className="common-data">
            <h6 className='text-align-center'>BROWSE OUR ITEMS</h6>
            <h2>Ideal for your home</h2>
            <div className="line"></div>
          </div>
          <div className="row">
            {
              items.map((val, ind) => {
                return (
                  <div className="col-md-3">
                    <Items img={val.img} name={val.name} desc={val.desc} rupee={val.rupee} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="arts">
        <div className="container">
          <div className="row">
            {
              arts.map((val, ind) => {
                return (
                  <div className="col-md-2">
                    <Arts img={val.img} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="team-data">
            <h6>OUR CREATIVE FORCE</h6>
            <h2>Meet our team</h2>
            <div className="line"></div>
          </div>
          <div className="row">
            {
              team.map((val, ind) => {
                return (
                  <div className="col-md-3">
                    <Team img={val.img} name={val.name} desc={val.desc} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>


      <section className="shipping">
        <div className="container">
          <div className="row">
            {
              shipping.map((val, ind) => {
                return (
                  <div className="col-md-4">
                    <Shipping image={val.image} name={val.name} desc={val.desc} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>







    </>
  )
}

export default Home
