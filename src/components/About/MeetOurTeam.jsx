import React from 'react';

const teamMembers = [
  {
    name: "Mike Rodriguez",
    role: "Master Craftsman & Owner",
    experience: "25+ years",
    specialization: "Frame-off restorations and custom paint",
    image: "/empty.svg",
  },
  {
    name: "Sarah Thompson",
    role: "Paint Specialist",
    experience: "15+ years",
    specialization: "Color matching and precision spray work",
    image: "/empty.svg",
  },
  {
    name: "David Chen",
    role: "Mechanical Restoration",
    experience: "20+ years",
    specialization: "Engine rebuilds and drivetrain work",
    image: "/empty.svg",
  },
  {
    name: "Lisa Martinez",
    role: "Interior Specialist",
    experience: "12+ years",
    specialization: "Upholstery and trim restoration",
    image: "/empty.svg",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Skilled craftsmen and restoration specialists dedicated to bringing your classic car back to life.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-border/50 overflow-hidden"
            >
              <div className="aspect-square bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div data-slot="card-content" className="p-6">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-[#8b1a1a]  font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                <p className="text-sm text-muted-foreground text-pretty">{member.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
