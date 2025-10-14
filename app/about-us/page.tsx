import Footer from "@/elements/Footer";
import Navbar from "@/elements/Navbar";
import { founders } from "@/lib/mock/about";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  const inNumbers = [
    { title: "Successful Projects", number: 0, symbol: "", description: "" },
    { title: "Satisfied Clients", number: 0, symbol: "", description: "" },
    { title: "Avg. increase in sales", number: 0, symbol: "", description: "" },
    { title: "Cost Effeciency", number: 0, symbol: "", description: "" },
  ];

  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen h-auto px-4 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24">
        {/* HEADER */}
        <div className="flex justify-center items-center font-unbounded font-normal gap-2 w-fit uppercase">
          <div className="w-2 h-2 bg-primary rounded-full"></div> Get to Know us
          closely
        </div>
        <h1 className="font-unbounded text-3xl uppercase sm:text-4xl md:text-5xl text-white font-bold pt-6 pb-12 sm:pb-16 text-center md:text-left">
          Turning Visulization into reality
        </h1>
        <div className="flex h-[70vh] px-14 mb-14 w-full items-center justify-center">
          <div className="grid h-full w-full gap-6 p-2 grid-cols-4 grid-rows-4 shadow-md">
            {" "}
            <div className="col-span-1 row-span-2 bg-white shadow-md flex items-center justify-center">
              {" "}
              <Image
                src={"https://picsum.photos/1080/1080"}
                alt="image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />{" "}
            </div>{" "}
            <div className="col-span-2 row-span-2 bg-white shadow-md flex items-center justify-center">
              {" "}
              <h1 className="text-black text-7xl font-stretch font-bold uppercase text-center">
                Arinova Studio
              </h1>{" "}
            </div>{" "}
            <div className="col-span-1 row-span-3 bg-white text-black shadow-md flex items-center justify-center">
              {" "}
              <Image
                src={"https://picsum.photos/1080/1080"}
                alt="image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />{" "}
            </div>{" "}
            <div className="col-span-2 row-span-2 bg-white text-black shadow-md flex items-center justify-center">
              {" "}
              <Image
                src={"https://picsum.photos/1080/1080"}
                alt="image"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />{" "}
            </div>{" "}
            <div className="col-span-1 row-span-2 bg-white text-neutral-800 shadow-md flex items-start justify-center px-4 py-4 font-space text-base">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              culpa dolore, totam voluptatum harum hic quidem facere quae
              distinctio iste quos tempore iusto deserunt! Recusandae fugit
              doloribus dicta fuga dolorum!{" "}
            </div>{" "}
            <div className="col-span-1 row-span-1 bg-white text-black font-space text-3xl font-bold uppercase hover:text-5xl transition-all duration-300 cursor-hover shadow-md flex items-center justify-center">
              {" "}
              Get Quote{" "}
            </div>{" "}
          </div>
        </div>

        {/* MISSION / VISION / HISTORY */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0">
          <div className="md:w-1/3">
            <h1 className="text-white uppercase text-5xl sm:text-6xl md:text-7xl font-unbounded font-bold">
              OUR Mission
            </h1>
            <p className="text-base sm:text-lg mt-4 font-dm text-neutral-400 md:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae beatae, blanditiis placeat vitae reprehenderit quibusdam
              labore distinctio at.
            </p>
          </div>

          <div className="md:w-1/3">
            <h1 className="text-white uppercase text-5xl sm:text-6xl md:text-7xl font-unbounded font-bold">
              Our <br /> Vision
            </h1>
            <p className="text-base sm:text-lg mt-4 font-dm text-neutral-400 md:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae beatae, blanditiis placeat vitae reprehenderit quibusdam
              labore distinctio at.
            </p>
          </div>

          <div className="md:w-1/3">
            <h1 className="text-white uppercase text-5xl sm:text-6xl md:text-7xl font-unbounded font-bold">
              OUR <br /> History
            </h1>
            <p className="text-base sm:text-lg mt-4 font-dm text-neutral-400 md:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae beatae, blanditiis placeat vitae reprehenderit quibusdam
              labore distinctio at.
            </p>
          </div>
        </div>

        {/* IMPACT SECTION */}
        <div className="flex justify-center items-center font-unbounded font-normal pt-16 sm:pt-24 pb-4 gap-2 w-fit uppercase">
          <div className="w-2 h-2 bg-primary rounded-full"></div> But Why US?
        </div>

        <h1 className="font-unbounded uppercase text-5xl sm:text-6xl md:text-7xl text-white font-bold pb-8 sm:pb-12 text-center md:text-left">
          OUR impact <br /> in numbers
        </h1>

        <div className="w-full flex flex-wrap justify-center md:justify-start items-start gap-6 sm:gap-8 md:gap-12">
          <div className="w-full sm:w-[48%] md:w-[31%] h-80 sm:h-96 bg-neutral-200 p-6 text-black"></div>
          {inNumbers.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[48%] md:w-[31%] h-80 sm:h-96 bg-neutral-200 p-6 text-black flex flex-col justify-between items-start"
            >
              <h1 className="text-5xl sm:text-6xl font-bold font-unbounded">
                {item.number}
                <span className="text-primary font-medium">{item.symbol}</span>
              </h1>
              <div>
                <h1 className="font-bold text-3xl sm:text-4xl uppercase font-unbounded">
                  {item.title}
                </h1>
                <p className="text-sm mt-3 text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          <div className="w-full sm:w-[48%] md:w-[31%] h-80 sm:h-96 p-6 group flex justify-center items-center flex-col bg-primary transition-all">
            <LucideArrowRight
              className="-rotate-45"
              size={52}
              strokeWidth={1}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-space font-medium tracking-tight relative text-center mt-4">
              Request a call
            </h1>
          </div>
        </div>

        {/* FOUNDERS */}
        <div className="flex justify-center items-center font-unbounded font-normal pt-16 sm:pt-24 pb-4 gap-2 w-fit uppercase">
          <div className="w-2 h-2 bg-primary rounded-full"></div> How we manage
          operations smoothly?
        </div>

        <h1 className="font-unbounded uppercase text-5xl sm:text-6xl md:text-7xl text-white font-bold pb-8 sm:pb-12 text-center md:text-left">
          Meet the expert
        </h1>

        <div className="flex flex-wrap justify-center md:justify-between items-start w-full gap-6 sm:gap-8 md:gap-y-14">
          {founders.map((fnd, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[48%] md:w-[31%] h-[28rem] sm:h-[32rem] md:h-[36rem] relative overflow-hidden group"
            >
              <Image
                src={fnd.image.src}
                alt={fnd.name}
                fill
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 w-full h-full bg-purple-600/50 group-hover:translate-y-0 transition-all duration-500 translate-y-full flex justify-center items-center px-6 sm:px-8 md:px-12 flex-col">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-unbounded font-semibold">
                  {fnd.name}
                </h1>
                <h1 className="text-lg sm:text-xl font-cursive italic">
                  {fnd.position}
                </h1>
                <div className="w-full h-14 sm:h-16 mt-4 flex justify-center items-center gap-3 sm:gap-4">
                  {fnd.links.map((link) => (
                    <Link
                      href={link.url}
                      key={link.title}
                      className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-white rounded-full grid place-items-center"
                    >
                      <link.icon size={28} strokeWidth={2} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 w-full h-1/4 group-hover:opacity-0 transition-all duration-150 bg-gradient-to-t from-primary/80 to-primary/0 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl mt-10 sm:mt-14 font-unbounded font-semibold">
                  {fnd.name}
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl font-cursive italic">
                  {fnd.position}
                </h1>
              </div>
            </div>
          ))}

          <div className="w-full sm:w-[48%] md:w-[31%] h-[28rem] sm:h-[32rem] md:h-[36rem] relative bg-primary flex justify-center items-center flex-col text-center p-6">
            <h1 className="uppercase font-unbounded font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8">
              You can be here
            </h1>
            <p className="font-space text-sm sm:text-base text-white capitalize">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              obcaecati explicabo eligendi enim, error, hic ab corporis
              temporibus fuga tempora illo doloremque labore itaque ut dolor
              repudiandae officia at tempore?
            </p>
            <Link
              href={"mailto:career@arinova.studio"}
              className="uppercase w-64 sm:w-72 hover:w-80 transition-all duration-200 h-10 font-unbounded font-semibold text-lg sm:text-xl text-center my-10 bg-white text-primary group overflow-hidden relative px-4 py-1.5"
            >
              <h1 className="absolute left-1/6 group-hover:-left-full transition-all duration-500">
                Join our team
              </h1>
              <h1 className="text-base sm:text-lg transition-all duration-500 group-hover:left-3 absolute left-full">
                career@arinova.studio
              </h1>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="grid place-items-center mt-16">
          <h1 className="text-center font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold w-full sm:w-4/5 md:w-3/4 leading-tight sm:leading-[1.2] mt-10 mb-6 uppercase">
            Your{" "}
            <span className="bg-white text-black px-2 sm:px-4">vision</span>,
            our{" "}
            <span className="bg-white text-black px-2 sm:px-4">expertise.</span>{" "}
            <br />
            let&apos;s build something <br />{" "}
            <span className="bg-primary text-yellow-400 mix-blend-exclusion px-2 sm:px-4">
              increedible.
            </span>
          </h1>
          <Link
            href={"#"}
            className="text-lg sm:text-xl md:text-2xl font-space text-neutral-500 hover:text-white transition-all flex gap-2 justify-center items-center relative after:absolute after:inset-0 after:border-b after:border-white after:w-1/6 after:h-full hover:after:w-full after:transition-all after:duration-500 group"
          >
            Let&apos;s work together{" "}
            <span>
              <LucideArrowRight className="-rotate-45 text-primary group-hover:rotate-0 transition-all duration-700" />
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
