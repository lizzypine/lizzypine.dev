import Header from "./components/Header.js"
import Card from "./components/Card.js"
import Footer from "./components/Footer.js"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <section id="work">
        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Work</h2>
          <Card 
            title="Kona Swim Hub" 
            imgSrc=""
            body="Swim class management software. Designed and built a scheduling system for swim instructors to create and manage their swim class rosters and waitlists and for families to find available swim classes. Developed event-based notification system that allows messaging. Wrote automated tests to validate template rendering, form validation, and database interactions."
            technologies="Python, Django, JavaScript, Heroku, and PostgreSQL"
            liveLink="https://konaswimhub.com"
            repoLink="https://github.com/lizzypine/kona-swim-hub" 
          />
          <Card 
            title="Kuleana College" 
            imgSrc=""
            body="Redesigned static site into a single-page application for a learning platform."
            technologies="React, Redux, RTK Query, React Router, React Framer Motion, Jest, Mock Service Workers"
            liveLink="https://build.kuleanacollege.com"
            repoLink="https://github.com/lizzypine/kuleana-college" 
          />
          <Card 
            title="Predict-a-Buy" 
            imgSrc=""
            body="Smart shopping list web application that learns users' buying habits and recommends items on their future shopping trips.- Worked on a remote agile team with three other developers and collaborated on GitHub. Wrote code reviews, submitted pull requests, and pair programmed."
            technologies="React.js, Firebase, Sass"
            liveLink="https://tcl-61-smart-shopping-list.web.app/list"
            repoLink="https://github.com/lizzypine/predict-a-buy" 
          />
          <Card 
            title="Kai Dental" 
            imgSrc=""
            body="Designed and developed website for a private dental office."
            technologies="Wordpress, PHP, MySQL"
            liveLink="https://build.kuleanacollege.com"
            repoLink="https://github.com/lizzypine/kuleana-college" 
          />
      </section>
    <Footer />
    </main>
  );
}
