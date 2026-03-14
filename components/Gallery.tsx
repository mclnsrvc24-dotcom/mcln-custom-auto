import Image from 'next/image'

interface GalleryItem {
  src: string
  alt: string
  label: string
  colSpan?: string
}

const galleryItems: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ceramic coated black BMW — McLN Custom Auto',
    label: 'Ceramic Coating',
    colSpan: 'lg:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
    alt: 'Full exterior detail on dark luxury coupe',
    label: 'Full Detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    alt: 'Wheel and brake detail close-up',
    label: 'Wheel Detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
    alt: 'Paint protection film installation on sports car',
    label: 'Paint Protection Film',
  },
  {
    src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Custom vinyl wrap — white sports car transformation',
    label: 'Vinyl Wrap',
    colSpan: 'lg:col-span-2',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-red-500" />
              <span className="text-red-400 text-[10px] tracking-[0.5em] uppercase font-body font-medium">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-white uppercase leading-tight">
              Our Work
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-neutral-500 hover:text-white text-xs tracking-[0.2em] uppercase font-body transition-colors duration-200 group"
          >
            Book Your Car
            <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
              →
            </span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative aspect-[4/3] overflow-hidden group bg-neutral-900 ${
                item.colSpan ?? ''
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes={
                  item.colSpan
                    ? '(max-width: 1024px) 100vw, 66vw'
                    : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                }
              />

              {/* Base overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Label — slides up from bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <span className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  {item.label}
                </span>
              </div>

              {/* Corner bracket accent */}
              <div className="absolute top-4 right-4 w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-[1.5px] border-l-[1.5px] border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
