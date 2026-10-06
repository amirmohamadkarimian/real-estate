export type Property = {
  badge: string
  title: string
  location: string
  beds: string
  baths: string
  area: string
  image: string
  alt: string
}

export const PROPERTIES: Property[] = [
  {
    badge: 'Ready to Move',
    title: 'Skyline Residences',
    location: 'Kochi, Kerala',
    beds: '3 Beds',
    baths: '3 Baths',
    area: '1,850 Sq Ft',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern multi-storey apartment building at golden hour',
  },
  {
    badge: 'Premium',
    title: 'The Green Villas',
    location: 'Calicut, Kerala',
    beds: '4 Beds',
    baths: '4 Baths',
    area: '2,600 Sq Ft',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    alt: 'Contemporary luxury villa with landscaped grounds',
  },
  {
    badge: 'New Launch',
    title: 'Aurevia Heights',
    location: 'Trivandrum, Kerala',
    beds: '2 Beds',
    baths: '2 Baths',
    area: '1,200 Sq Ft',
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Contemporary residential apartment building with clean lines',
  },
]
