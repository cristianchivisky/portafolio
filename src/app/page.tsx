import AboutMe from '@/components/AboutMe';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between p-10 lg:p-20">
        <section id="about">
          <AboutMe />
        </section>
      </div>
    </div>
  );
}
