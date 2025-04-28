import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code, Database, FileCode, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/animated-section"
import SkillBar from "@/components/skill-bar"
import ThemeToggle from "@/components/theme-toggle"
import BackgroundAnimation from "@/components/background-animation"
import ProfileCard from "@/components/profile-card"

export const metadata: Metadata = {
  title: "Arjun U - Portfolio",
  description:
    "Portfolio of Arjun U, specializing in Java, JavaScript, Spring Boot, and web technologies. Currently pursuing MCA.",
  keywords: ["Arjun U", "developer", "portfolio", "Java", "JavaScript", "Spring Boot", "web developer", "MCA"],
  authors: [{ name: "Arjun U" }],
  openGraph: {
    title: "Arjun U - Portfolio",
    description: "Portfolio of Arjun U, specializing in Java, JavaScript, Spring Boot, and web technologies.",
    url: "https://arjun-u.vercel.app",
    siteName: "Arjun U Portfolio",
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      <BackgroundAnimation />

      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <AnimatedSection className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="space-y-6 max-w-4xl">
          <div className="relative inline-block mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-cyan-500 to-purple-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-500 to-purple-600 p-2">
              Arjun U
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl text-muted-foreground">Currently pursuing MCA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building robust applications with Java, JavaScript, and modern frameworks
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-green-500/20">
              <a href="#about">About Me</a>
            </Button>
            <Button variant="outline" className="border-green-500/50 hover:bg-green-500/10 transition-all duration-300">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="rotate-90 text-green-500" />
        </div>
      </AnimatedSection>

      {/* About Section with Profile Card */}
      <AnimatedSection id="about" className="py-20 px-4 container mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
                About Me
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full"></div>
            </h2>
            <p className="text-muted-foreground">
              I'm a passionate technologist with expertise in Java, JavaScript, and web technologies. Currently pursuing
              my Master's in Computer Applications, I'm dedicated to creating efficient, scalable, and user-friendly
              applications.
            </p>
            <p className="text-muted-foreground">
              With a strong foundation in Spring Boot, Spring MVC, and database management, I enjoy solving complex
              problems and continuously expanding my knowledge in the tech world.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
              >
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 text-green-500" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-cyan-500" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
              >
                <a href="mailto:contact@arjunu.com" aria-label="Email">
                  <Mail className="h-5 w-5 text-purple-500" />
                </a>
              </Button>
            </div>
          </div>

          <ProfileCard />
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection
        id="education"
        className="py-20 px-4 container mx-auto bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-3xl backdrop-blur-sm z-10 relative"
      >
        <h2 className="text-3xl font-bold mb-12 text-center relative inline-block mx-auto">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">Education</span>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full"></div>
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-400 to-cyan-500"></div>
            <CardHeader>
              <CardTitle>Master of Computer Applications (MCA)</CardTitle>
              <CardDescription>Currently Pursuing</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>
            <CardHeader>
              <CardTitle>Bachelor of Computer Applications (BCA)</CardTitle>
              <CardDescription>
                C.H.M.M College for Advanced Studies Chavarcode | 2020 - 2023 | CGPA: 5.75
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </AnimatedSection>

      {/* Certifications Section */}
      <AnimatedSection id="certifications" className="py-20 px-4 container mx-auto z-10 relative">
        <h2 className="text-3xl font-bold mb-12 text-center relative inline-block mx-auto">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Certifications
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-none shadow-lg hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 transition-all duration-300 bg-background/80 backdrop-blur-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-green-500" />
                Advanced Cyber Security
              </CardTitle>
              <CardDescription>Udemy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Credential ID: UC-da7abc88-ce05-454f-ba4c-55c9346d648e</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 bg-background/80 backdrop-blur-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-cyan-500" />
                Fraud Prevention
              </CardTitle>
              <CardDescription>Oxford Home Study Centre</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Credential ID: 930220</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 bg-background/80 backdrop-blur-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-purple-500" />
                Life Global Certification
              </CardTitle>
              <CardDescription>Life Global</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <Link
                  href="https://www.life-global.org/certificate/66e6e9f8-af68-4bb0-ab4c-00bacdffe896"
                  className="text-purple-400 hover:text-purple-300 hover:underline transition-colors"
                  target="_blank"
                >
                  View Certificate
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection
        id="skills"
        className="py-20 px-4 container mx-auto bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl backdrop-blur-sm z-10 relative"
      >
        <h2 className="text-3xl font-bold mb-12 text-center relative inline-block mx-auto">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-500 to-purple-500">
            Technical Skills
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-cyan-500 to-purple-500 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Code className="h-5 w-5 text-green-500" />
              Programming Languages
            </h3>
            <div className="space-y-6">
              <SkillBar name="Java" percentage={85} color="green" />
              <SkillBar name="JavaScript" percentage={80} color="cyan" />
              <SkillBar name="HTML5" percentage={90} color="purple" />
              <SkillBar name="CSS" percentage={85} color="teal" />
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Database className="h-5 w-5 text-cyan-500" />
              Frameworks & Tools
            </h3>
            <div className="space-y-6">
              <SkillBar name="Spring Boot" percentage={80} color="green" />
              <SkillBar name="Spring MVC" percentage={75} color="cyan" />
              <SkillBar name="MySQL" percentage={85} color="purple" />
              <SkillBar name="Git" percentage={80} color="teal" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-2 justify-center">
          <Badge className="text-sm py-1 px-3 bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors border-none">
            Java
          </Badge>
          <Badge className="text-sm py-1 px-3 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors border-none">
            JavaScript
          </Badge>
          <Badge className="text-sm py-1 px-3 bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors border-none">
            HTML5
          </Badge>
          <Badge className="text-sm py-1 px-3 bg-teal-500/20 text-teal-400 hover:bg-teal-500/30 transition-colors border-none">
            CSS
          </Badge>
          <Badge className="text-sm py-1 px-3 bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors border-none">
            Spring Boot
          </Badge>
          <Badge className="text-sm py-1 px-3 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors border-none">
            Spring MVC
          </Badge>
          <Badge className="text-sm py-1 px-3 bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors border-none">
            MySQL
          </Badge>
          <Badge className="text-sm py-1 px-3 bg-teal-500/20 text-teal-400 hover:bg-teal-500/30 transition-colors border-none">
            Git
          </Badge>
          <Badge className="text-sm py-1 px-3 bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors border-none">
            Maven
          </Badge>
          <Badge className="text-sm py-1 px-3 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors border-none">
            IntelliJ IDEA
          </Badge>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 px-4 container mx-auto z-10 relative">
        <h2 className="text-3xl font-bold mb-12 text-center relative inline-block mx-auto">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
            Get In Touch
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"></div>
        </h2>
        <div className="max-w-md mx-auto">
          <Card className="border-none shadow-lg bg-background/80 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-cyan-500/5 to-purple-500/5"></div>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>Fill out the form below to get in touch with me.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 rounded-md border border-input bg-background/50 backdrop-blur-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 rounded-md border border-input bg-background/50 backdrop-blur-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 rounded-md border border-input bg-background/50 backdrop-blur-sm resize-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 hover:from-green-600 hover:via-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-green-500/20">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30 backdrop-blur-sm z-10 relative">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Arjun U. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
