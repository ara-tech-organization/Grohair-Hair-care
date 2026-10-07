import { useScrollReveal } from '../hooks/useScrollReveal'

import gfcImg  from '../assets/gfc.jpg'
import prpImg  from '../assets/prp.jpg'
import mesoImg   from '../assets/mesotheraphy.jpg'
import scalpImg  from '../assets/Scalp Treatments.jpg'

const treatments = [
  {
    emoji: '💉',
    title: 'PRP Treatment',
    lines: [
      'Boost natural hair growth using your own growth factors.',
      'Strengthens hair roots and reduces hair fall effectively.',
    ],
    img: prpImg,
    accent: '#c0001a',
    tag: 'Most Popular',
  },
  {
    emoji: '🧪',
    title: 'GFC Treatment',
    lines: [
      'Advanced growth factor therapy for faster and stronger results.',
      'Improves hair density and promotes healthy regrowth.',
    ],
    img: gfcImg,
    accent: '#7c3aed',
    tag: 'Advanced',
  },
  {
    emoji: '🧴',
    title: 'Dandruff & Scalp Treatments',
    lines: [
      'Target the root cause of dandruff and scalp issues.',
      'Reduces itching, flakes, and restores scalp health.',
    ],
    img: scalpImg,
    accent: '#0891b2',
    tag: 'Scalp Care',
  },
  {
    emoji: '🌿',
    title: 'Mesotherapy',
    lines: [
      'Nutrient-rich injections to nourish hair follicles.',
      'Helps improve hair thickness and overall scalp condition.',
    ],
    img: mesoImg,
    accent: '#16a34a',
    tag: 'Nourishing',
  },
]

export default function TreatmentsSection() {
  const listRef = useScrollReveal()

  return (
    <section id="treatments" className="px-4 py-7 bg-gray-50 scroll-mt-20">
      {/* Heading */}
      <h2 className="text-[20px] font-extrabold text-gray-900 text-center mb-1">
        Our Advanced <span className="text-red-700">Hair Solutions</span>
      </h2>
      <p className="text-[12px] text-gray-400 text-center mb-6">
        Clinically proven treatments by expert trichologists
      </p>

      <div ref={listRef} className="reveal-stagger flex flex-col gap-4">
        {treatments.map((t) => {
          const sectionId = t.title.toLowerCase().includes('prp') ? 'prp' : 
                            t.title.toLowerCase().includes('gfc') ? 'gfc' :
                            t.title.toLowerCase().includes('scalp') ? 'scalp' :
                            t.title.toLowerCase().includes('meso') ? 'meso' : undefined;
          return (
            <div key={t.title} id={sectionId} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 scroll-mt-24">
              {/* Image area */}
              {t.img ? (
                <img src={t.img} alt={t.title} className="w-full h-[150px] object-cover" />
              ) : (
                <div
                  className="w-full h-[150px] flex items-center justify-center text-[48px]"
                  style={{ background: `${t.accent}12` }}
                >
                  {t.emoji}
                </div>
              )}

              {/* Body */}
              <div className="px-4 pt-3 pb-4">
                {/* Tag + title row */}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ background: t.accent }}
                  >
                    {t.tag}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                  {t.emoji} {t.title}
                </h3>
                {t.lines.map((line, i) => (
                  <p key={i} className="text-[12px] text-gray-500 leading-relaxed">{line}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}
