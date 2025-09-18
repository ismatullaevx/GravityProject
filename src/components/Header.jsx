
import grafity from '../assets/imgs/grafity.png'

export default function Header() {
  return (
    <div className='px-[60px] py-[40px]'>
        <img src={grafity} alt="" />
        <ul className=' w-full text-white'>
            <li>About Us</li>
            <li>Work with Us</li>
            <select name="" id="">
                <option value="">Our Services</option>
            </select>
            <li>Blog</li>
        </ul>
    </div>
  )
}
