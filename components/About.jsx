import Reveal from '@/components/Reveal'
import ImageSlot from '@/components/ImageSlot'
import { SITE, ABOUT_IMAGE } from '@/data/siteData'

const FACTS = [
  ['Specialty', 'Wedding Photography & Cinematography'],
  ['Weddings Account', '@tanishq_weddings'],
  ['Based in', 'Kannnad Sambajinagar, Maharashtra'],
  ['Availability', 'Worldwide | Destination Welcome'],
  ['Contact', SITE.phone],
]

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <div className="about-img-wrap">
          <div className="about-img">
            <ImageSlot src={ABOUT_IMAGE.src} alt={ABOUT_IMAGE.alt} />
          </div>
          <div className="about-frame" />
        </div>
      </Reveal>
      <div>
        <Reveal delay={0.1}><div className="section-label">The Artist</div></Reveal>
        <Reveal delay={0.2}><h2 className="section-title">Tanishq<br /><em>Photographys</em></h2></Reveal>
        <Reveal delay={0.3}>
          <p className="about-body">
            Based in Kannnad Sambajinagar and available worldwide, Tanishq Photography
            brings fine-art sensibility and documentary storytelling to every wedding.
            With a passion for authentic moments and cinematic quality, each frame is
            crafted with intention and heart.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <blockquote className="about-quote">
            "I don't just photograph weddings — I preserve the feeling of the day, forever."
          </blockquote>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="about-facts">
            {FACTS.map(([key, val]) => (
              <div key={key} className="about-fact">
                <strong>{key}:</strong> {val}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
