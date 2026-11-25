"use client"

import Image from "next/image"
import HelixRibbonHero, { type HelixProject } from "@/components/ui/helix-ribbon-hero"

const directory = "/blooming_darkness"
const preview = (n: number) => `${directory}/previews/preview-${String(n).padStart(4, "0")}.webp`
const original = (n: number) => `${directory}/Button%20masala_page-${String(n).padStart(4, "0")}.jpg`

// Twelve distinct frames from Diksha's Blooming Darkness collection.
const frames = [
  { page: 11, title: "Editorial / I" },
  { page: 12, title: "Editorial / II" },
  { page: 13, title: "Editorial / Details" },
  { page: 9, title: "Final Look / I" },
  { page: 10, title: "Final Look / II" },
  { page: 7, title: "Silhouette Studies" },
  { page: 6, title: "Design Explorations" },
  { page: 8, title: "Texture Studies" },
  { page: 5, title: "Material Board" },
  { page: 3, title: "Mood Board" },
  { page: 2, title: "Concept Note" },
  { page: 1, title: "Blooming Darkness" },
]

const projects: HelixProject[] = frames.map(({ page, title }) => ({
  title,
  src: preview(page),
}))

const gallery = [
  { page: 1, title: "Blooming Darkness / Cover" },
  { page: 2, title: "Concept Note" },
  { page: 3, title: "Mood Board" },
  { page: 4, title: "Client Profile" },
  { page: 5, title: "Material Board" },
  { page: 6, title: "Design Explorations" },
  { page: 7, title: "Silhouette Studies" },
  { page: 8, title: "Texture Exploration" },
  { page: 9, title: "Final Look / I" },
  { page: 10, title: "Final Look / II" },
  { page: 11, title: "Editorial / I" },
  { page: 12, title: "Editorial / II" },
  { page: 13, title: "Editorial / Details" },
]

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Demo() {
  return (
    <main className="w-full bg-white text-[#211f1b]">
      <HelixRibbonHero
        autoPlay
        portrait="/profile_photo.jpg"
        portraitAlt="Portrait of Diksha"
        name="Diksha"
        brand="Diksha / NIFT"
        projects={projects}
        count="( 1 collection / 12 frames )"
        bio="Diksha is a fashion design student at NIFT Srinagar, exploring expressive silhouettes, materiality and stories told through clothing."
        links={links}
        cta={{ label: "Let's connect", href: "#contact" }}
        background="#ffffff"
        foreground="#211f1b"
      />

      <section id="collection" className="border-t border-[#211f1b]/20 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#211f1b]/60">
              01 / Selected work
            </span>
            <div>
              <h2 className="text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                Blooming Darkness
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#211f1b]/70">
                An exploration of a spirit that refuses to be contained. From mood and material
                studies to silhouette development and the final editorial, this collection finds
                strength in contrast and beauty in the untamed.
              </p>
            </div>
          </div>
          <div className="mt-16 grid gap-x-5 gap-y-10 md:grid-cols-2">
            {gallery.map(({ page, title }, i) => (
              <figure key={page} className={i === 0 ? "md:col-span-2" : ""}>
                <div className="overflow-hidden bg-[#211f1b]">
                  <Image
                    src={original(page)}
                    alt={`${title} — Blooming Darkness fashion collection`}
                    width={3000}
                    height={1688}
                    sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 flex justify-between gap-4 text-xs font-semibold uppercase tracking-[0.08em]">
                  <span>{title}</span>
                  <span>{String(page).padStart(2, "0")} / 13</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-[#211f1b]/20 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#211f1b]/60">
            02 / About the designer
          </span>
          <div>
            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Rooted in craft. Open to what&apos;s next.
            </h2>
            <div className="mt-10 grid gap-6 text-base leading-relaxed text-[#211f1b]/70 sm:grid-cols-2">
              <p>
                Studying fashion design at NIFT Srinagar, Diksha is drawn to the meeting point of
                tradition and experimentation: textiles with a story, silhouettes with a point of view.
              </p>
              <p>
                Blooming Darkness follows an idea from its first references through material,
                sketch, form and final image. It is a glimpse into a process led by curiosity
                and expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#211f1b]/20 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#211f1b]/60">
            03 / Next chapter
          </span>
          <div className="mt-10 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Let&apos;s make something meaningful.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-[#211f1b]/60">
              Open to conversations about fashion, textiles and creative collaborations. Contact
              details and social links can be added here when ready.
            </p>
          </div>
          <div className="mt-24 flex justify-between border-t border-[#211f1b]/20 pt-5 text-xs font-semibold uppercase tracking-widest text-[#211f1b]/50">
            <span>Diksha / Fashion design</span>
            <span>NIFT Srinagar</span>
          </div>
        </div>
      </section>
    </main>
  )
}
