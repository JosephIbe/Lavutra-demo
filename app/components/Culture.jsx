import CultureCard from './ui/culture_card';

export default function Culture () {

    const cultureItems = [
      {
        title: "TRADITIONAL ATTIRE",
        description: "Explore the vibrant textiles and modern interpretations of African fashion",
        image: "/images/traditional_attire.jpg",
        alt: "African women in vibrant Ankara dresses at a festival"
      },
      {
        title: "CULINARY ARTS",
        description: "From jollof wars to fusion cuisine celebrating African flavors",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
        alt: "Traditional West African jollof rice meal"
      },
      {
        title: "CONTEMPORARY RITES",
        description: "How modern Africans are reinventing traditional ceremonies",
        image: "/images/modern_tradition.jpg",
        alt: "Modern African wedding blending traditions"
      }
   ];

    return (
        <section id="culture" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-center mb-16 text-gold-500">
                    AFRICAN CULTURE REIMAGINED
                </h2>
            
                <div className="grid md:grid-cols-3 gap-8">
                    {cultureItems.map((item, index) => (
                      <CultureCard key={index} {...item} />
                    ))}
                </div>
            </div>
      </section>
    )

}