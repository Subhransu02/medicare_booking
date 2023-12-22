import { formateDate } from "../../utils/formateDate";
const DoctorAbout = () => {
  return (
    <div>
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
        About of
        <span className="text-irisBlueColor font-bold text-[24px] leading-9">
          Subhransu Sekhar Panda
        </span>
      </h3>
      <p className="text__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id
        mattis dui. Nullam risus diam, convallis a sodales vel, faucibus non
        eros. Sed dignissim condimentum magna, at convallis nisi tincidunt eu.
        Fusce orci dolor, elementum sit amet velit quis, porttitor vehicula
        lectus. Quisque ut nunc in arcu gravida vestibulum at eu massa. Sed
        vitae justo suscipit, commodo est eu, iaculis risus. Ut ullamcorper
        lectus pulvinar, consectetur mauris tempus, elementum urna. Maecenas
        maximus, nunc non tincidunt porta, nunc tortor gravida metus, in
        condimentum nisi velit in est. Maecenas nec bibendum nunc. Donec eget
        rhoncus leo. Quisque ullamcorper sapien vitae pellentesque maximus.
        Etiam vitae elit at dolor porta eleifend. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Cras
        sapien justo, cursus ultrices varius id, efficitur quis est.
      </p>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("07-04-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("07-04-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("07-04-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("07-04-2010")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr.Surgeon
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("07-04-2010")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr.Surgeon
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
