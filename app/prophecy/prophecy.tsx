import { readFileSync } from 'fs';

export function Prophecy() {
    const book = getRandomNumber(1, 12)
    const bookLength = readFileSync('/Users/jaimanm/Desktop/VSCode_Workspace/sortes-vergilianae/lib/Aeneid_Latin/Aeneid_Latin_' + book + '.txt', 'utf-8').split('\n').length
    const lineNumber = getRandomNumber(1, bookLength)
    const numLines = 3
    const latinLine = getLatin(book, lineNumber, numLines)
    const englishLine = getEnglish(book, lineNumber, numLines)

    return (
        <div className='flex-col justify-center text-2xl mx-16'>
            <p className='italic text-xl'>Aeneid Book {book}, Lines {lineNumber - 3}-{lineNumber}</p>
            <br></br>
            <p>Latin:</p>
            <ul>
                {latinLine.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
            <br></br>
            <p className=''>English:</p>
            <ul>
                {englishLine.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
    )
}

function getRandomNumber(min, max) {
    // generates a random number between min and max, INCLUSIVE
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getLatin(book, lineNumber, numLines) {
    // get a random Latin line from the Aeneid
    // the .txt files are in ../../lib/
    var lines = readFileSync('/Users/jaimanm/Desktop/VSCode_Workspace/sortes-vergilianae/lib/Aeneid_Latin/Aeneid_Latin_' + book + '.txt', 'utf-8').split('\n')

    // return a random line
    var line = lines.slice((lineNumber - 1) - numLines, (lineNumber - 1))
    return line
}
function getEnglish(book, lineNumber, numLines) {
    // get a random English line from the Aeneid
    // the .txt files are in ../../lib/
    var lines = readFileSync('/Users/jaimanm/Desktop/VSCode_Workspace/sortes-vergilianae/lib/Aeneid_English/Aeneid_English_' + book + '.txt', 'utf-8').split('\n')
    
    // return a random line
    var line = lines.slice((lineNumber - 1) - numLines, (lineNumber - 1))
    return line
}