// app/about/page.tsx is the UI for the '/about' URL
import { HyperLink } from '../components/HyperLink/hyperlink';
import './about.css'

export default function Page() {
  return (
    <div className="flex-col p-20 absolute top-24">
      <h2 className="header">What is <i>Sortes Vergilianae?</i></h2>
      <p>
        The{" "}
        <a href="https://en.wikipedia.org/wiki/Sortes_Vergilianae">
          <i className='hover:text-[lightseagreen]'>Sortes Vergilianae</i>
        </a>{" "}
        (Virgilian Lots) was a practice used by Ancient Romans (and others after
        Roman times such as in the Medieval era and during the Renaissance) to
        seek advice or predictions of the future.
      </p>
      <br></br>
      <h2 className="header">How does it work?</h2>
      <p>
        The practice involved opening a book of Virgil's works (usually the
        Aeneid) at random and reading the first passage that caught one's eye.
        The passage would then be interpreted as an omen/prophecy.
      </p>
      <br></br>
      <h2 className="header">What does this website do?</h2>
      <p>
        This website allows you to perform the <i>Sortes Vergilianae</i> without
        needing to own a copy of Virgil's works. Simply click the button to get
        a random line from Vergil's <i>Aeneid</i>, translated for you! <br />
        <br />
        Instead of a horoscope, let Virgil tell you your poetic prophecy from 2,050 years in the past.
        <br /> <br />
        The fun part is, whatever line you get is up to{" "}
        <i>your own interpretation</i> as to what the prophecy means.
      </p>
      <br></br>
      <h2 className="header">What is the Aeneid?</h2>
      <p>
        The Aeneid is an epic poem written by Virgil between 30 and 19 BC that
        tells the legendary story of Aeneas, a Trojan refugee who travelled to Italy after the Trojan war,
        destined to become the ancestor of the Romans. <br />
        <br />
        Because is an epic, your prophetic line may contain some exciting battle
        action! It's up to you whether that's a good or bad thing.
      </p>
      <br></br>
      <h2 className="header">How was this website made?</h2>
      <p>
        I learned <HyperLink text="React" href="https://react.dev" /> and <HyperLink text="Next.js" href="https://nextjs.org" /> to make this website. I used Python scripts to clean and format the Aeneid English and Latin texts,
         and I used Tailwind CSS to style the website.
        <br></br><br></br>
        note: There is a more detailed log of my work in "log.md" on the <HyperLink text="Github repo" href="https://github.com/jaimanm/sortes-vergilianae/" />.
        <br></br><br></br>
        note2: I had a lot of fun playing around with the CSS, specifically making little things happen when you hover, select, or are pressing down on certain elements.
        <br></br><br></br>
        note3: I used a color scheme of "slate-500" and "lightseagreen" because why not
        <br></br><br></br>
        note4: There are four hyperlinks hidden in the text on this page, try to find them!
      </p>
    </div>
  );
}
