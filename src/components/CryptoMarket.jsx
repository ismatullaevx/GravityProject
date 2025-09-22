import table from '../assets/imgs/table1.png'
import table2 from '../assets/imgs/table2.png'
import table3 from '../assets/imgs/table3.png'
import table4 from '../assets/imgs/table4.png'
import token from '../assets/imgs/token1.png'
import token2 from '../assets/imgs/token2.png'
import token3 from '../assets/imgs/token3.png'
import token4 from '../assets/imgs/token4.png'
import exchanche from '../assets/imgs/exchanches.png'

export default function CryptoMarket() {
    return (
        <div>
            <div className='mt-[100px]'>
                <h1 className='text-white text-center text-[56px] leading-[78px]'>Crypto Market Making</h1>
                <h1 className='text-white text-center mt-[20px] w-full'>We are a global crypto liquidity provider and algorithmic market <br /> maker. We trade digital assets listed on Centralized Exchanges in <br /> over 15 countries worldwide.</h1>
            </div>
            <div className=' flex justify-between items-center mt-[50px]'>
                <div className='text-[#fff] flex flex-col gap-4'>
                    <h1 className='text-[36px] leading-[44px]'>Market Making for <br /> Crypto Projects</h1>
                    <h1 className='text-[20px] font-[900'>Accelerate your token’s journey by <br /> boosting its liquidity</h1>
                    <h1>We invest in building long-term, <br /> sustainable relationships and support our <br /> projects in their growth journey with our <br />  services, industry expertise and network.</h1>
                    <a
                        href="#contact"
                        className="mt-4 inline-block text-sm font-medium text-white underline decoration-gray-300 underline-offset-4 hover:opacity-80"
                    >
                        Learn more →
                    </a>
                </div>
                <div className=' grid grid-cols-2 gap-0 relative'>
                    <div>
                        <img src={token4} alt="" className=' absolute left-10 bottom-59'  />
                        <img src={table4} alt="" className=' '  />
                    </div>

                    <div >
                        <img src={token} alt="" className=' absolute' />
                        <img src={table} alt="" className='  ' />
                    </div>
                    <div>
                        <img src={token3} alt="" className=' absolute ' />
                        <img src={table3} alt=""  className='  ' />
                    </div>
                    <div>
                        <img src={token2} alt="" className=' absolute ' />
                        <img src={table2} alt=""  className='   ' />
                    </div>
                </div>
            </div>


            <div className=' flex justify-between items-center mt-[50px]'>
                <div>
                    <img src={exchanche} alt="" />
                </div>
                <div className='text-[#fff] flex flex-col gap-4'>
                    <h1 className='text-[36px] leading-[44px]'>Market Making for <br /> Crypto Projects</h1>
                    <h1 className='text-[20px] font-[900'>Accelerate your token’s journey by <br /> boosting its liquidity</h1>
                    <h1>We invest in building long-term, <br /> sustainable relationships and support our <br /> projects in their growth journey with our <br />  services, industry expertise and network.</h1>
                    <a
                        href="#contact"
                        className="mt-4 inline-block text-sm font-medium text-white underline decoration-gray-300 underline-offset-4 hover:opacity-80"
                    >
                        Learn more →
                    </a>
                </div>

            </div>
        </div>
    )
}
