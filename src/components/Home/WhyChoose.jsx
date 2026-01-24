import React from "react";
import { FaClock, FaUsers, FaAward, FaShieldAlt, FaCarSide, FaTools} from "react-icons/fa";

export default function WhyChooseSection() {

    return (
        <section className="py-16 bg-[var(--brand-bgSoft)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-down">
                    <h2 className="text-4xl lg:text-5xl font-bold text-balance text-center text-gray-400 uppercase tracking-wider mb-4">
                        Why Choose Rods & Retros?
                    </h2>
                    <p className="text-xl mt-5 mb-10 max-w-2xl mx-auto text-center font-bold leading-tight">
                        A proud family-run workshop with over two decades of craftsmanship, passion, and tradition. As a father-and-son duo, Rods & Retros has built a reputation for award-winning paintwork, meticulous restorations, and specialist projects that bring vehicles back to life - from classic cars to custom camper vans.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    <Card
                        icon={<FaClock className="h-6 w-6 text-[var(--brand-green)]" />}
                        title="Family Run"
                        text="A trusted father-and-son team dedicated to quality, passion, and personalised service."
                    />
                    <Card
                        icon={<FaUsers className="h-6 w-6 text-[var(--brand-green)]" />}
                        title="20+ Years Experience"
                        text="Over two decades mastering the art of restoration, paintwork, and custom automotive builds."
                    />
                    <Card
                        icon={<FaAward className="h-6 w-6 text-[var(--brand-green)]" />}
                        title="Award-Winning Work"
                        text="Winners of multiple car competitions recognising craftsmanship, detailing, and unique finishes."
                    />
                    <Card
                        icon={<FaShieldAlt className="h-6 w-6 text-[var(--brand-green)]" />}
                        title="Paintwork Specialists"
                        text="Experts in all areas of automotive paint — from full resprays to flawless custom finishes."
                    />
                    <Card
                        icon={<FaCarSide className="h-6 w-6 text-[var(--brand-green)]" />}
                        title="Movie Car Experience"
                        text="Proud to have worked on multiple film-featured vehicles and high-end show builds."
                    />
                    <Card
                        icon={<FaTools className="h-6 w-6 text-[var(--brand-green)]" />}
                        title="Classic Car Restoration"
                        text="Specialists in restoring old motors and bringing iconic vehicles back to life."
                    />
                    <Card
                        icon={<FaCarSide className="h-6 w-6 text-[var(--brand-green)]" />}
                        title="Camper Van Experts"
                        text="From retro campers to full custom conversions — craftsmanship that transforms your van."
                    />
                </div>
            </div>
        </section>
    );
}

function Card({ icon, title, text }) {
    return (
        <div
            data-aos="zoom-in"
            tabIndex={0}
            className="
        flex flex-col gap-6 rounded-xl py-6 shadow-lg bg-zinc-900 text-center cursor-pointer
        transition-all duration-300
        hover:shadow-[#8b1a1a] hover:ring-2 hover:ring-[#8b1a1a]
        
        active:shadow-[#8b1a1a]active:ring-2 active:ring-[#8b1a1a]
        focus:ring-offset-2 focus:ring-offset-[#8b1a1a]
      "
        >
            <div className="px-6 pt-6">
                <div className="mx-auto w-12 h-12 bg-[var(--brand-greenSoft)] rounded-lg flex items-center justify-center mb-4">
                    {icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-[var(--brand-text)]">{title}</h3>
                <p className="text-sm text-[var(--brand-muted)]">{text}</p>
            </div>
        </div>
    );
}
