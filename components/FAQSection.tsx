import { faqs } from '@/lib/site'

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="stamp text-[9.5px] text-ink-500">Antes de perguntar</p>
            <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] text-ink sm:text-[2.6rem]">
              O que toda clínica{' '}
              <span className="text-accent-dark">pergunta</span>.
            </h2>
          </div>

          <div className="divide-y divide-ink/10">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group py-6 first:pt-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[16px] font-medium text-ink">
                  <span>{f.q}</span>
                  <span
                    aria-hidden
                    className="shrink-0 text-2xl font-light text-ink-500 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-500">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
