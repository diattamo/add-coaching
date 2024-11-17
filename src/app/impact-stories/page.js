/* eslint-disable react/no-unescaped-entities */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Stories() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
      {/* Page Header Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-[var(--secondary)]">
            Aminata Diatta - Impact Through Stories
          </h1>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[var(--secondary)]">
            What People Are Saying
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <Carousel className="relative">
              <CarouselContent className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="relative transition-transform duration-500"
                  >
                    <div className="p-4">
                      <Card className="rounded-xl shadow-lg justify-center">
                        <CardContent className="flex h-64 md:h-72 lg:h-80 w-full max-w-2xl items-center justify-center p-6">
                          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 italic text-center">
                            "Testimonial Quote #{index + 1} - Aminata’s coaching
                            transformed my perspective and approach to challenges."
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Navigation Buttons */}
              <CarouselPrevious
                className="absolute top-1/2 left-[-40px] -translate-y-1/2 bg-gray-700 text-white rounded-full p-3"
              />
              <CarouselNext
                className="absolute top-1/2 right-[-40px] -translate-y-1/2 bg-gray-700 text-white rounded-full p-3"
              />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Transitional Quote Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <div className="container mx-auto">
          <p className="text-2xl italic text-gray-700">
            "Our approach blends empathy, strategy, and impact to create
            transformational results."
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto space-y-16">
          {/* Case Study #1 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-full md:w-2/3 bg-[var(--secondary)] text-white h-64 flex items-center justify-center mb-6 md:mb-0">
              <p className="text-xl font-bold text-center">Case Study #1</p>
            </div>
            <div className="w-full md:w-1/3">
              <ol className="list-decimal list-inside text-lg space-y-2 text-center md:text-left">
                <li>Ask</li>
                <li>Process</li>
                <li>Impact</li>
              </ol>
            </div>
          </div>

          {/* Case Study #2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
            <div className="w-full md:w-2/3 bg-[var(--secondary)] text-white h-64 flex items-center justify-center mb-6 md:mb-0">
              <p className="text-xl font-bold text-center">Case Study #2</p>
            </div>
            <div className="w-full md:w-1/3">
              <ol className="list-decimal list-inside text-lg space-y-2 text-center md:text-left">
                <li>Ask</li>
                <li>Process</li>
                <li>Impact</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
