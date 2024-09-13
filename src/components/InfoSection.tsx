import info from "../assets/info.svg";
export default function InfoSection() {
  return (
    <div className="flex gap-16 items-center px-10 py-5 mt-16">
      <div className="px-5 py-5 w-full">
        <img src={info} alt="" className="aspect-auto w-full" />
      </div>
      <div className="flex flex-col text-left gap-10 w-full">
        <h3 className="font-semibold font-poppins text-xl text-[#2253E5]">
          What is Reproductive Health
        </h3>
        <h2 className="font-montserrat font-semibold text-5xl w-[580px]  leading-[55px]">
          What is Reproductive Health
        </h2>
        <p className="font-poppins w-[500px] text-sm">
          Reproductive health encompasses the well-being of individuals
          concerning their reproductive system. It plays a critical role in
          general health and involves rights and care related to fertility, safe
          childbirth, and access to medical resources.
        </p>
      </div>
    </div>
  );
}
