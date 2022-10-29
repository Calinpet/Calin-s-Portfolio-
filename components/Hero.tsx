import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';


type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name's Calin Petrut",
      "A-guy-who-loves-making-Craft-Cocktails",
      "{But.Loves.To.Code.More}",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img 
      className='relative rounded-full h-32 w-32 mx-auto object-cover'

      src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=" 

      alt="" /> 
      <div>
        <h1> 
         <span>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>
    </div>
  );
}