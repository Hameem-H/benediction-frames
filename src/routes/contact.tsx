import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Let's Talk — Benediction Studios" },
      {
        name: "description",
        content:
          "Contact Benediction Studios for film screenings, festivals, distribution, press, and creative collaborations.",
      },
      { property: "og:title", content: "Let's Talk — Benediction Studios" },
      {
        property: "og:description",
        content: "Film screenings, festivals, distribution, press and collaborations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const inquiryTopics = [
  "Film Screenings",
  "Festivals & Distribution",
  "Media & Press",
  "Collaborations",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: inquiryTopics[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      <SiteNav />

      <section className="px-6 pt-36 pb-24 md:px-12 md:pt-52 max-w-7xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-start">
          {/* Left Column: Heading & Inquiry Topics */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="label-caps text-gold/80 mb-4 tracking-widest">Inquiries</p>
              <h1 className="film-title fade-up text-[13vw] sm:text-[10vw] md:text-[7vw] leading-[0.88] text-foreground tracking-tight">
                LET'S TALK.
              </h1>
            </div>

            <div className="space-y-6 pt-4 border-t border-border/40">
              <p className="label-caps text-xs text-muted-foreground">We Welcome Inquiries Regarding</p>
              <ul className="space-y-3">
                {inquiryTopics.map((topic) => (
                  <li key={topic} className="flex items-center gap-3 text-lg font-light text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold/70 shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-border/40 text-sm font-light text-muted-foreground">
              <p className="label-caps text-xs text-gold/80 mb-1">Direct Correspondence</p>
              <p>hello@benediction.studio</p>
              <p className="mt-1">Nashville · Savannah</p>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="lg:col-span-7 lg:pl-6">
            {submitted ? (
              <div className="py-16 px-8 border border-border/40 bg-secondary/10 space-y-4">
                <p className="label-caps text-gold/90">Message Received</p>
                <h2 className="film-title text-3xl font-light text-foreground">Thank you, {formData.name}.</h2>
                <p className="text-foreground/80 font-light leading-relaxed">
                  We have received your message regarding <span className="text-gold/90">{formData.subject}</span>. We will be in touch shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: inquiryTopics[0], message: "" });
                  }}
                  className="label-caps text-xs text-muted-foreground hover:text-foreground underline pt-4 inline-block focus:outline-none cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="label-caps text-xs text-muted-foreground block">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-transparent border-b border-border/60 py-3 text-lg text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors duration-300 font-light"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="label-caps text-xs text-muted-foreground block">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full bg-transparent border-b border-border/60 py-3 text-lg text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors duration-300 font-light"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="label-caps text-xs text-muted-foreground block">
                    Subject / Topic *
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-background border-b border-border/60 py-3 text-lg text-foreground focus:border-gold focus:outline-none transition-colors duration-300 font-light cursor-pointer"
                  >
                    {inquiryTopics.map((topic) => (
                      <option key={topic} value={topic} className="bg-background text-foreground">
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="label-caps text-xs text-muted-foreground block">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your screening, press inquiry, or collaboration idea..."
                    className="w-full bg-transparent border-b border-border/60 py-3 text-lg text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors duration-300 font-light resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="label-caps inline-flex items-center gap-3 border-b border-foreground/40 pb-1 text-foreground/90 transition-all duration-300 hover:border-gold hover:text-gold cursor-pointer focus:outline-none"
                  >
                    SEND MESSAGE <span aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
