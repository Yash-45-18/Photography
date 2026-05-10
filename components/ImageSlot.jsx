import Image from 'next/image'

/**
 * ImageSlot — shows a placeholder until you set `src`.
 *
 * To add your image:
 *   1. Drop the file in /public/images/
 *   2. Pass src="/images/your-photo.jpg"
 *
 * Props:
 *   src   {string|null}   image path or URL (null = placeholder)
 *   alt   {string}        alt text / placeholder label
 *   fill  {boolean}       use Next.js fill mode (default true)
 *   sizes {string}        responsive sizes hint
 */
export default function ImageSlot({ src, alt = 'Image', fill = true, sizes = '100vw', priority = false }) {
  if (!src) {
    return (
      <div className="img-slot">
        <span className="img-slot-label">{alt}</span>
      </div>
    )
  }

  return (
    <div className="img-slot">
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          priority={priority}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      )}
    </div>
  )
}
