import { FiEdit2, FiX, FiUser, FiMail, FiPhone, FiCalendar, FiClock, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { IoMaleOutline } from "react-icons/io5";
import UpdateModal from "./UpdateModal";
import DeleteDialog from "./DeleteDialog";

const AppointmentCard = ({ appointment }) => {
  const { patientName, userEmail, phone, gender, doctorName, appointmentTime, appointmentDate } = appointment;

  const formatDate = (d) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const infoRows = [
    { icon: <FiUser />, label: "Patient name", value: patientName },
    { icon: <FiMail />, label: "Email", value: userEmail },
    { icon: <FiPhone />, label: "Phone", value: phone },
    { icon: <IoMaleOutline />, label: "Gender", value: gender },
  ];

  const getInitials = (patientName) => (patientName || "").split(" ").filter(Boolean).slice(0, 2).map(n => n[0]).join("").toUpperCase();



  return (
    <div className="bg-white rounded-[20px] border border-[#E2E8F0] overflow-hidden w-full">

      {/* Header */}
      <div className="bg-[#0F766E] px-7 py-5 relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#99F6E4]/10" />
        <div className="absolute right-10 top-10 w-14 h-14 rounded-full bg-[#99F6E4]/[0.07]" />
        <div className="relative flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#99F6E4]/20 border border-[#99F6E4]/30 flex items-center justify-center">
            <FiCalendar className="text-[#99F6E4] text-xl" />
          </div>
          <div>
            <p className="text-white font-medium text-[17px] m-0">Appointment Details</p>
            <p className="text-[#99F6E4] text-xs m-0">ApointEase — Booking summary</p>
          </div>
          <span className="ml-auto flex items-center gap-1.5 bg-green-400/20 border border-green-400/40 text-green-300 text-[11px] font-medium px-3 py-1 rounded-full whitespace-nowrap">
            <FiCheckCircle size={12} /> Confirmed
          </span>
        </div>
        <div className="relative flex gap-2 flex-wrap">
          {[
            { icon: <FiCalendar size={13} />, label: "Date", value: formatDate(appointmentDate) },
            { icon: <FiClock size={13} />, value: appointmentTime, label: "Time" },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5">
              <span className="text-[#99F6E4]">{icon}</span>
              <div>
                <span className="text-[10px] text-[#99F6E4]/70 block mb-0.5">{label}</span>
                <span className="text-[13px] text-white font-medium">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="px-7 py-5">

        {/* Section label */}
        <SectionLabel>Patient information</SectionLabel>
        <div className="flex flex-col gap-1.5 mb-5">
          {infoRows.map(({ icon, label, value }) => (
            <div key={label} className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#F0FDFA] hover:border-[#99F6E4] hover:translate-x-1 transition-all duration-150 cursor-default">
              <div className="w-[34px] h-[34px] rounded-lg bg-[#F0FDFA] border border-[#CCFBF1] group-hover:bg-[#0F766E] group-hover:border-[#0F766E] flex items-center justify-center flex-shrink-0 transition-all duration-150 text-[#0F766E] group-hover:text-white text-[15px]">
                {icon}
              </div>
              <div>
                <p className="text-[10px] text-[#94A3B8] uppercase tracking-wider m-0 mb-0.5">{label}</p>
                <p className="text-[13px] text-[#0F172A] font-medium m-0">{value}</p>
              </div>
              <FiArrowRight className="ml-auto text-[#CCFBF1] group-hover:text-[#0F766E] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150" size={14} />
            </div>
          ))}
        </div>

        {/* Doctor */}
        <SectionLabel>Assigned doctor</SectionLabel>
        <div className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#F0FDFA] hover:border-[#99F6E4] transition-all duration-150 cursor-default mb-5">
          <div className="w-10 h-10 rounded-full bg-[#0F766E] flex items-center justify-center text-[#99F6E4] text-sm font-medium flex-shrink-0">
            {getInitials(doctorName)}
          </div>
          <div>
            <p className="text-sm text-[#0F172A] font-medium m-0 mb-0.5">{doctorName}</p>
            <p className="text-xs text-[#475569] m-0">General Physician</p>
          </div>
          <span className="ml-auto bg-[#F0FDFA] border border-[#CCFBF1] text-[#0F766E] text-[11px] font-medium px-2.5 py-1 rounded-lg">
            Available
          </span>
        </div>
      </div>



      {/* Footer */}
      <div className="flex mb-4 mx-2 gap-2 items-center">
        <div className="flex-1 w-full">
          <UpdateModal appointment={appointment}></UpdateModal>
        </div>
        <DeleteDialog className=""></DeleteDialog>
      </div>
    </div>
  );
};

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-2 mb-2.5">
    <span className="text-[10px] uppercase tracking-[0.07em] text-[#94A3B8] font-medium whitespace-nowrap">{children}</span>
    <div className="flex-1 h-px bg-[#E2E8F0]" />
  </div>
);

export default AppointmentCard;