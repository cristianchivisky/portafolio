import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10 lg:px-20 lg:py-10">        
        <section id="projects">
          <Projects />
        </section>

    </div>
  );
}
