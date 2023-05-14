import styles from "../styles";

const StartSteps = ( { number, company, role, duration, year} ) => (
  <div className="flex justify-start items-center">
    <div className={`${styles.flexCenter} min-w-[90px] h-[90px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">
        0{number}
      </p>
    </div>
    <div className="flex flex-col">
      <h3 className="flex-1 ml-[30px] mb-1 font-semibold text-[24px] text-white leading-[32px]">
      {role}
      </h3>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-white leading-[32px]">
      {company}
      </p>
      <div className="inline-flex">
        <p className="ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
          {duration}
        </p>
        <p className="ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
          {year}
        </p>
      </div>
    </div>
  </div>
);

export default StartSteps;
