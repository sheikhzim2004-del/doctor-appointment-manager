import Banner from "@/components/shared/Banner";
import RatedDoctor from "@/components/ui/RatedDoctor";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <RatedDoctor></RatedDoctor>
      <h2 className="text-4xl py-20 text-teal-700 flex justify-center font-bold">Welcome to the Doctor Appointment Manager</h2>
    </div>
  );
}
