import table from '../assets/imgs/table1.png'
import table2 from '../assets/imgs/table2.png'
import table3 from '../assets/imgs/table3.png'
import table4 from '../assets/imgs/table4.png'
import token from '../assets/imgs/token1.png'
import token2 from '../assets/imgs/token2.png'
import token3 from '../assets/imgs/token3.png'
import token4 from '../assets/imgs/token4.png'

export default function CryptoMarket() {
    return (
        <div>
            <div className='mt-[100px]'>
                <h1 className='text-white text-center text-[56px] leading-[78px]'>Crypto Market Making</h1>
                <h1 className='text-white text-center mt-[20px] w-full'>We are a global crypto liquidity provider and algorithmic market <br /> maker. We trade digital assets listed on Centralized Exchanges in <br /> over 15 countries worldwide.</h1>
            </div>
            <div className=' flex justify-between'>
                <div className='text-[#fff] flex flex-col gap-4'>
                    <h1 className='text-[36px] ]'>Market Making for Crypto Projects</h1>
                    <h1 className='text-[20px] font-[900'>Accelerate your token’s journey by <br /> boosting its liquidity</h1>
                    <h1>We invest in building long-term, <br /> sustainable relationships and support our <br /> projects in their growth journey with our <br />  services, industry expertise and network.</h1>
                     <a
                  href="#contact"
                  className="mt-4 inline-block text-sm font-medium text-white underline decoration-gray-300 underline-offset-4 hover:opacity-80"
                >
                  Learn more →
                </a>
                </div>
                <div>
                    {/* <div className=''>
                        <img src={token} alt="" className=' absolute top-[1250px] bottom-0 right-0 left-[1600px]' />
                        <img src={table} alt=""  className='absolute'/>
                    </div> */}
                     {/* <div>
                        <img src={token2} alt="" />
                        <img src={table2} alt="" />
                    </div>
                     <div>
                        <img src={token3} alt="" />
                        <img src={table3} alt="" />
                    </div>
                     <div>
                        <img src={token4} alt="" />
                        <img src={table4} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
