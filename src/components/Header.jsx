// import lanier from '../assets/icons/lanier.png'
import grafity from '../assets/imgs/grafity.png'

export default function Header() {
    return (
        <div className='px-[60px] py-[40px] flex justify-between w-full'>
            <div>
                <img src={grafity} alt="" />
            </div>
            <div>
                <ul className=' w-full text-white flex items-center gap-5'>
                    <li>About Us</li>
                    <select name="" id="" className=' outline-0'>
                        <option value="">Our Services</option>
                    </select>
                    <li>Work with Us</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className='flex items-center gap-4'>
                <div className='leander'></div>
                <h1 className='text-white'>GET IN TOUCH</h1>
            </div>

        </div>
    )
}
