import Link from "next/link"
import { ArrowRight, Rocket, Waves, Cpu, Brain } from "lucide-react"
import Background from "./components/background"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Background />
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
            All to All Search of Queries using All Research and Development
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-muted-foreground">
            Pioneering the exploration of sea and space through innovative interdisciplinary research
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-background border border-primary text-primary hover:bg-primary/10 font-medium transition-colors flex items-center justify-center gap-2"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Our Research Focus</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Space Exploration</h3>
              <p className="text-muted-foreground">
                Developing cutting-edge technologies for satellite systems, space habitats, and interplanetary
                exploration missions.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Waves className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Ocean Research</h3>
              <p className="text-muted-foreground">
                Creating advanced underwater vehicles, sensors, and systems for deep-sea exploration and marine
                conservation.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Electronics & Software</h3>
              <p className="text-muted-foreground">
                Integrating advanced electronics with innovative software solutions to power our exploration
                technologies.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-muted-foreground">
                Leveraging artificial intelligence and machine learning to analyze data and enhance decision-making in
                extreme environments.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary"
                >
                  <path d="M12 22v-5.5" />
                  <path d="M9 7V2" />
                  <path d="M15 7V2" />
                  <path d="M6 13V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z" />
                  <path d="M12 16.5V22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Robotics</h3>
              <p className="text-muted-foreground">
                Designing autonomous robots capable of operating in the harshest environments, from deep sea to outer
                space.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <path d="M21 11H3" />
                  <path d="M21 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom R&D Solutions</h3>
              <p className="text-muted-foreground">
                Providing tailored research and development services for companies, institutions, and individuals with
                specific project needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Ready to Innovate with Us?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
            Whether you're a company looking for R&D solutions or an individual with a groundbreaking idea, we're here
            to help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors inline-flex items-center gap-2"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}

