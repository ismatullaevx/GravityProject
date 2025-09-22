import token2 from '../assets/imgs/token2.png';
import token3 from '../assets/imgs/token3.png';
import token4 from '../assets/imgs/token4.png';
import exchanche from '../assets/imgs/exchanches.png';
import bace from '../assets/imgs/bace.png';
import binance from '../assets/imgs/binance.png';
import bitbank from '../assets/imgs/bitbank.png';
import stam from '../assets/imgs/stam.png';
import div from '../assets/imgs/div.png';

export default function CryptoMarket() {
  return (
    <div className='px-4 md:px-8 lg:px-[180px]'>
      <div className='mt-[50px] md:mt-[100px]'>
        <h1 className='text-white text-center text-3xl md:text-5xl lg:text-[56px] leading-tight md:leading-[78px]'>Crypto Market Making</h1>
        <h1 className='text-white text-center mt-4 md:mt-[20px] text-base md:text-[20px]'>
          We are a global crypto liquidity provider and algorithmic market maker.
          <br className='hidden md:block' /> We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.
        </h1>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center mt-8 md:mt-[50px] bg-1'>
        <div className='text-white flex flex-col gap-4 text-center md:text-left'>
          <h1 className='text-2xl md:text-4xl lg:text-[36px] leading-tight md:leading-[44px]'>
            Market Making for <br className='hidden md:block' /> Crypto Projects
          </h1>
          <h1 className='text-lg md:text-xl font-bold'>
            Accelerate your token’s journey by <br className='hidden md:block' /> boosting its liquidity
          </h1>
          <h1 className='text-base md:text-xl'>
            We invest in building long-term, sustainable relationships and support our
            <br className='hidden md:block' /> projects in their growth journey with our services,
            <br className='hidden md:block' /> industry expertise and network.
          </h1>
          <a
            href="#contact"
            className="mt-4 inline-block text-base md:text-[18px] font-medium text-white underline decoration-gray-300 underline-offset-4 hover:opacity-80"
          >
            Learn more →
          </a>
        </div>
        <div className='mt-8 md:mt-0'>
          <img src={div} alt="Market making graphic" className='w-full max-w-sm md:max-w-none' />
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center mt-8 md:mt-0'>
        <div className='mt-8 md:mt-0'>
          <img src={exchanche} alt="Exchanges" className='w-full max-w-sm md:max-w-none' />
        </div>
        <div className='text-white flex flex-col gap-4 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-2xl md:text-4xl lg:text-[36px] leading-tight md:leading-[44px]'>
            Market Making for <br className='hidden md:block' /> Crypto Projects
          </h1>
          <h1 className='text-lg md:text-xl font-bold'>
            Accelerate your token’s journey by <br className='hidden md:block' /> boosting its liquidity
          </h1>
          <h1 className='text-base md:text-xl'>
            We invest in building long-term, sustainable relationships and support our
            <br className='hidden md:block' /> projects in their growth journey with our services,
            <br className='hidden md:block' /> industry expertise and network.
          </h1>
          <a
            href="#contact"
            className="mt-4 inline-block text-base md:text-[18px] font-medium text-white underline decoration-gray-300 underline-offset-4 hover:opacity-80"
          >
            Learn more →
          </a>
        </div>
      </div>

      <div className='mt-8 md:mt-[40px] flex flex-col-reverse md:flex-row items-center justify-between bg-2'>
        <div className='mt-8 md:mt-0'>
          <div className='relative h-[200px] md:h-[300px] w-[200px] md:w-[300px] '>
            <img src={token2} alt="Token 2" className='absolute top-50 left-0 w-16 h-16 md:w-20 md:h-20' />
            <img src={token3} alt="Token 3" className='absolute top-50 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20' />
            <img src={token4} alt="Token 4" className='absolute top-80 bottom-30 right-20 w-16 h-16 md:w-20 md:h-20' />
          </div>
          <div className='mt-[50px] md:mt-[100px] lg:mt-[300px] text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl lg:text-[60px] text-white leading-tight md:leading-[78px]'>
              Our Partners <br className='hidden md:block' /> & Friends
            </h1>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-0'>
          <div className='flex flex-col items-center leander2'>
            <img src={bitbank} alt="Bitbank" className='w-24 h-auto' />
            <h1 className='text-[#999999] text-center mt-2 text-sm'>bitbank</h1>
          </div>
          <div className='flex flex-col items-center mt-4 md:mt-[15px] leander2'>
            <img src={stam} alt="Bitstamp" className='w-24 h-auto' />
            <h1 className='text-[#999999] text-center mt-2 text-sm'>bitstamp</h1>
          </div>
          <div className='flex flex-col items-center leander2'>
            <img src={binance} alt="Binance" className='w-24 h-auto' />
            <h1 className='text-[#999999] text-center mt-2 text-sm'>Binance</h1>
          </div>
          <div className='flex flex-col items-center mt-4 md:mt-[15px] leander2'>
            <img src={bace} alt="Coinbase" className='w-24 h-auto' />
            <h1 className='text-[#999999] text-center mt-2 text-sm'>coinbase</h1>
          </div>
        </div>
      </div>
    </div>
  );
}