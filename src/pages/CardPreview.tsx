import Tile from '../components/Tile';

// 456m logo with aka 5 (red five) as the front-center tile.
// Parameterized by tileSize. Positions scale proportionally.
function FannedTiles456m({ tileSize = 95 }: { tileSize?: number }) {
  const tileH = tileSize * 1.32;
  const overlap = tileSize * 0.15; // tile-to-tile overlap
  const middleX = tileSize * 1.5 - tileSize / 2;
  const leftX = middleX - (tileSize - overlap);
  const rightX = middleX + (tileSize - overlap);
  const containerW = rightX + tileSize + tileSize * 0.1;
  const containerH = tileH * 1.15;
  const baseY = (containerH - tileH) / 2 + tileH * 0.05;
  const frontY = baseY - tileH * 0.05;
  return (
    <div style={{
      position: 'relative',
      width: containerW,
      height: containerH,
    }}>
      <div style={{ position: 'absolute', left: leftX, top: baseY, zIndex: 1 }}>
        <Tile name="4m" size={tileSize} tilt={-5} />
      </div>
      <div style={{ position: 'absolute', left: rightX, top: baseY, zIndex: 1 }}>
        <Tile name="6m" size={tileSize} tilt={5} />
      </div>
      <div style={{ position: 'absolute', left: middleX, top: frontY, zIndex: 2 }}>
        <Tile name="0m" size={tileSize} tilt={0} />
      </div>
    </div>
  );
}

// Standalone display version with crimson-paper backdrop, used in the logo gallery.
function FannedTiles456mStandalone() {
  return (
    <div style={{
      position: 'relative',
      width: 400,
      height: 400,
      background: '#FBF7F0',
      borderRadius: 12,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <FannedTiles456m tileSize={95} />
    </div>
  );
}

// Front of the business card, React-rendered for live iteration.
// Print dimensions: 3.5" × 2" = 1050 × 600 px @ 300dpi.
// Preview here is at 1.5× screen scale (525 × 300) for easy viewing.
function CardFrontV3() {
  return (
    <div style={{
      position: 'relative',
      width: 525,
      height: 300,
      background: 'linear-gradient(135deg, #FBF7F0 0%, #F4EFE6 100%)',
      borderRadius: 4,
      boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
      overflow: 'hidden',
      fontFamily: 'Georgia, "Times New Roman", serif',
    }}>
      {/* thin crimson hairline at left */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: 3, height: '100%',
        background: '#9E1B32',
      }} />

      {/* logo - left side, vertically centered */}
      <div style={{
        position: 'absolute',
        left: 26, top: '50%',
        transform: 'translateY(-50%)',
      }}>
        <FannedTiles456m tileSize={50} />
      </div>

      {/* text stack - right side */}
      <div style={{ position: 'absolute', left: 230, top: 56 }}>
        <h1 style={{
          margin: 0,
          fontSize: 48,
          fontWeight: 600,
          color: '#1a1a1a',
          letterSpacing: '-1.5px',
          lineHeight: 1,
          fontFamily: 'Georgia, serif',
        }}>Crimson Tiles</h1>
        <p style={{
          margin: '8px 0 0',
          fontSize: 15,
          color: '#9E1B32',
          fontStyle: 'italic',
          letterSpacing: '0.5px',
        }}>riichi mahjong · the university of alabama</p>
        <hr style={{
          width: 70,
          height: 1,
          background: '#9E1B32',
          border: 'none',
          marginTop: 14,
          marginLeft: 0,
          opacity: 0.5,
        }} />
        <p style={{
          margin: '14px 0 0',
          fontFamily: '"Courier New", monospace',
          fontSize: 13,
          color: '#666',
          letterSpacing: '0.3px',
        }}>crimson-tiles.github.io</p>
      </div>

      {/* QR placeholder bottom-right */}
      <div style={{
        position: 'absolute', right: 26, bottom: 26,
        width: 64, height: 64,
        background: '#FFFCF6',
        border: '1.5px solid #1a1a1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 9,
        color: '#888',
        fontStyle: 'italic',
        fontFamily: 'Georgia, serif',
      }}>QR</div>
    </div>
  );
}

export default function CardPreview() {
  return (
    <main style={{
      maxWidth: 1200,
      margin: '0 auto',
      padding: '32px 24px',
      fontFamily: 'Georgia, serif',
    }}>
      <h1 style={{ color: 'var(--crimson)', marginBottom: 8 }}>GOBD business card preview</h1>
      <p style={{ color: '#666', marginBottom: 32, fontStyle: 'italic' }}>
        WIP. front + back at print scale (3.5"×2"). QR code is a placeholder.
      </p>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ marginBottom: 12, fontSize: 18, color: '#444' }}>front (React-rendered, live)</h2>
        <p style={{ color: '#666', marginBottom: 16, fontSize: 13, fontStyle: 'italic' }}>
          uses the real <code>&lt;Tile&gt;</code> sprite for the logo. iterating on layout proportions in this section — the static SVG version is stale.
        </p>
        <div style={{
          background: '#f0ede5',
          padding: 24,
          borderRadius: 8,
          display: 'inline-block',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        }}>
          <CardFrontV3 />
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ marginBottom: 12, fontSize: 18, color: '#444' }}>back</h2>
        <div style={{
          background: '#f0ede5',
          padding: 24,
          borderRadius: 8,
          display: 'inline-block',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        }}>
          <img
            src={`${import.meta.env.BASE_URL}card-design/business-card-back.svg`}
            alt="Crimson Tiles business card — back"
            style={{ display: 'block', width: 525, height: 300 }}
          />
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ marginBottom: 12, fontSize: 18, color: '#444' }}>both sides at 1× (real size)</h2>
        <p style={{ color: '#666', marginBottom: 16, fontSize: 14 }}>
          if your monitor is at standard ~96dpi, this is roughly the physical card size.
          on hi-dpi displays it'll look smaller than a real card.
        </p>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{
            background: '#f0ede5',
            padding: 16,
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}card-design/business-card-front.svg`}
              alt="front 1x"
              style={{ display: 'block', width: 336, height: 192 }}
            />
            <p style={{ fontSize: 12, color: '#888', marginTop: 8, textAlign: 'center' }}>front · 3.5"×2"</p>
          </div>
          <div style={{
            background: '#f0ede5',
            padding: 16,
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}card-design/business-card-back.svg`}
              alt="back 1x"
              style={{ display: 'block', width: 336, height: 192 }}
            />
            <p style={{ fontSize: 12, color: '#888', marginTop: 8, textAlign: 'center' }}>back · 3.5"×2"</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ marginBottom: 8, fontSize: 24, color: 'var(--crimson)' }}>logo concepts</h2>
        <p style={{ color: '#666', marginBottom: 24, fontSize: 14, fontStyle: 'italic' }}>
          four directions to compare. pick one (or none) and we iterate. all SVG, all in <code>card-design/logo-options/</code>.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>

          <div style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <img
              src={`${import.meta.env.BASE_URL}card-design/logo-options/01-onepin-emblem.svg`}
              alt="1-pin emblem logo"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
            <h3 style={{ marginTop: 16, marginBottom: 6, fontSize: 16, color: '#1a1a1a' }}>1 — 1-pin emblem</h3>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>
              The iconic 1-pin tile. Feels traditional and ornate. Ties directly to the v2 card hero — same mark, scaled up. Generic-friendly: works for non-players too.
            </p>
          </div>

          <div style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <img
              src={`${import.meta.env.BASE_URL}card-design/logo-options/02-chun-dragon.svg`}
              alt="Chun (red dragon 中) logo"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
            <h3 style={{ marginTop: 16, marginBottom: 6, fontSize: 16, color: '#1a1a1a' }}>2 — 中 / red dragon</h3>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>
              The chun tile. Most distinctively riichi of any single tile face. Instantly readable to anyone who plays. Risk: non-players see "Chinese character" and bounce.
            </p>
          </div>

          <div style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <FannedTiles456mStandalone />
            <h3 style={{ marginTop: 16, marginBottom: 6, fontSize: 16, color: '#1a1a1a' }}>3 — fanned 456m (aka 5)</h3>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>
              Classic riichi run — 4-5-6 of man (萬) with the aka 5 (red 五) modifier, gently fanned. Uses the website's real <code>tiles.png</code> sprite via the <code>&lt;Tile&gt;</code> component, so the typography matches the mahjong tile aesthetic exactly. Distinct from the standard chun-logo most riichi clubs default to.
            </p>
          </div>

          <div style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <img
              src={`${import.meta.env.BASE_URL}card-design/logo-options/04-ct-monogram.svg`}
              alt="CT monogram logo"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
            <h3 style={{ marginTop: 16, marginBottom: 6, fontSize: 16, color: '#1a1a1a' }}>4 — CT monogram</h3>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>
              Tile-framed letterform. Letter-driven mark, no game-knowledge required to read. Most "logo-shaped" of the four — clearly a brand mark, not just an illustration.
            </p>
          </div>

        </div>
      </section>

      <section style={{
        background: '#fafafa',
        padding: 24,
        borderRadius: 8,
        border: '1px solid #e0e0e0',
      }}>
        <h2 style={{ marginBottom: 12, fontSize: 18, color: '#444' }}>edit notes</h2>
        <ul style={{ lineHeight: 1.7, color: '#444', fontSize: 14 }}>
          <li>SVG sources at <code>card-design/business-card-front.svg</code> and <code>business-card-back.svg</code> (committed copies in <code>public/card-design/</code> for vite to serve)</li>
          <li>open in Inkscape (free) or Figma to edit</li>
          <li>QR code on front is a placeholder — generate a real one at qr-code-generator.com pointing to <code>https://crimson-tiles.github.io</code> and replace the placeholder group</li>
          <li>before sending to print: add 0.125" bleed (canvas → 1087.5×637.5px) and crop marks</li>
          <li>print stock: uncoated for handmade-serious feel; gloss for corporate-clean</li>
          <li>uses existing site crimson tokens: #9E1B32 / #772432 / cream #FAF6F0</li>
        </ul>
      </section>
    </main>
  );
}
