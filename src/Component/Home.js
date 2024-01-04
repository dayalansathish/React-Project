import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
  const data = [
    {
      name:"McDonald's",
      distance:"4.5 / 17-20 mins",
      dishes:"Burgers, Beverages, Cafe, Desserts...",
      location:"Valasaravakkam",
    },
    {
      name:"TFC",
      distance:" 4.1 / 23 mins",
      dishes:"Biryani, Meals, Chinese, BBQ...",
      location:"Thiruvalam",
    },
    {
      name:"KFC",
      distance:"4.0 / 20 mins",
      dishes:"Burgers, Biryani, American, Snacks...",
      location:"Kanchipuram",
    },
    {
      name:"Moonlight",
      distance:"5.0 / 26 mins",
      dishes:"Burgers, Beverages, Cafe, Desserts...",
      location:"valasaravakkam",
    },
    {
      name:"Moonlight",
      distance:"4.5 / 17-20 mins",
      dishes:"Burgers, Beverages, Cafe, Desserts...",
      location:"valasaravakkam",
    },
    {
      name:"Moonlight",
      distance:"4.5 / 17-20 mins",
      dishes:"Burgers, Beverages, Cafe, Desserts...",
      location:"valasaravakkam",
    },
    {
      name:"Moonlight",
      distance:"4.5 / 17-20 mins",
      dishes:"Burgers, Beverages, Cafe, Desserts...",
      location:"valasaravakkam",
    },
    {
      name:"Moonlight",
      distance:"4.5 / 17-20 mins",
      dishes:"Burgers, Beverages, Cafe, Desserts...",
      location:"valasaravakkam",
    },  
  ]

  const navigate = useNavigate()
  return (
    <>
    <div className='container w-75 font'>
      <div className='py-3'>
        <h3>What's on your mind?</h3>
      </div>
      <div className='d-flex overflow'>
        <div className='mx-2'>
          <img src='Biryani.avif' width={'150px'} height={'180px'} />
        </div>
        <div className='mx-2'>
          <img src='Noodles.avif' width={'150px'} height={'180px'} />
        </div>
        <div className='mx-2'>
          <img src='Idli.avif' width={'150px'} height={'180px'} />
        </div>
        <div className='mx-2'>
          <img src='Dosa.avif' width={'150px'} height={'180px'} />
        </div>
        <div className='mx-2'>
          <img src='South-Indian.avif' width={'150px'} height={'180px'} />
        </div>
        <div className='mx-2'>
          <img src='Kebabs.avif' width={'150px'} height={'180px'} />
        </div>
        <div className='mx-2'>
          <img src='Sandwich.avif' width={'150px'} height={'180px'} />
        </div>
        <div className='mx-2'>
          <img src='Burger.avif' width={'150px'} height={'180px'} />
        </div>
      </div>
      </div>
      <div className='container w-75 mb-5'>
        <div className='mt-5 mb-3'>
          <h3 className='fw-normal'>Restaurants with online food delivery in Chennai</h3>
        </div>
        <div className='row'>
          {
            data.map((card)=>{
              return <div  className='col-3 cards'>
              <div className='image p-o'>
                <img src='restaurant-1.avif' width={'250px'} height={'200px'} className='rounded-3'onClick={()=>navigate('/Mcdonalds')}/>
              </div>
              <h5 className='fa fw-semibold my-2'>{card.name}</h5>
              <div>
              <i class="fa fa-star text-success" aria-hidden="true"></i><span className='px-2 fw-semibold'>{card.distance}</span>
              </div>
              <p className='fa my-2'>{card.dishes}</p>
              <p className='fa'>{card.location}</p>
            </div>
            })
          }
          
        </div>
      </div>

    
    </>
  )
}

export default Home