import React from 'react';

const teamMembers = [
  {
    name: "Shane Mason",
    role: "Master craftsman and owner",
    experience: "25+ years",
    specialization: "Welding/fabrication and custom work",
    image: "/empty.svg",
  },
  {
    name: "Declan Mason",
    role: "Body and Paint specialist",
    experience: "15+ years",
    image: "/declan.jpeg",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skilled craftsmen and restoration specialists dedicated to bringing your classic car back to life.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          gap-8 
          max-w-4xl 
          mx-auto 
        ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-xl shadow-md 
                         overflow-hidden hover:shadow-[0_0_25px_rgba(139,26,26,0.7)] 
                         transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-square bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-[#8b1a1a] font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>

                {member.specialization && (
                  <p className="text-sm text-muted-foreground">
                    {member.specialization}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeetOurTeam;
