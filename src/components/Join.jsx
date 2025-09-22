import React from 'react'
import leftbutton from "../assets/icons/leftbutton.png";
import rightbutton from "../assets/icons/rightbutton.png";
import bitkub from "../assets/icons/bitkub.png";
import {useState} from "react";


const products = [
    {
        id: 1,
        text: "Since 2020, Gravity team has been an astounding market maker for Bitkub. They have proven themselves\n" +
            "                to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has\n" +
            "                contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly\n" +
            "                advocate Gravity Team as they have been an indispensable part of our market-making team.",
        stext: "Atthakrit Chimplapibul",
        thtext: "Co-founder & CEO of Bitkub",
        img: bitkub

    },
    {
        id: 2,
        text: " Since 2021, Gravity team has been an astounding market maker for Bitkub. They have proven themselves\n" +
            "                to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has\n" +
            "                contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly\n" +
            "                advocate Gravity Team as they have been an indispensable part of our market-making team.",
        stext: "Atthakrit Chimplapibul",
        thtext: "Co-founder & CEO of Bitkub",
        img: bitkub
    },
    {
        id: 3,
        text: "Since 2022, Gravity team has been an astounding market maker for Bitkub. They have proven themselves\n" +
            "                to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has\n" +
            "                contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly\n" +
            "                advocate Gravity Team as they have been an indispensable part of our market-making team.",
        stext: "Atthakrit Chimplapibul",
        thtext: "Co-founder & CEO of Bitkub",
        img: bitkub
    },
    {
        id: 4,
        text: "Since 2023, Gravity team has been an astounding market maker for Bitkub. They have proven themselves\n" +
            "                to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has\n" +
            "                contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly\n" +
            "                advocate Gravity Team as they have been an indispensable part of our market-making team.",
        stext: "Atthakrit Chimplapibul",
        thtext: "Co-founder & CEO of Bitkub",
        img: bitkub,

    },
];

export default function Join() {
    const [activeC, setActiveC] = useState(1);

    return (
        <div className={"text-[#fff] py-20 flex flex-col items-center justify-center px-100"}>
            <div className={"grid items-center  justify-center text-center"}>
                <p className={" text-[57px] font-family"}>We are in a good company</p>
                <p className={" mx-65 pt-3 text-[20px]"}>
                    Our partnerships have delivered great value to our projects and we’re happy to share some of their
                    feedback below</p>
            </div>
            <div className={"flex items-center justify-center pt-5 gap-8"}>
                <img onClick={() => {
                    activeC <= 1 ? null : setActiveC(activeC - 1)
                }} src={leftbutton} alt=" logo" className={"w-[58px] h-[58px]"}/>
                <img onClick={() => {
                    activeC >= 4 ? null : setActiveC(activeC + 1)
                }} src={rightbutton} alt=" logo" className={"w-[58px] h-[58px]"}/>
            </div>

            <div className={"flex text-center w-[69%] mx-42 pt-10"}>
                {products.map((item) => (
                    <div key={item.id}
                         onClick={() => {
                             setActiveC(item.id);
                         }}>
                        {activeC === item.id && <div>
                            <div className="grid gap-4 justify-center items-center">
                                <p className={"text-[28px] font-family"}>{item.text}</p>
                                <p className={"text-[18px] font-bold pt-5"}>{item.stext}</p>
                                <div className={"flex items-center justify-center gap-10 pt-2"}>
                                    <p className={"text-[14px]  font-family"}>{item.thtext}</p>
                                    <img src={item.img} alt="logo" className={"w-[140px] h-[26px]"}/></div>
                            </div>
                        </div>}
                    </div>
                ))}
            </div>
            <div className={"flex items-center justify-center pt-30 gap-3"}>
                {products.map(item => (
                    <button
                        style={{background: item.id === activeC ? "linear-gradient(135deg, #665DCD 0%, #5FA4E6 44.76%, #D2AB67 100%)" : ""}}
                        className={"bg-[#333333] p-2 rounded-2xl"}
                        onClick={() => {
                            setActiveC(item.id)
                        }}></button>

                ))}
            </div>
        </div>
    )

}