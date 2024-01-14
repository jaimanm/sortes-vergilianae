// app/about/page.tsx is the UI for the '/about' URL
import './about.css'

export default function Page() {
  return (
    <div className="flex-col m-20">
      <h2 className="header">What is <i>Sortes Vergilianae?</i></h2>
      <p>
        The{" "}
        <a href="https://en.wikipedia.org/wiki/Sortes_Vergilianae">
          <i>Sortes Vergilianae</i>
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
        This website allows you to perform the Sortes Vergilianae without
        needing to own a copy of Virgil's works. Simply click the button to get
        a random line from Vergil's <i>Aeneid</i>, translated for you! <br />
        <br />
        The fun part is, whatever line you get is up to{" "}
        <i>your own interpretation</i> as to what the prophecy means.
      </p>
      <br></br>
      <h2 className="header">What is the Aeneid?</h2>
      <p>
        The Aeneid is an epic poem written by Virgil between 30 and 19 BC, that
        tells the legendary story of Aeneas, a Trojan who travelled to Italy,
        where he became the ancestor of the Romans. <br />
        <br />
        Because is an epic, your prophetic line may contain some exciting battle
        action! It's up to you whether that's a good or bad thing.
      </p>
    </div>
  );
}
