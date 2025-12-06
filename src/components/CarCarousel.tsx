interface CarCarouselProps {
  images: string[]
  currentIndex: number
  onSelect: (index: number) => void
}

export default function CarCarousel({ images, currentIndex, onSelect }: CarCarouselProps) {
  return (
    <div className="flex gap-3 mt-6 overflow-x-auto pb-10">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
            index === currentIndex ? "border-purple-500 shadow-lg shadow-purple-800" : "border-border hover:border-purple-500 cursor-pointer"
          }`}
        >
          <img src={image || "/placeholder.svg"} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
        </button>
      ))}
    </div>
  )
}
