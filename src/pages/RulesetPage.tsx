import { useEffect } from 'react'

type Setting = { label: string; value: string }

const BASIC_SETTINGS: Setting[] = [
  { label: 'starting points', value: '25,000' },
  { label: 'target points', value: '30,000' },
  { label: 'south / west extension', value: 'on' },
  { label: 'red fives', value: 'on' },
  { label: 'abortive draws', value: 'on' },
  { label: 'double / triple ron', value: 'on' },
  { label: 'nagashi mangan', value: 'on' },
  { label: 'tobi (sub-zero ends game)', value: 'on' },
  { label: 'robbing a closed kan', value: 'kokushi musou ron only' },
  { label: 'kiriage mangan', value: 'off' },
  { label: 'double wind pair fu', value: '+4' },
  { label: 'uma', value: '20 / 10 / 0 / -10' },
  { label: 'time limit', value: 'none' },
]

const TRYHARD_SETTINGS: Setting[] = [
  { label: 'starting points', value: '30,000' },
  { label: 'target points', value: '30,000' },
  { label: 'south / west extension', value: 'off' },
  { label: 'red fives', value: 'off (on by mutual agreement)' },
  { label: 'abortive draws', value: 'off' },
  { label: 'double / triple ron', value: 'off' },
  { label: 'nagashi mangan', value: 'off' },
  { label: 'tobi', value: 'off (play continues sub-zero)' },
  { label: 'robbing a closed kan', value: 'off' },
  { label: 'kiriage mangan', value: 'on' },
  { label: 'double wind pair fu', value: '+2' },
  { label: 'uma', value: '15 / 5 / -5 / -15' },
  { label: 'time limit', value: '90 minutes' },
]

export default function RulesetPage() {
  useEffect(() => {
    document.title = 'Ruleset | Crimson Tiles'
  }, [])

  return (
    <main id="main-content" className="page">
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">ruleset</p>
          <h1 className="page-title">club rules.</h1>
          <p className="page-lede">
            two configurations. <strong>basic</strong> is what we run on most mondays — close to mahjong soul defaults.{' '}
            <strong>tryhard</strong> is for tournament prep and lines up roughly with WRC 2025.
          </p>
        </div>
      </header>

      <section className="page-section">
        <div className="container">
          <div className="standings-head">
            <h2 className="block-title">basic</h2>
            <span className="block-meta">default for club play</span>
          </div>

          <dl className="ruleset-grid">
            {BASIC_SETTINGS.map((s) => (
              <div key={s.label} className="ruleset-row">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="block-title block-title-2">notes</h3>
          <ul className="rules">
            <li>
              <strong>multiple ron:</strong> riichi sticks and honba bonus go to the winner closest to the deal-in in play order.
            </li>
            <li>
              <strong>kiriage off:</strong> 4 han 30 fu and 3 han 60 fu pay 7,700 (or 2,000 / 3,900 from non-dealer) and 11,600 (or 3,900 all from dealer) — not mangan.
            </li>
            <li>
              <strong>double wind fu:</strong> a yakuhai pair is normally +2 fu. if you're east and the round is east, it counts double (+4).
            </li>
            <li>no draws left in the wall, no riichi.</li>
            <li>can't afford the 1,000 stick? can't call riichi.</li>
            <li>at all-last exhaustive draw, unclaimed riichi sticks on the table go to whoever finishes first by final score.</li>
            <li>kandora is revealed immediately after open, added, and closed kan — before discarding.</li>
            <li>renhou is a yakuman.</li>
            <li>13-sided kokushi, 9-sided chuuren, daisuushi, and suuanko tanki are double yakuman.</li>
            <li>tied scores split the uma.</li>
          </ul>

          <h3 className="block-title block-title-2">local yaku</h3>
          <ul className="local-yaku">
            <li>
              <div className="local-yaku-head">
                <span className="local-yaku-name">crimson tide</span>
                <span className="local-yaku-han">akadora sanshoku · 1 han</span>
              </div>
              <p>your hand contains all three red 5s. (so +4 han total.)</p>
            </li>
            <li>
              <div className="local-yaku-head">
                <span className="local-yaku-name">all crimson</span>
                <span className="local-yaku-han">kouiisou · yakuman</span>
              </div>
              <p>
                color-swapped ryuuiisou. your hand contains only 2/3/4/6/8m or the red dragon. open question: should the red 5m count? we'll argue about it.
              </p>
            </li>
            <li>
              <div className="local-yaku-head">
                <span className="local-yaku-name">open riichi</span>
                <span className="local-yaku-han">2 han</span>
              </div>
              <p>
                when you call riichi, you may declare open riichi and reveal your full hand. no extra stick required. if a non-riichi player deliberately deals into you, the payout is yakuman.
              </p>
            </li>
          </ul>

          <div className="standings-head standings-head-2">
            <h2 className="block-title">tryhard</h2>
            <span className="block-meta">tournament practice · approximates wrc 2025</span>
          </div>

          <dl className="ruleset-grid">
            {TRYHARD_SETTINGS.map((s) => (
              <div key={s.label} className="ruleset-row">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="block-title block-title-2">notes</h3>
          <ul className="rules">
            <li>at all-last exhaustive draw, riichi sticks stay on the table — nobody claims them.</li>
            <li>renhou is a mangan, not a yakuman.</li>
            <li>
              <strong>chombo:</strong> the round restarts with no honba added. you don't pay out, but at score recording subtract 15 from your score after uma.
            </li>
            <li>
              <strong>agariyame off:</strong> at all-last, if you're the dealer and you win or you're tenpai at exhaustive draw, you have to dealer repeat — even if you're already in first.
            </li>
            <li>90-minute hanchan timer. when it runs out, the active hand becomes all-last.</li>
            <li>tied scores split the uma.</li>
          </ul>

          <p className="lb-source">
            spotted something off or want to argue a rule? bring it up in discord.
          </p>
        </div>
      </section>
    </main>
  )
}
