import { Card } from "@/components/ui/card";
import startupImage from "@/assets/work-tech-startup.jpg";
import enterpriseImage from "@/assets/work-enterprise.jpg";
import freelanceImage from "@/assets/work-freelance.jpg";

const experiences = [
  {
    company: "Johnson Controls",
    role: "Full Stack AI Integration Developer",
    period: "Sep 2023 - Jul 2025",
    image: startupImage,
    description: "Designed and delivered responsive, user-centered web and mobile interfaces using Figma, Adobe XD, and Sketch for React and React Native applications. Developed modular, reusable UIs with React, Redux, Next.js, TypeScript, TailwindCSS, and React Native for real-time IoT dashboards and AI-driven applications. Created reusable UI component libraries with Storybook and Recharts. Built scalable RESTful and GraphQL APIs using PHP (Laravel) for IoT and AI service integration. Integrated OpenAI GPT APIs and FastAPI ML endpoints for automated report generation, natural-language device queries, and AI-driven recommendations. Automated deployments using Docker, GitHub Actions, and AWS CodePipeline.",
    skills: ["React", "Next.js", "TypeScript", "React Native", "Redux", "PHP", "Laravel", "GraphQL", "OpenAI", "FastAPI", "AWS", "Docker", "Storybook"],
  },
  {
    company: "CRO Gurus",
    role: "Ecommerce Developer",
    period: "May 2022 - Aug 2023",
    image: enterpriseImage,
    description: "Designed and optimized responsive, user-centered interfaces for WooCommerce using Figma, Adobe XD, and Sketch to enhance usability and conversion performance. Developed and migrated Shopify 2.0 custom themes with pixel-perfect, responsive UX/UI using React, TypeScript, Liquid, and TailwindCSS. Built private Shopify Plus apps for advanced automation, analytics tracking, and dynamic storefront personalization. Integrated third-party APIs, payment gateways (including crypto payments), and ERP systems to streamline operations. Developed and customized WordPress sites using PHP, Advanced Custom Fields (ACF), and Elementor. Implemented AI-powered chatbots and OpenAI GPT-based product recommendation systems for automated customer support.",
    skills: ["React", "TypeScript", "Shopify 2.0", "Liquid", "WordPress", "WooCommerce", "PHP", "OpenAI GPT", "TailwindCSS", "Figma", "API Integration"],
  },
  {
    company: "Aurify",
    role: "Full Stack Developer",
    period: "Oct 2020 - Apr 2022",
    image: freelanceImage,
    description: "Designed and developed full-stack gaming platforms for tribal and charitable bingo, historical horse racing, electronic pull-tabs, and slot games. Built interactive dashboards and game interfaces with React, Vue.js, and TailwindCSS, including dynamic charts, real-time notifications, and responsive layouts. Developed secure backend services using PHP (Laravel, Symfony), MySQL, and Redis, implemented RNG-based game logic, player tracking, session management, and prize calculation algorithms. Built RESTful and GraphQL APIs connecting game engines, analytics dashboards, ERP systems, and payment gateways. Managed Docker-based containerization, CI/CD pipelines, cloud deployment (AWS/GCP), and server optimization for high concurrency.",
    skills: ["React", "Vue.js", "PHP", "Laravel", "Symfony", "MySQL", "Redis", "Docker", "AWS", "GCP", "TailwindCSS", "GraphQL"],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="text-primary">Experience</span>
          </h2>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building impactful AI-integrated solutions across gaming, ecommerce, and enterprise IoT platforms
          </p> */}
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"} ml-16 md:ml-0`}>
                  <Card className="p-6 space-y-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                    </div>

                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={exp.image}
                        alt={`${exp.company} workplace`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <p className="text-left text-foreground leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
