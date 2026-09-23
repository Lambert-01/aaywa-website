export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-aaywa grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-2xl font-black tracking-[0.16em]">AAYWA</div>
          <p className="mt-4 max-w-xl text-white/70">
            Transforming the lives of young African women from subsistence farming
            to sustainable agribusiness.
          </p>
        </div>

        <div>
          <div className="font-bold">Explore</div>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <a className="block hover:text-white" href="#about">About</a>
            <a className="block hover:text-white" href="#work">Our Work</a>
            <a className="block hover:text-white" href="#impact">Impact</a>
            <a className="block hover:text-white" href="#values">Values</a>
          </div>
        </div>

        <div>
          <div className="font-bold">Connect</div>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <a className="block hover:text-white" href="#join">Join AAYWA</a>
            <a className="block hover:text-white" href="#join">Partner With Us</a>
            <a className="block hover:text-white" href="#join">Contact</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-aaywa flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} AAYWA. All rights reserved.</span>
          <span>Built for women-led agricultural transformation in Africa.</span>
        </div>
      </div>
    </footer>
  );
}
