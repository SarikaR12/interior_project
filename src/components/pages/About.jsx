import React from 'react'
import Girls from '../Girls';
import Experience from '../Experience';
import Shop from '../Shop';
import Work from '../Work';
import Sofa from '../Sofa';

const About = () => {

  let exeperience = [
    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-1.jpg",
      title: "ABOUT OUR COLLECTIONS",
      name: "Experience new way of designing",
      desc: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet.",
    },
  ]

  let shop =[
    {
      title: "ABOUT OUR SHOP",
      name: "Experience the shop",
      desc: "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet nunc.",
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-2.jpg",
    },
  ]

  let work = [
    {
      image: "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-3.jpg",
      title: "ABOUT USED MATERIALS",
      name: "Experience wood-work items",
      desc: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet nunc."
    }
  ]

  return (
    <div>

      <Girls />

      <section className="exeperience">
        <div className="container">
          <div className="row">
            {
              exeperience.map((val, ind) => {
                return (
                  <div className="col-md-11">
                    <Experience image={val.image} title={val.title} name={val.name} desc={val.desc} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

            <section className="shop">
              <div className="container">
                <div className="row">
                  {
                    shop.map((val,ind)=>{
                      return(
                        <div className="col-md-11">
                          <Shop title={val.title} name={val.name} desc={val.desc} image={val.image} />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>

            <section className="work">
        <div className="container">
          <div className="row">
            {
              work.map((val, ind) => {
                return (
                  <div className="col-md-11">
                    <Work image={val.image} title={val.title} name={val.name} desc={val.desc} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>


<Sofa/>
    </div>
  )
}

export default About;
