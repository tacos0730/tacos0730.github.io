import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-4xl w-full space-y-8 animate-fade-in">
        <div className="space-y-4">
          <Badge variant="outline" className="border-primary text-primary">
            Fullstack AI Engineer & UX/UI Designer
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Edson Valentin
            <br />
            <span className="text-primary">Campos</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Experienced Full-Stack AI Developer and UX/UI Designer with a strong background in web and mobile application development. Proficient in React, React Native, Node.js, PHP, and CMS platforms including WordPress and Shopify, with expertise in AI integration, API development, and full-stack solutions.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Jocotepec, Jalisco, Mexico</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>tacos730@hotmail.com</span>
            </div>
            {/* <div className="flex items-center gap-2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+1 (760) 238-0904</span>
            </div> */}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#skills"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Skills
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
