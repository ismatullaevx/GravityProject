import React from "react";

const Contact = () => {
    return (
        <div className={"IMgThree bg-no-repeat flex items-center justify-center"}>
            <div
                className={"container flex flex-col gap-10 items-center justify-center  min-h-screen w-screen"}>
                <p className='text-white text-center text-[55px] lg:text-[78px] '>Contact Us</p>
                <div className=' flex itemes-center justify-center'><p
                    className='text-white text-center text-[18px] w-[80%] lg:w-[40%]'>
                    We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange
                    or a project looking for liquidity; an algorithmic trader or a software developer looking to
                    improve the markets with us or just have a great idea you can’t wait to share with us!</p>
                </div>
                <div className=' flex itemes-center justify-center  '>
                    <div className='Btn1 px-10 py-3 text-[#fff]'>GET IN TOUCH</div>

                </div>
            </div>
        </div>
    )
}

export default Contact;