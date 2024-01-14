import Button from "../components/Button/button";
import { Prophecy } from "./prophecy";

export default function Page() {
    return (
        <div className="flex h-screen w-screen justify-center items-center bg-none selection:text-[lightseagreen] selection:bg-transparent">
            <div className="flex-col p-auto">
            <h1 className="text-5xl font-bold underline p-10 text-pretty">Your Prophecy Is...</h1>
            <Button message={"New Prophecy (reload)"} />
            </div>
            <Prophecy />
        </div>
    )
}

