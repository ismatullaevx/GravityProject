// import lanier from '../assets/icons/lanier.png'
import grafity from '../assets/imgs/grafity.png'

export default function Header() {
    return (
        <div className='px-[60px] py-[40px] flex justify-between w-full'>
            <img src={grafity} alt="" />
            <ul className=' w-full text-white flex items-center'>
                <li>About Us</li>
                <select name="" id="">
                    <option value="">Our Services</option>
                </select>
                <li>Work with Us</li>
                <li>Blog</li>
            </ul>
          
        </div>
    )
}
