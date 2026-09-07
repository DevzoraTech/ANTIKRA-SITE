import { MapPin } from "lucide-react"
import travelImg from "../../../assets/home/travel-img.png"

export function BuiltFromAfricaSection() {
  return (
    <section className="relative isolate min-h-[390px] overflow-hidden border-b border-black/10 bg-[#f7f1e8]">
      <img
        src={travelImg}
        alt="Kampala skyline at dusk"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_50%]"
      />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,#f7f1e8_0%,rgba(247,241,232,0.94)_28%,rgba(247,241,232,0.18)_56%,rgba(247,241,232,0)_100%)] md:block" />
      <div className="absolute inset-y-0 left-0 -z-10 hidden w-[54%] bg-[radial-gradient(ellipse_at_78%_50%,rgba(247,241,232,0)_0%,rgba(247,241,232,0.96)_62%,#f7f1e8_78%)] md:block" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(247,241,232,0.5)_0%,rgba(247,241,232,0.88)_55%,#f7f1e8_100%)] md:hidden" />

      <div className="mx-auto flex min-h-[390px] w-full max-w-[1500px] items-center px-8 py-12 md:px-12 xl:px-[72px]">
        <div>
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            08 / Built from Africa
          </p>
          <h2 className="mt-5 font-display text-[3.1rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[#15110f] md:text-[3.9rem]">
            Built here.
            <br />
            Designed to travel.
          </h2>
          <div className="mt-5 h-px w-8 bg-[#9a6d23]" />
          <div className="mt-5 flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 text-[#9a6d23]" strokeWidth={1.7} />
            <div>
              <p className="font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.12em] text-[#151515]">
                Kampala, Uganda
              </p>
              <p className="mt-1 text-[0.68rem] text-[#151515]/56">
                0.3476° N, 32.5825° E
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
