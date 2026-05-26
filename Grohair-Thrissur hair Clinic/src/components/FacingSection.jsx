import { useScrollReveal } from '../hooks/useScrollReveal'

const issues = [
  {
    emoji: '🔴',
    label: 'Hair Fall?',
    headline: 'Losing more hair than usual?',
    lines: ["Don't ignore early signs of hair fall.", 'Get expert care before it worsens.'],
    accent: '#ef4444',
    lightBg: '#fff1f2',
  },
  {
    emoji: '🟠',
    label: 'Bald Patches?',
    headline: 'Noticing visible gaps or patchy hair loss?',
    lines: ['It could be a serious scalp condition.', 'Consult a specialist before it spreads.'],
    accent: '#f97316',
    lightBg: '#fff7ed',
  },
  {
    emoji: '🟡',
    label: 'Slow Hair Growth?',
    headline: 'Hair not growing even after treatments?',
    lines: ['Weak roots and poor scalp health may be the reason.', 'Restore natural growth with the right care.'],
    accent: '#eab308',
    lightBg: '#fefce8',
  },
  {
    emoji: '❄️',
    label: 'Dandruff?',
    headline: 'Constant itching and flakes on your scalp?',
    lines: ['Dandruff can damage hair roots if untreated.', 'Get proper scalp treatment for lasting relief.'],
    accent: '#6366f1',
    lightBg: '#eef2ff',
  },
]

export default function FacingSection() {
  const listRef = useScrollReveal()

  return (
    <section className="px-4 py-7 bg-white">
      {/* Heading */}
      <h2 className="text-[20px] font-extrabold text-gray-900 text-center mb-1">
        Are you facing <span className="text-red-600">Hair Problems?</span>
      </h2>
      <p className="text-[12px] text-gray-400 text-center mb-6">
        Identify your concern and get the right treatment
      </p>

      {/* Vertical list — new UI */}
      <div ref={listRef} className="reveal-stagger flex flex-col gap-3">
        {issues.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3 rounded-2xl px-4 py-4"
            style={{ background: item.lightBg, borderLeft: `4px solid ${item.accent}` }}
          >
            {/* Emoji circle */}
            <div
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[20px]"
              style={{ background: `${item.accent}18` }}
            >
              {item.emoji}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-bold text-gray-900 mb-[2px]">{item.label}</p>
              <p className="text-[12px] font-semibold text-gray-700 mb-1">{item.headline}</p>
              {item.lines.map((line, i) => (
                <p key={i} className="text-[11px] text-gray-500 leading-snug">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA link */}
      <a
        href="tel:+910000000000"
        className="mt-5 flex items-center justify-center gap-2 text-red-700 text-[13px] font-semibold"
      >
        Talk to a doctor now
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </section>
  )
}
