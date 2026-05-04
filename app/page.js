import Header from "./components/Header.js";
import Heading from "./components/Heading.js";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";
import konaSwimHubPic from "../public/kona-swim-hub.png";
import predictABuyPic from "../public/predict-a-buy.png";
import hiDentalResidencyPic from "../public/dental-residency.png";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />
      <section id="work" className="mt-10">
        <Heading heading="Featured Work" />
        <div className="mt-8">
          <Card
            title="Kona Swim Hub"
            imgSrc={konaSwimHubPic}
            imgAlt="Screenshot of Konaswimhub.com homepage"
            body="Swim class management software. Designed and built a scheduling system for swim instructors to create and manage their swim class rosters and waitlists and for families to find available swim classes. Developed event-based notification system that allows messaging. Wrote automated tests to validate template rendering, form validation, and database interactions."
            technologies="Python/Django, JavaScript, Bootstrap, SendGrid, PostgreSQL, deployed to AWS"
            liveLink="https://konaswimhub.com"
            repoLink="https://github.com/lizzypine/kona-swim-hub"
          />
          <Card
            title="Advanced Education in General Dentistry Program"
            imgSrc={hiDentalResidencyPic}
            imgAlt="Screenshot of https://hawaiidentalresidency.com/ homepage"
            body="Website for a dental residency program"
            technologies="Wordpress, PHP, MySQL"
            liveLink="https://hawaiidentalresidency.com/"
          />
          <Card
            title="Predict-a-Buy"
            imgSrc={predictABuyPic}
            imgAlt="Screenshot of Predict-a-Buy smart shopping list"
            body="Smart shopping list web application that learns users' buying habits and recommends items on their future shopping trips. Worked on a remote agile team with three other developers and collaborated on GitHub. Wrote code reviews, submitted pull requests, and pair programmed."
            technologies="React.js, Firebase, Sass"
            repoLink="https://github.com/lizzypine/predict-a-buy"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
