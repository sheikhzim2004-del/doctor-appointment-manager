import { FaUserMd, FaClock, FaCalendarCheck, FaLock } from "react-icons/fa";

const features = [
  {
    icon: FaUserMd,
    title: "Verified Doctors",
    description: "All doctors are certified and background-checked for your safety",
    bg: "bg-[#0F766E]",
  },
  {
    icon: FaClock,
    title: "24/7 Support",
    description: "Our support team is available around the clock to assist you",
    bg: "bg-[#F59E0B]",
  },
  {
    icon: FaCalendarCheck,
    title: "Easy Booking",
    description: "Book an appointment with your preferred doctor in just a few clicks",
    bg: "bg-[#0F766E]",
  },
  {
    icon: FaLock,
    title: "Secure Payments",
    description: "Your payment information is encrypted and always protected",
    bg: "bg-[#F59E0B]",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CCFBF1] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#0F766E] font-bold">
              Why Choose Us
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#0F766E] bg-clip-text text-transparent">
              Care You Can{" "}
            </span>
            <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] bg-clip-text text-transparent">
              Trust
            </span>
          </h2>

          <p className="text-[#475569] text-base md:text-lg mt-4">
            Everything you need for a smooth and reliable healthcare experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-7 border border-[#E2E8F0] hover:border-[#0F766E] hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div
                  className={`${feature.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
