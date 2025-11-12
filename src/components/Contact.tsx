import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Available for exciting projects and collaborations
          </p>
        </div>

        <Card className="p-8 space-y-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-muted-foreground">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Email</span>
              </div>
              <p className="text-foreground">tacos730@hotmail.com</p>
            </div>

            {/* <div className="space-y-2">
              <div className="flex items-center gap-3 text-muted-foreground">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">Phone</span>
              </div>
              <p className="text-foreground">+1 (760) 238-0904</p>
            </div> */}

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-muted-foreground">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">Location</span>
              </div>
              <p className="text-foreground">Jocotepec, Jalisco, Mexico</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-muted-foreground">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <span className="font-medium">Education</span>
              </div>
              <p className="text-foreground">BS Computer Science, Tecnológico de Monterrey</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
