import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const links = {
  youtube: 'https://www.youtube.com/channel/UCdFl5aaezIAVW38NoyrA9qA',
  github: 'https://github.com/under18dev',
  x: 'https://x.com/under18dev',
  contact: 'https://forms.gle/BGeqHNHgfaSJznnA7',
  connpass: 'https://under18dev.connpass.com'
} as const

const ease = [0.16, 1, 0.3, 1] as const

function RevealSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
    >
      {children}
    </a>
  )
}

function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
    >
      {children}
    </a>
  )
}

export function HomePage() {
  return (
    <div className="relative isolate min-h-dvh">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link
            to="/"
            className="font-display text-sm font-semibold tracking-tight text-foreground"
          >
            U18 Dev
          </Link>
          <nav className="hidden items-center gap-8 sm:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#activities">Activities</NavLink>
            <NavLink href="#vision">Vision</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Under18 Developers
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-foreground">
            Building the next generation of developers.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            18歳以下の開発者が、
            <br className="hidden sm:block" />
            もっと挑戦できる場所を。
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-deep md:text-[17px]">
            U18 Devは、若い技術者たちが学び、作り、発信し、挑戦できる技術コミュニティです。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#activities"
              className="inline-flex h-11 items-center justify-center border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/70 hover:text-foreground"
            >
              活動を見る
            </a>
            <ExternalLink
              href={links.youtube}
              className="inline-flex h-11 items-center justify-center border border-border bg-background px-5 text-sm font-medium text-muted transition-colors duration-200 hover:border-border hover:text-foreground"
            >
              YouTube
            </ExternalLink>
            <ExternalLink
              href={links.connpass}
              className="inline-flex h-11 items-center justify-center border border-accent/40 bg-accent/10 px-5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/70 hover:bg-accent/15"
            >
              コミュニティに参加
            </ExternalLink>
          </div>
        </section>

        <section
          id="about"
          className="border-t border-border bg-background-secondary/40"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <RevealSection>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
                About
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                挑戦機会の偏りに、技術で応える。
              </h2>
              <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-muted md:text-[17px]">
                <p>
                  U18 Devは、18歳以上向けの技術イベントやコミュニティは多い一方で、18歳以下向けの挑戦機会はまだ少ない、という課題意識から始まった組織です。
                </p>
                <p>
                  若い開発者が学べる、作れる、発信できる、登壇できる、挑戦できる場所を創ることを目的としています。
                </p>
              </div>
              <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  '学べる',
                  '作れる',
                  '発信できる',
                  '登壇できる',
                  '挑戦できる',
                ].map((item) => (
                  <li
                    key={item}
                    className="border border-border bg-card px-5 py-4 text-sm text-foreground"
                  >
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </RevealSection>
          </div>
        </section>

        <section id="activities" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <RevealSection>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Activities
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              活動領域
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              小さく始め、積み上げながら、次の形へ拡張していきます。
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: 'LT会',
                  body: '学生同士による技術発表イベント。短時間で集中して学び合う場です。',
                },
                {
                  title: '技術イベント（予定）',
                  body: '将来的なイベント開催。ワークショップや対談など、多様な形式を検討しています。',
                },
                {
                  title: 'YouTube',
                  body: '技術情報・イベント・開発コンテンツの発信。記録と再利用を重視した構成にしていきます。',
                },
                {
                  title: 'Open Source',
                  body: 'OSS活動や制作物の共有。透明性の高い協働を前提にした取り組みです。',
                },
                {
                  title: 'ハッカソン（構想）',
                  body: '将来的なハッカソン開催を見据え、ルール設計と安全な運営体制を準備中です。',
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col border border-border bg-card p-6 transition-colors duration-200 hover:border-muted-deep/80"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </RevealSection>
        </section>

        <section
          id="vision"
          className="border-t border-border bg-background-secondary/30"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <RevealSection>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Vision
              </p>
              <h2 className="mt-6 max-w-4xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-snug tracking-tight text-foreground">
                年齢によって挑戦機会が制限されない世界へ。
              </h2>
              <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-muted md:text-[17px]">
                <p>技術に年齢制限はない。</p>
                <p>作りたい人が、もっと挑戦できる場所を増やしたい。</p>
                <p>
                  U18 Devは、次世代の開発者たちが最初の一歩を踏み出せる場所を目指しています。
                </p>
              </div>
            </RevealSection>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              U18 Dev
            </p>
            <p className="mt-1 text-xs text-muted">
              Under18 Developers — 技術に、年齢の壁を置かない。
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            <ExternalLink
              href={links.github}
              className="transition-colors duration-200 hover:text-foreground"
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href={links.youtube}
              className="transition-colors duration-200 hover:text-foreground"
            >
              YouTube
            </ExternalLink>
            <ExternalLink
              href={links.x}
              className="transition-colors duration-200 hover:text-foreground"
            >
              X
            </ExternalLink>
            <ExternalLink
              href={links.contact}
              className="transition-colors duration-200 hover:text-foreground"
            >
              Contact
            </ExternalLink>
          </div>
        </div>
      </footer>
    </div>
  )
}
