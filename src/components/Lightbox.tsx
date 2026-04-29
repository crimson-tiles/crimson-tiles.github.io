import { useEffect } from 'react'
import type { MeetupItem } from '../config'

type Props = {
  items: MeetupItem[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ items, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    if (index === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handler)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = prevOverflow
    }
  }, [index, onClose, onPrev, onNext])

  if (index === null) return null
  const item = items[index]

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="photo viewer"
    >
      <button
        type="button"
        className="lightbox-btn lightbox-close"
        onClick={(e) => { e.stopPropagation(); onClose() }}
        aria-label="close"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox-btn lightbox-prev"
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            aria-label="previous"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M13 4 L7 10 L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>
          <button
            type="button"
            className="lightbox-btn lightbox-next"
            onClick={(e) => { e.stopPropagation(); onNext() }}
            aria-label="next"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M7 4 L13 10 L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>
        </>
      )}
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} />
        <figcaption className="lightbox-caption">{item.alt}</figcaption>
      </figure>
      {items.length > 1 && (
        <div className="lightbox-count">{index + 1} / {items.length}</div>
      )}
    </div>
  )
}
