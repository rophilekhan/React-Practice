import React from 'react'

function Card({btnText, titleApniMarziKa}) {
  return (
    <div>
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <img src="https://picsum.photos/200/300" alt="Card Image" className="w-full h-48 object-cover rounded-t"/>
  <div className="px-6 py-4">
    <h2 className="font-bold text-2xl mb-2">{titleApniMarziKa}</h2>
    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">{btnText}</button>
  </div>
</div>
    </div>
  )
}

export default Card