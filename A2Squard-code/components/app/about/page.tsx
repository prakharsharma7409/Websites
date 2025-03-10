import Background from "../components/background"
import Navbar from "../components/navbar"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen">
      <Background />
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">About A2Squard</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6 text-muted-foreground">
              A2Squard stands for "All to All Search of Queries using All Research and Development" - a team of 10
              innovative minds working at the intersection of electronics, software, artificial intelligence, and
              machine learning.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Our mission is to explore the uncharted territories of sea and space, developing cutting-edge technologies
              that push the boundaries of what's possible. We believe that the future of humanity lies in understanding
              and harnessing the potential of these vast frontiers.
            </p>
            <p className="text-lg mb-10 text-muted-foreground">
              With our diverse expertise and collaborative approach, we're building a billion-dollar startup that will
              revolutionize how we interact with and explore our world and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Team member cards - placeholders for your actual team */}
            {[...Array(10)].map((_, index) => (
              <div key={index} className="bg-card rounded-xl p-6 card-hover border border-border text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground/70"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Team Member {index + 1}</h3>
                <p className="text-sm text-muted-foreground mb-2">Role / Expertise</p>
                <p className="text-xs text-muted-foreground">member{index + 1}@a2squard.com</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
              Our team combines decades of experience in various fields, from aerospace engineering to deep-sea
              robotics, from AI research to electronics design.
            </p>
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors inline-flex items-center gap-2"
            >
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Our Vision</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <h3 className="text-xl font-bold mb-4 text-primary">Sea Exploration</h3>
              <p className="text-muted-foreground">
                The oceans cover more than 70% of our planet, yet we've explored less than 5% of them. A2Squard is
                developing autonomous underwater vehicles, advanced sensors, and communication systems to unlock the
                mysteries of the deep sea, from resource discovery to understanding marine ecosystems.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <h3 className="text-xl font-bold mb-4 text-accent">Space Exploration</h3>
              <p className="text-muted-foreground">
                As humanity looks to the stars, A2Squard is at the forefront of developing technologies for the next
                generation of space exploration. From satellite systems to habitat modules, from propulsion technologies
                to life support systems, we're building the foundation for humanity's future among the stars.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

