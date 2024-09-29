import Header from "./components/Header.js"
import Heading from "./components/Heading.js"
import Card from "./components/Card.js"
import Footer from "./components/Footer.js"
import konaSwimHubPic from "../public/kona-swim-hub.png"
import kuleanaCollegePic from "../public/kuleana-college.png"
import predictABuyPic from "../public/predict-a-buy.png"
import kaiDentalPic from "../public/kai-dental.png"

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
            title="Kuleana College" 
            imgSrc={kuleanaCollegePic}
            imgAlt="Screenshot of Kuleanacollege.com homepage"
            body="Redesigned static site into a single-page application for a learning platform."
            technologies="React, Redux, RTK Query, React Router, React Framer Motion, Jest, Mock Service Workers"
            repoLink="https://github.com/lizzypine/kuleana-college" 
          />
          <Card 
            title="Predict-a-Buy" 
            imgSrc={predictABuyPic}
            imgAlt="Screenshot of Predict-a-Buy smart shopping list"
            body="Smart shopping list web application that learns users' buying habits and recommends items on their future shopping trips. Worked on a remote agile team with three other developers and collaborated on GitHub. Wrote code reviews, submitted pull requests, and pair programmed."
            technologies="React.js, Firebase, Sass"
            liveLink="https://tcl-61-smart-shopping-list.web.app/list"
            repoLink="https://github.com/lizzypine/predict-a-buy" 
          />
          <Card 
            title="Kai Dental" 
            imgSrc={kaiDentalPic}
            imgAlt="Screenshot of Kaidental.com homepage"
            body="Website for a private dental office."
            technologies="Wordpress, PHP, MySQL"
            liveLink="https://kaidentalmaui.com"
          />
        </div>
      </section>
    <Footer />
    </main>
  );
}
