import Image from 'next/image';

export default function CultureCard({ title, description, image }) {
    return (
      <div className="group relative overflow-hidden h-96">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 flex flex-col justify-end p-6">
          <h3 className="text-2xl text-gold-500 mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    );
  }