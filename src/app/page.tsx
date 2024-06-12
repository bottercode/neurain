import { Location } from '@/public/assets/svg/Location';
import { Navbar } from '@/src/components/Navbar';
import { FormComponent } from '@/src/components/FormComponent';
import { GeneratedPrompt } from '@/src/components/GeneratedPrompt';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <section className="relative mb-4 flex flex-col items-center justify-center py-16 sm:py-24 md:py-32 text-gray-900">
          <div className="max-w-xl space-y-4 text-center px-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Research · Develop · Ship
            </h1>
            <p className="text-gray-500 md:text-base dark:text-gray-400">
              Enter a location and title to research about the product&apos;s
              target market.
            </p>
            <div className="flex justify-center items-center gap-2">
              <Location />
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                New York, NY
              </span>
            </div>
          </div>
          <FormComponent />
        </section>
      </div>
      <GeneratedPrompt />
    </div>
  );
}
