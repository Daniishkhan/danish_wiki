import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4ede4] text-[#2c2c2c] font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold">Jane Doe</div>
        <nav>
          <ul className="flex space-x-4">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 font-serif">Hello, I'm Jane</h1>
          <p className="text-xl mb-6">A software engineer with a passion for creating beautiful, functional, and fun web experiences.</p>
          <Button className="bg-[#e76f51] hover:bg-[#e76f51]/90">Get in touch</Button>
        </div>
        <div className="md:w-1/2 relative">
          <div className="w-64 h-64 mx-auto relative">
            <img
              src="/placeholder.svg"
              alt="Jane Doe"
              width={256}
              height={256}
              className="rounded-full"
            />
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="49" stroke="#2a9d8f" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[#264653] text-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 font-serif text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'GraphQL', 'CSS', 'Git'].map((skill) => (
              <Card key={skill} className="p-4 text-center bg-[#2a9d8f] text-white">
                {skill}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 font-serif text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Project 1', desc: 'A brief description of project 1' },
              { title: 'Project 2', desc: 'A brief description of project 2' },
              { title: 'Project 3', desc: 'A brief description of project 3' },
              { title: 'Project 4', desc: 'A brief description of project 4' },
            ].map((project, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-2 font-serif">{project.title}</h3>
                <p>{project.desc}</p>
                <Button variant="outline" className="mt-4">Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-[#f4a261]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 font-serif text-center">Get in Touch</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <Button className="w-full bg-[#2a9d8f] hover:bg-[#2a9d8f]/90">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#264653] text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

