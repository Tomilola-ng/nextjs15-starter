import { LoaderIcon } from "lucide-react";

export default function Loading() {
  return (
    <section className="flexCenter h-dvh w-dvw">
      <LoaderIcon className="w-10 h-10 animate-spin" />
    </section>
  );
}
