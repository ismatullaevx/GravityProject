import React from 'react'
import grafity from "../assets/imgs/grafity.png";

export default function Footer() {
    return (
        <div>

            <div className={"px-48 pt-25 pb-15"}>
                <div className='flex justify-between w-full'>
                    <div className={"grid gap-3"}>
                        <p className={"text-[#fff] text-[15px] font-family"}>Gravity Team</p>
                        <p className={"text-[#BCBCBC]  text-[14px]  font-family"}> About Us</p>
                        <p className={"text-[#BCBCBC]  text-[14px]  font-family"}> Work with Us</p>
                    </div>
                    <div>
                        <img src={grafity} alt=""/>
                    </div>
                </div>
                <div className={"flex pt-20 justify-between"}>
                    <p className={"text-[#BCBCBC]  text-[14px]  font-family"}>Terms of Use & Privacy Policy</p>
                    <p className={"text-[#BCBCBC]  text-[14px]  font-family"}>©2022 Gravity Team. All Rights
                        Reserved</p>
                </div>
            </div>


        </div>)
}
