import React from 'react'
import grafity from "../assets/imgs/grafity.png";

export default function Footer() {
    return (
        <div>

            <div className={"px-8 lg:px-48 pt-10 lg:pt-25 pb-15"}>
                <div className='flex justify-between w-full'>
                    <div className={"grid gap-3"}>
                        <p className={"text-[#fff] text-[15px] font-family"}>Gravity Team</p>
                        <p className={"text-[#BCBCBC]  text-[14px]  font-family"}> About Us</p>
                        <p className={"text-[#BCBCBC]  text-[14px]  font-family"}> Work with Us</p>
                    </div>
                    <div>
                        <img src={grafity} alt="logo" className={"h-[30px] w-[130px] lg:w-[183px] lg:h-[53px]"}/>
                    </div>
                </div>
                <div className={"gap-15 lg:gap-0 flex pt-15 lg:pt-20 justify-between"}>
                    <p className={"text-[#BCBCBC]  text-[11px]  font-family"}>Terms of Use & Privacy Policy</p>
                    <p className={"text-[#BCBCBC]  text-[11px]  font-family"}>©2022 Gravity Team. All Rights
                        Reserved</p>
                </div>
            </div>


        </div>)
}
