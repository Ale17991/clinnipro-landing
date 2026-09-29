// Ilustração do fluxo odontograma → orçamento. O desenho do dente usa a mesma
// geometria do app (src/lib/core/dental/tooth-anatomy.ts, quadro 40 × 80,
// dente superior com o ápice em cima) e o verde de "Tratado" do catálogo de
// status (#bbf7d0), para o dentista reconhecer na tela o que viu aqui.
// Os números batem: o dente marcado no desenho é o mesmo da linha do orçamento.

type Kind = 'incisor' | 'canine' | 'premolar' | 'molar'

const SHAPES: Record<Kind, { crown: string; root: string; crownX: [number, number] }> = {
  incisor: {
    crown:
      'M12,46 C10,56 7.5,66 8,75 Q8.5,79 12,79.5 L28,79.5 Q31.5,79 32,75 C32.5,66 30,56 28,46 Z',
    root: 'M12,47 C11,32 14.5,13 18.5,3.5 Q20,1 21.5,3.5 C25.5,13 29,32 28,47 Z',
    crownX: [8, 32],
  },
  canine: {
    crown:
      'M12,46 C8.5,55 7.5,63 9.5,69.5 Q14,75.5 20,80 Q26,75.5 30.5,69.5 C32.5,63 31.5,55 28,46 Z',
    root: 'M12,47 C10.5,30 14.5,10 18.5,1.8 Q20,0 21.5,1.8 C25.5,10 29.5,30 28,47 Z',
    crownX: [7.5, 32.5],
  },
  premolar: {
    crown: 'M11,46 C7,52 5.5,62 7.5,70 Q10,78.5 20,79.5 Q30,78.5 32.5,70 C34.5,62 33,52 29,46 Z',
    root: 'M12,47 C11.5,30 15.5,12 19,4 Q20,2.2 21,4 C24.5,12 28.5,30 28,47 Z',
    crownX: [5.5, 34.5],
  },
  molar: {
    crown:
      'M7,46 C3,52 2.5,62 3.5,70 Q4.5,78 11.5,79 Q16,80 20,77.5 Q24,80 28.5,79 Q35.5,78 36.5,70 C37.5,62 37,52 33,46 Z',
    root: 'M8,47 C5.5,34 6.5,18 9.5,6 Q11.5,2.5 13.5,6 C15,18 16.5,29 20,35 C23.5,29 25,18 26.5,6 Q28.5,2.5 30.5,6 C33.5,18 34.5,34 32,47 Z',
    crownX: [2.5, 37.5],
  },
}

function kindOf(fdi: number): Kind {
  const p = fdi % 10
  if (p <= 2) return 'incisor'
  if (p === 3) return 'canine'
  if (p <= 5) return 'premolar'
  return 'molar'
}

const TREATED = '#bbf7d0'
const TREATED_STROKE = '#4d9468'
const MARK = '#EE4B00' // accent da landing

type Tooth = {
  fdi: number
  treated?: boolean
  /** Face marcada na vista vestibular. */
  face?: 'occlusal' | 'vestibular'
}

// Hemiarcada superior direita, do 17 ao 11 (como aparece no odontograma).
const TEETH: Tooth[] = [
  { fdi: 17 },
  { fdi: 16, treated: true },
  { fdi: 15 },
  { fdi: 14, face: 'occlusal' },
  { fdi: 13 },
  { fdi: 12, face: 'vestibular' },
  { fdi: 11 },
]

const BUDGET = [
  { fdi: 14, proc: 'Restauração em resina', face: 'Oclusal', value: 'R$ 280,00' },
  { fdi: 12, proc: 'Restauração em resina', face: 'Vestibular', value: 'R$ 250,00' },
]

const STEP = 46

function ToothDrawing({ tooth, index }: { tooth: Tooth; index: number }) {
  const shape = SHAPES[kindOf(tooth.fdi)]
  const [x0, x1] = shape.crownX
  const w = x1 - x0
  const side = w * 0.24
  const top = 45
  const cervH = 6
  const occH = 8
  const region =
    tooth.face === 'occlusal'
      ? { x: x0 + side, y: 80 - occH, width: w - 2 * side, height: occH }
      : tooth.face === 'vestibular'
        ? { x: x0 + side, y: top + cervH, width: w - 2 * side, height: 80 - top - cervH - occH }
        : null
  const stroke = tooth.treated ? TREATED_STROKE : '#9aa4b2'
  const clipId = `crown-${tooth.fdi}`

  return (
    <g transform={`translate(${index * STEP + 3}, 6)`}>
      <defs>
        <clipPath id={clipId}>
          <path d={shape.crown} />
        </clipPath>
      </defs>
      <path d={shape.root} fill={tooth.treated ? TREATED : '#f4ead6'} stroke={stroke} strokeWidth={0.9} />
      <path d={shape.crown} fill={tooth.treated ? TREATED : '#fffdf7'} />
      {region && (
        <rect {...region} fill={MARK} fillOpacity={0.85} clipPath={`url(#${clipId})`} />
      )}
      <path d={shape.crown} fill="none" stroke={stroke} strokeWidth={0.9} />

      {/* Diagrama de 5 faces (vista oclusal esquemática), como no app. */}
      <g transform="translate(6, 90) scale(0.875)">
        {(
          [
            ['top', '0,0 32,0 22,10 10,10', tooth.face === 'vestibular'],
            ['bottom', '0,32 32,32 22,22 10,22', false],
            ['left', '0,0 10,10 10,22 0,32', false],
            ['right', '32,0 22,10 22,22 32,32', false],
            ['center', '10,10 22,10 22,22 10,22', tooth.face === 'occlusal'],
          ] as const
        ).map(([key, points, marked]) => (
          <polygon
            key={key}
            points={points}
            fill={marked ? MARK : tooth.treated ? TREATED : '#ffffff'}
            stroke={stroke}
            strokeWidth={0.9}
          />
        ))}
      </g>

      <text
        x={20}
        y={134}
        textAnchor="middle"
        className="font-mono"
        fontSize={9.5}
        fontWeight={tooth.face ? 600 : 400}
        fill={tooth.face ? '#C23A00' : '#5A6B80'}
      >
        {tooth.fdi}
      </text>
    </g>
  )
}

export function OdontoBudgetMockup() {
  const width = TEETH.length * STEP + 2
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-24px_rgba(20,29,35,0.2),0_0_0_1px_rgba(20,29,35,0.06)]">
        {/* Odontograma */}
        <div className="flex items-center justify-between border-b border-ink/5 px-5 py-3.5 sm:px-6">
          <p className="stamp text-[9px] text-ink-500">Odontograma · permanente</p>
          <span className="stamp rounded-full bg-accent/10 px-2.5 py-1 text-[8.5px] text-accent-dark">
            2 achados
          </span>
        </div>
        <div className="px-5 pb-4 pt-5 sm:px-6">
          <svg
            viewBox={`0 0 ${width} 140`}
            className="h-auto w-full"
            role="img"
            aria-label="Odontograma com os dentes 14 e 12 marcados e o dente 16 tratado"
          >
            {TEETH.map((t, i) => (
              <ToothDrawing key={t.fdi} tooth={t} index={i} />
            ))}
          </svg>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-accent" /> Marcado por face
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm ring-1 ring-[#4d9468]" style={{ background: TREATED }} />{' '}
              Tratado
            </span>
          </div>
        </div>

        {/* Orçamento gerado a partir das marcações */}
        <div className="border-t border-dashed border-ink/10 bg-paper px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="stamp text-[9px] text-ink-500">Orçamento · do odontograma</p>
            <span className="stamp inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[8.5px] text-ink-700 ring-1 ring-ink/[0.08]">
              PDF
            </span>
          </div>
          <ul className="mt-4 space-y-2.5">
            {BUDGET.map((item) => (
              <li
                key={item.fdi}
                className="flex items-center gap-3 rounded-lg bg-white px-3 py-2.5 ring-1 ring-ink/[0.05]"
              >
                <span className="stamp flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-[11px] font-medium text-accent-dark">
                  {item.fdi}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-semibold leading-tight text-ink">
                    {item.proc}
                  </p>
                  <p className="text-[11px] leading-tight text-ink-500">Face {item.face}</p>
                </div>
                <span className="text-[12.5px] font-medium tabular-nums text-ink">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-baseline justify-between border-t border-ink/10 pt-3">
            <span className="text-[12px] text-ink-500">Total combinado</span>
            <span className="text-[15px] font-semibold tabular-nums text-ink">R$ 530,00</span>
          </div>
        </div>
      </div>
    </div>
  )
}
