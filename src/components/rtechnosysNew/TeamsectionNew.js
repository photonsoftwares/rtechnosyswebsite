import { Plus } from "lucide-react";

export default function TeamSectionNew() {
  const members = [
    {
      id: 1,
      name: "Ariana Collins",
      role: "Frontend Developer",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      position: "top-0 left-10", // 👈 adjust here
    },
    {
      id: 2,
      name: "Ariana Collins",
      role: "Frontend Developer",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      position: "top-10 left-[280px]",
    },
    {
      id: 3,
      name: "Ariana Collins",
      role: "Frontend Developer",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      position: "top-0 left-[550px]",
    },
    {
      id: 4,
      name: "Ariana Collins",
      role: "Frontend Developer",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      position: "top-10 left-[820px]",
    },
  ];

  return (
    <section className="relative w-full bg-white py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          Our Members
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4">
          Meet The Minds Behind
        </h2>
        <p className="italic font-serif text-3xl text-gray-800 mt-2">Rtechnosys</p>
        <p className="text-gray-500 font-medium text-lg font-sans mt-4">
          At Rtechnosys, our strength lies in our people. From creative UI/UX
          designers to experienced <br /> full-stack developers and strategic project
          managers—we work together to turn ideas into <br /> powerful digital
          solutions.
        </p>
      </div>

      {/* Cards (absolute positioned inside section) */}
      <div className="relative max-w-6xl mx-auto h-[450px]">
        {members.map((member) => (
          <div
            key={member.id}
            className={`absolute ${member.position} w-[220px]`}
          >
            {/* Card */}
            <div className="relative w-full h-[300px]">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Blue plus button */}
              <button className="absolute bottom-3 right-3 bg-blue-600 text-white rounded-full p-2 shadow-md hover:bg-blue-700">
                <Plus size={18} />
              </button>
            </div>
            {/* Name + Role */}
            <div className="text-center mt-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
