import Background from "../components/background"
import Navbar from "../components/navbar"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Background />
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">Contact Us</h1>
          <p className="text-lg mb-12 text-muted-foreground max-w-3xl mx-auto text-center">
            Have a project in mind or interested in collaborating with A2Squard? Get in touch with our team.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md transition-colors inline-flex items-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>

            <div>
              <div className="bg-card rounded-xl p-8 border border-border mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@a2squard.com</p>
                      <p className="text-muted-foreground">info@a2squard.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        A2Squard Headquarters
                        <br />
                        123 Innovation Way
                        <br />
                        Tech City, TC 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">Research Inquiries</h2>
                <p className="text-muted-foreground mb-4">
                  For specific research collaborations or technical inquiries, please contact our research team
                  directly.
                </p>
                <p className="text-muted-foreground">
                  <strong>Research Director:</strong>
                  <br />
                  research@a2squard.com
                  <br />
                  +1 (555) 234-5678
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

