import React from 'react'

const Viewers = () => {

  const viewers = [
    {
      id: 1,
      img: '/assets/viewers-disney.png',
      video: '/videos/1564674844-disney.mp4'
    },
    {
      id: 2,
      img: '/assets/viewers-marvel.png',
      video: '/videos/1564676115-marvel.mp4'
    },
    {
      id: 3,
      img: '/assets/viewers-national.png',
      video: '/videos/1564676296-national-geographic.mp4'
    },
    {
      id: 4,
      img: '/assets/viewers-pixar.png',
      video: '/videos/1564676714-pixar.mp4'
    },
    {
      id: 5,
      img: '/assets/viewers-starwars.png',
      video: '/videos/1608229455-star-wars.mp4'
    },
  ]

  return (
    <div className='section__viewers container section__space'>
       <div className="Viewers__container">
          {viewers.map(v => (
            <div 
              className="wrapper relative" key={v.id} 
            >
              <img className='absolute' src={v.img} alt="" />
              {/* <video autoPlay  loop={true} type='video/mp4' playsInline={true}>
                <source src={v.video} />
              </video> */}
              <video src={v.video} autoPlay />
            </div>
          ))}
        </div> 
    </div>
  )
}

export default Viewers