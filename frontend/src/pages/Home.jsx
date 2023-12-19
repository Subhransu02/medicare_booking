import heroImg01 from "../assets/images/hero-img01.png"
import heroImg02 from "../assets/images/hero-img02.png"
import heroImg03 from "../assets/images/hero-img03.png"
const Home = function () {
  return (
    <>
      {/* hero section */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col px-5 lg:flex-row gap-[90px] items-center justify-between">
              {/* hero content */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[76px] text-headingColor font-[800] md:text-[60px]">
                    We help patients live a healthy, longer life.
                  </h1>
                  <p className="text__para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Natus quaerat cumque fugit, perspiciatis cum nemo aperiam,
                    aut quia earum amet architecto, modi odio. Soluta unde
                    ducimus perferendis?
                  </p>

                  <button className="btn">Request an Appointment</button>
                </div>

                {/* hero image */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-36px leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para mt-[10px] lg:mt-[20px]">
                      Years of Experience
                    </p>
                  </div>

                  <div>
                    <h2 className="text-36px leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para mt-[10px] lg:mt-[20px]">
                      Clinic Location
                    </p>
                  </div>

                  <div>
                    <h2 className="text-36px leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para mt-[10px] lg:mt-[20px]">
                      Patient Satisfaction
                    </p>
                  </div>
                </div>
              </div>

              {/* hero image */}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={heroImg01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                  <img className="w-full" src={heroImg03} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};
export default Home;
