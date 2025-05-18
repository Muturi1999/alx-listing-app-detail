import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { SAMPLE_LISTINGS } from '../constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="An Airbnb clone for ALX project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find your next stay</h1>
          <p className="text-gray-600">Discover amazing places to stay around the world</p>
        </header>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Featured Listings</h2>
            <Button 
              text="View All" 
              variant="outline" 
              size="small" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_LISTINGS.map((listing) => (
              <Card
                key={listing.id}
                id={listing.id}
                title={listing.title}
                description={listing.description}
                image={listing.image}
                price={listing.price}
                location={listing.location}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 ALX Listing App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}