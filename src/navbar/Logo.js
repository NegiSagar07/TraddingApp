import React from 'react'
import Chart from '../chart/Chart';

const Logo = () => {

  const high = 24768.74;
  const low = 24567.94;
  const revert = 2.8;

  const Nifty = {
    value : 24873
  }

  const etfs = [
    'Nifty 50 bees',
    'SBI Nifty 50',
    'Bharat 22'
  ]

  const price = [
    '467',
    '865',
    '926'
  ]


  return (
    <div>
      <div className='flex flex-row'>
        <div className=' w-1/6 h-1/2 ml-72 mt-12 border-2 border-gray-400 rounded-md p-2'>

          <p className='text-2xl font-bold text-gray-700'>Nifty 50 Index</p>
          <p className='text-gray-400' >Nifty 50</p>
          <p className='text-3xl font-semibold text-gray-700 ' >{Nifty.value}</p>
          <hr className='m-3'/>

          {etfs.map((etf,index) => (
            <div key={index}>
              <p>{etf}</p>
              <p>{price[index]}</p>
              <hr className='m-3'/>
            </div>
          ))}

        </div>
        <div className='mt-12 ml-12 w-1/2'>
          {/* overview */}
          <div>
            {/* price chart*/}
            <div>
              <p className='text-2xl font-medium mb-5'>Price Chart</p>
              <div className='flex flex-row justify-between'>
              <div>
                <div className='flex flex-row'>
                  <p className='mr-20'>High</p>
                  <p className='mr-20'>Low</p>
                  <p className='mr-20'>Return</p>
                </div>
                <div className='flex flex-row '>
                  <p className='mr-12'>{high}</p>
                  <p className='mr-10'>{low}</p>
                  <p className='mr-12 text-green-600'>{revert}%</p>
                </div>
              </div>
              <div className='flex flex-row border-2 border-gray-400 rounded h-9'>
                <button className='h-8 w-10 hover:bg-[#45474B] hover:text-[#F5F7F8]'>1D</button>
                <button className='h-8 w-10 hover:bg-[#45474B] hover:text-[#F5F7F8]'>1W</button>
                <button className='h-8 w-10 hover:bg-[#45474B] hover:text-[#F5F7F8]'>1M</button>
                <button className='h-8 w-10 hover:bg-[#45474B] hover:text-[#F5F7F8]'>1Y</button>
                <button className='h-8 w-10 hover:bg-[#45474B] hover:text-[#F5F7F8]'>5Y</button>
                <button className='h-8 w-10 hover:bg-[#45474B] hover:text-[#F5F7F8]'>MAX</button>
                <button className='h-8 w-10 hover:bg-[#45474B] hover:text-[#F5F7F8]'>SIP</button>
              </div>
              </div>
              <div className='pl-16 pt-10'>
                <Chart/>
              </div>
            </div>
            {/* details */}
            <div>

            </div>
          </div>
          {/* constituents*/}
          <div>

          </div>
          {/* ETFs */}
          <div>

          </div>
          {/* Events */}
          <div>

          </div>
          {/* News */}
          <div>

          </div>

        </div>
      </div>

      <footer>

      </footer>
    </div>
  )
}

export default Logo