# Sortes Vergilianae Project Log

## General Running Notes / TODOs

- [x] Setup development environment

- [x] Download english text

- [x] Download latin text

- [x] Clean up latin text

- [x] Clean up english text

- [x] Create basic home page

- [x] Create about page

- [ ] Figure out & develop random line search

- Idea: pick a random group of 3 lines instead of just 1 random line

- [ ] Finish developing home page (displaying the prophecy, etc.)
- This includes making the button trigger the randomizer when clicked, and that means client-server communication if needed

- [ ] Style website

- Idea: use Tailwind CSS

- [ ] Deploy website (hopefully on Vercel)

## Optional TODOs

- [ ] Make an architecture diagram for the website

## Day 1 - Friday 11/12/24

Spent some time deciding what framework to use, jumping around different tutorials

Eventually ended up using React and Next.js, using the React tutorial from Nextjs.org

Started working on basic home page setup

Created the about page

TODO: style things later because it's just text and headers right now

Downloaded the Latin text from thelatinlibrary.com

- Wrote a Python script to clean up the text, mainly remove line numbers and blank lines

After quite a bit of searching for a pdf of Sarah Ruden translation, I found one on dokumen.pub

- Downloaded the PDF, converted it to txt online, and then manually split the file into txt files for each book
- TODO: This text needs to be cleaned up MUCH more than the Latin text, on account of:
  - Line numbers
  - Page numbers at the bottom of each page
  - Commentary notes at the bottom of each page
  - Headers at the top of each page (BOOK 1, BOOK 2, etc.)

ok so I've spent so much time and brainpower just trying to figure out why this regex doesn't work even though copilot chat says it should. I'm checking for what looks like a hyphen (-) but ITS ACTUALLY A EN DASH (–) so it's neither a hyphen nor an em dash (—) and ALL THREE LOOK THE SAME TO ME :(

- Yeah that was really the only roadblock to getting these cleaned for the most part

Now I am checking and realizing that what I hoped turned out to be false - the line numbers are not perfectly consistent between Sarah Ruden and the latin library. Just looking at Book 3, the line numbers look lined up in the beginning but deviate by 14 lines (English ahead) by the end.

- Kinda disappointing, and I don't want to have to manually go through and somehow fix where the line numbers deviate 14 times, since if that's the average then I will have to manually fix it 14\*12=168 times. Let me check the other Books and see how bad it is.

| Book | Deviation (English-Latin) |
| ---- | ------------------------- |
| 1    | 0                         |
| 2    | 1                         |
| 3    | 0                         |
| 4    | 0                         |
| 5    | 0                         |
| 6    | 0                         |
| 7    | 0                         |
| 8    | 0                         |
| 9    | 0                         |
| 10   | 0                         |
| 11   | 0                         |
| 12   | 1                         |

Books that originally had deviations: 10, 9, 7, 4, 2, 11, 12 (this list isn't that confident)

- This is good enough, I'm too tired/sleepy to finish trying to figure out the deviations.

Okay, so these are not that bad and I can figure out where the deviations are using similar logic to a binary search and fix them manually.

- Update: I found the deviation in Book 4, the English had a line with just one word, overflowed from the last line. Hopefully I'll be able to find the other ones in a reasonable amount of time & effort.

\*\*note: in the middle of making this table I found out that some books have random line numbers and page numbers were left in the english texts. So I fixed the cleaning algorithm and now have to re-check all the numbers in the table (i was on book 7 when I noticed)

\*\*double note: i just found that the cleaned-up english text is only 27 lines long (the latin is 915 lines long). Obviously something went wrong there with the cleaning, I'll have to debug it

- Yup, book 12 english is the same story
- Yeah, so for books 11 and 12 the pdf converted in such a way that the tops of the pages say "B O O K 11" instead of "BOOK 11" like the rest of them. Why? who knows. I'll adjust the cleaning algorithm to account for spaced out books smh

So going to sleep now, I'll start working on the random line search tomorrow.

## Day 2

- I spent a long time restructuring my project files to be right. I also spent a while redoing a tutorial using Typescript so that now all my files are .tsx files. So basically restarted the actual website part of my project
- Yo i got to the part of actually generating a prophecy!!!! It does a random set of 3 lines of both Latin and English (except I havent set any precautions for choosing the first or second line of a book and trying to get a negative line, i'll do that later).
- Now I'm working on making sure the prophecy stays, and that another one doesn't just generate when I reload. I'll try to utliize useState to do this, it's like cookies. The user should only be able to generate a new prophecy via the "See My Future!" button on the home screen.

  - It's 11:15pm. After spending an immense amount of time on trying to do the above, I gave up and reset it to the state where you get a new prophecy every time you reload. Now I'm just trying to make the website look better and I'll be done.

- Yeah so it's 12:46 am and I'm basically done with the website. It has a color theme of slate gray and lightseagreen, and it's pretty minimalistic. I'm happy with it, just wish I hadn't spent so much time on features that didn't make it to the end product.

  - Ok so it's 1:05 am and I've fixed that thing where only the full path worked and I couldn't figure out the relative path.

- 1:06am deploying to Vercel now
- So at 2am I realized that the website was behaving differently than my local copy, so I gave up and went to sleep

## Day 3

- Yeah I just spent about an hour trying to fix the Vercel issue and I actually did it! Now just making sure I have everything I want before writing up my submission.

## Day 4

-

## Day 5

-
