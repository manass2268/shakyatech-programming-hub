// src/app/about/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutInstitute() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#081839]">About Our Institute</h1>
        <section className="mt-8 space-y-6">
           <h2 className="text-2xl font-semibold">Our Mission</h2>
           <p>Education with practical knowledge...</p>
           <h2 className="text-2xl font-semibold">Our Trainers</h2>
           <p>Expert professionals from the IT industry...</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}