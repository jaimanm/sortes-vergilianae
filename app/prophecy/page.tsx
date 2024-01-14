// app/prophecy/page.tsx is the UI for the '/prophecy' URL
// import {Button} from "../components/Button/button";
// import { readFileSync } from "fs";
// import Button from "../components/Button/button";
// import { Prophecy } from "./prophecy";

// export default function Page() {
//     var book = getRandomNumber(1, 12)
//     var bookLength = readFileSync('public/Aeneid_Latin/Aeneid_Latin_' + book + '.txt', 'utf-8').split('\n').length
//     var lineNumber = getRandomNumber(1, bookLength)
//     return (
//         <div className="flex h-screen w-screen justify-center items-center bg-none selection:text-[lightseagreen] selection:bg-transparent">
//             <div className="flex-col p-auto">
//             <h1 className="text-5xl font-bold underline p-10 text-pretty">Your Prophecy Is...</h1>
//             <Button message={"New Prophecy (reload)"} />
//             </div>
//             <Prophecy book={book} lineNumber={lineNumber}/>
//         </div>
//     )
// }


// function getRandomNumber(min, max) {
//     // generates a random number between min and max, INCLUSIVE
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// app/prophecy/page.tsx
import { readFileSync } from "fs";
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

