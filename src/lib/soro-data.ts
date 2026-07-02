import nigerianUniversities from "../../nigerian_universities.json"

type UniversityRecord = {
  name: string
  state: string
}

const uniqueUniversities = (nigerianUniversities as UniversityRecord[]).filter(
  (university, index, allUniversities) =>
    allUniversities.findIndex((candidate) => candidate.name === university.name) === index,
)

const sortedUniversities = [...uniqueUniversities].sort((left, right) => {
  if (left.state === right.state) {
    return left.name.localeCompare(right.name)
  }

  return left.state.localeCompare(right.state)
})

export const UNIVERSITIES = [
  ...uniqueUniversities.map((university) => ({ value: university.name, label: university.name })),
  { value: "Other", label: "Other" },
]

export const UNIVERSITY_STATE_GROUPS = sortedUniversities.reduce<
  { state: string; universities: { value: string; label: string }[] }[]
>((groups, university) => {
  const currentGroup = groups[groups.length - 1]

  if (!currentGroup || currentGroup.state !== university.state) {
    groups.push({
      state: university.state,
      universities: [{ value: university.name, label: university.name }],
    })
    return groups
  }

  currentGroup.universities.push({ value: university.name, label: university.name })
  return groups
}, [])

export const UNIVERSITY_TAGS = [
  "UI",
  "UNILAG",
  "OAU",
  "UNIBEN",
  "ABU",
  "UNN",
  "LASU",
  "Covenant",
  "FUTA",
  "UNIPORT",
]

const NAMES = [
  "Theresa O.",
  "Tunde A.",
  "Amaka E.",
  "Ibrahim S.",
  "Folake B.",
  "Emeka N.",
  "Aisha M.",
  "Seyi O.",
  "Ngozi U.",
  "Yusuf A.",
  "Blessing I.",
  "Damilola K.",
  "Chukwuemeka D.",
  "Halima B.",
  "Oluwaseun T.",
  "Zainab A.",
  "Kelechi N.",
  "Temitope F.",
  "Bashir M.",
  "Adaeze C.",
]

const TICKER_UNIS = ["UI", "UNILAG", "OAU", "UNIBEN", "ABU", "UNN", "LASU", "FUTA", "UNIPORT"]

type TickerItem = { id: number; type: "joined" | "earned"; name: string; uni: string; amount?: string }

export function buildTickerItems(): TickerItem[] {
  const items: TickerItem[] = []
  const amounts = ["₦300", "₦600", "₦1,000", "₦1,200", "₦2,400", "₦5,000"]
  for (let i = 0; i < 16; i++) {
    const name = NAMES[i % NAMES.length]
    const uni = TICKER_UNIS[i % TICKER_UNIS.length]
    if (i % 2 === 0) {
      items.push({ id: i, type: "joined", name, uni })
    } else {
      items.push({ id: i, type: "earned", name, uni, amount: amounts[i % amounts.length] })
    }
  }
  return items
}

export const CHAT_SCRIPT: { question: string; answer: string; earn: number }[] = [
  {
    question: "When you send money to a friend, which app do you reach for first — and why that one?",
    answer: "OPay, honestly. Transfers land instantly and the fees are tiny compared to my bank app.",
    earn: 300,
  },
  {
    question: "What almost made you stop using it in the first month?",
    answer: "The app logged me out a lot and verification took two tries. I nearly gave up before it clicked.",
    earn: 300,
  },
  {
    question: "If a new bank app gave you free ₦500 to try it, would you actually switch?",
    answer: "Only if my friends were on it too and the charges are low.",
    earn: 300,
  },
]
