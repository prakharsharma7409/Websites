import Background from "../components/background"
import Navbar from "../components/navbar"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "DeepSea Explorer",
      category: "Ocean Research",
      description:
        "An autonomous underwater vehicle capable of reaching depths of up to 10,000 meters, equipped with advanced sensors and AI-powered navigation systems.",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "StellarSat",
      category: "Space Technology",
      description:
        "A constellation of small satellites designed for Earth observation, climate monitoring, and communication in remote areas.",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "BioSense",
      category: "Environmental Monitoring",
      description:
        "A network of AI-powered sensors for monitoring marine biodiversity and ecosystem health in real-time.",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-green-500 to-blue-500",
    },
    {
      title: "HabiTech",
      category: "Space Habitation",
      description:
        "Modular habitat technology for long-duration space missions, with integrated life support and resource recycling systems.",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-red-500 to-purple-500",
    },
    {
      title: "OceanGrid",
      category: "Energy Systems",
      description:
        "A network of ocean-based renewable energy systems, harnessing wave, tidal, and thermal energy for sustainable power generation.",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "ExoRover",
      category: "Planetary Exploration",
      description:
        "An autonomous rover designed for exploring extreme environments on other planets, with advanced sample collection and analysis capabilities.",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <main className="min-h-screen">
      <Background />
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">Our Projects</h1>
          <p className="text-lg mb-12 text-muted-foreground max-w-3xl mx-auto text-center">
            Explore our innovative research and development projects spanning sea exploration, space technology, and
            beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden card-hover border border-border">
                <div className="h-48 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-70`}></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <button className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors">
                    Learn more <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Custom R&D Solutions</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto text-muted-foreground">
            Beyond our core projects, we offer custom research and development services for companies, institutions, and
            individuals. Our interdisciplinary team can tackle complex challenges across various domains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <h3 className="text-lg font-bold mb-3">For Companies</h3>
              <p className="text-muted-foreground">
                Partner with us to develop innovative solutions for your specific industry challenges.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <h3 className="text-lg font-bold mb-3">For Researchers</h3>
              <p className="text-muted-foreground">
                Collaborate on cutting-edge research projects with access to our expertise and resources.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-hover border border-border">
              <h3 className="text-lg font-bold mb-3">For Innovators</h3>
              <p className="text-muted-foreground">
                Turn your ideas into reality with our technical expertise and development capabilities.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors inline-flex items-center gap-2"
          >
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}

