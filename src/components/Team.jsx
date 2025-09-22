import {FaArrowRight} from "react-icons/fa";

export default function Join() {
    return (
        <div className={"text-[#fff] IMgOne bg-no-repeat"}>
            <div className={"container mx-auto flex items-center justify-between min-h-screen w-screen"}>
                <div>
                    <p className={"text-[73px] font-family leading-22"}>
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
            <div className={"  "}>
                <div className={"IMgThree bg-no-repeat  container grig items-center justify-center  min-h-screen w-screen"}>
                    <p>Contact Us</p>
                    <p>We are always open to discuss new value-adding partnerships. Do reach out if you
                    are an exchange or a project looking for liquidity; an algorithmic trader or a software developer
                    looking to improve the markets with us or just have a great idea you can’t wait to share with
                    us!</p>
                    <button>Get In Touch</button>
                </div>
            </div>
        </div>
    )
}