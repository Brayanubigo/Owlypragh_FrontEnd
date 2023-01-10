import { fromJSON } from 'postcss'
import React from 'react'

const alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error? 'bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded relative ':'from-indigo-400 to-indigo-600'} bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white font-bold mt-4`}>
        <strong className='font-bold'>{alerta.msg}
                              </strong></div>
  )
}

export default alerta