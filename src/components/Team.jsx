import {FaArrowRight} from "react-icons/fa";
import React from "react";

export default function Join() {
    return (
        <div className={"text-[#fff] IMgOne bg-no-repeat"}>
            <div className={"container mx-auto grid lg:flex items-center justify-between min-h-screen w-screen px-10 lg:px-0"}>
                <div className={"lg:pt-0 pt-50"}>
                    <p className={"text-[50px] lg:text-[73px] font-family lg:leading-22"}>
                        Join <br/>
                        Gravity Team
                    </p>
                </div>
                <div className={"grid gap-5 max-w-[450px]"}>
                    <p>
                        Join our community of innovators, problem solvers and owners who apply scientific discovery
                        techniques to make crypto markets a better place for everyone.
                    </p>
                    <p>
                        As we emphasize it in our name – Gravity Team, we are a team. A team of bright, talented
                        people, each masters of their specialty, curious about the world and eager to solve the new
                        exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!
                    </p>
                    <div className={"flex items-center gap-5"}>
                        <p className="underline underline-offset-4">
                            Learn more about working with us
                        </p>


                        <FaArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}