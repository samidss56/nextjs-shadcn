import { CarouselSize } from "@/components/CarouselDemo";
import Nav from "@/components/Nav";
import { ProfileForm } from "@/components/UserForm";

export default function Home() {
  return (
    <main className="p-10">
      <Nav />
      <section className="py-12 px-5 flex flex-col items-center text-center gap-8">
        <CarouselSize />
        <h1 className="text-4xl font-bold">Shadcn is Awesome</h1>
        <p className="text-2xl text-muted-foreground">
          Start your journey here
        </p>
      </section>
      <div className="flex flex-col gap-4">
        <ProfileForm />
      </div>
    </main>
  );
}
