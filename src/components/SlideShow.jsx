import React,{useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';


const sliderData = [
    {
        url: 'https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-superJumbo.jpg'
    },
    {
        url: 'https://s1.travix.com/blog/as/asia-india-agra-taj-mahal-front-view-no-people-small.jpg'
    },
    {
        url: 'https://www.mercurynews.com/wp-content/uploads/2017/09/sjm-l-travtopten-0924-06.jpg?w=620'
    }
];
function SlideShow() {
    
    const [slide,setSlide] = useState(0);
    const length = sliderData.length


    const preSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
     <BsArrowLeftSquareFill onClick={preSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
     <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
      {sliderData.map((item,index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (
            <img className='w-full rounded-md' src={item.url} alt='/'/>
            
      )}
      </div>
  ))}
      
    </div>
  )
}

export default SlideShow
