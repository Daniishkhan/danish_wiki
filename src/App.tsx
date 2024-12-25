import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { Chat } from "./components/Chat"

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#33ff00] font-mono">
      {/* Header */}
      <header className="p-6 text-center">
        <div className="text-2xl font-bold mb-4 glow">Danish Khan</div>
        <nav>
          <ul className="flex justify-center space-x-4">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-[#ff00ff] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-6 py-12 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto relative mb-6">
            <img
              src="/placeholder.svg"
              alt="Jane Doe"
              width={192}
              height={192}
              className="rounded-full pixelated"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 glow">Hello, I'm Jane</h1>
          <p className="text-xl mb-6">A software engineer crafting digital wonders since 1337</p>
          <Button className="bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-[#0a0a0a]">Initialize Contact Sequence</Button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center glow">Skill Matrix</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'GraphQL', 'CSS', 'Git'].map((skill) => (
              <Card key={skill} className="p-4 text-center bg-[#2a2a2a] border border-[#33ff00] glow-border">
                {skill}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center glow">Project Archives</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Project Alpha', desc: 'A quantum-entangled web app' },
              { title: 'Project Beta', desc: 'AI-powered code synthesizer' },
              { title: 'Project Gamma', desc: 'Blockchain-based digital identity' },
              { title: 'Project Delta', desc: 'Neural network for predicting bugs' },
            ].map((project, index) => (
              <Card key={index} className="p-6 bg-[#1a1a1a] border border-[#33ff00] glow-border transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.desc}</p>
                <Button variant="outline" className="border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff] hover:text-[#0a0a0a]">Access Files</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center glow">Establish Connection</h2>
          <form className="max-w-md mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Identifier</label>
              <input type="text" id="name" className="w-full p-2 bg-[#2a2a2a] border border-[#33ff00] text-[#33ff00]" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Communication Protocol</label>
              <input type="email" id="email" className="w-full p-2 bg-[#2a2a2a] border border-[#33ff00] text-[#33ff00]" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Transmission Content</label>
              <textarea id="message" rows={4} className="w-full p-2 bg-[#2a2a2a] border border-[#33ff00] text-[#33ff00]"></textarea>
            </div>
            <Button className="w-full bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-[#0a0a0a]">Transmit Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Jane Doe. All rights reserved. Powered by caffeine and cosmic radiation.</p>
        </div>
      </footer>

      <Chat />
    </div>
  )
}
