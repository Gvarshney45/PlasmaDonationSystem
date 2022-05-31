import React from "react";
import "./blog.css";
import WhoDonate from "./WhoDonate.png";
const Blog = () => {
  return (
    <div className="blog1">
      <div className="blog-main">
        <div className="blog2">
          <h1 className="title-blog">WHO ALL CAN DONATE FOR PLASMA❓</h1>
          <hr />
          <p className="para-blog">
            Even though you may be enthusiastic about donating Plasma/blood, you
            may not be eligible. This is determined through an initial screening
            process. &nbsp;
            <h3>Eligibility of Donor</h3>
            The following criteria should be met for potential donors:
            <br />
            1.<b> Age: greater than 18 Years</b>
            <br />
            2.<b>Male or nulliparous female donor of weight more than 55 Kg</b>
            <br />
            3.
            <b>
              Prior diagnosis of Covid-19 documented by a laboratory
              test(RT-PCR) with symptomatic disease with at least fever and
              cough
            </b>
            <br />
            4.
            <b>
              Complete resolution of Symptoms at least 28 days prior to
              donation; or Complete resolution of symptoms at least 14 days
              prior to donation and two negative real time PCR test for COVID-19
              from nasopharyngeal swab, collected 24 hour apart.
            </b>
            <br />
            <br /> In addition, donor eligibility criteria for whole blood
            donation will be followed in accordance to the Drug & amp; Cosmetics
            Act 1940 and rules 1945 therein (as amended till march 2020) & are
            mentioned below:
            <br />
            <br />
            The donor must be 18 to 65 years of age with a minimum weight of 45
            kg. The blood collected needs to be clean and disease-free.
            Post-screening, all donated blood samples are tested to ensure that
            no diseases are transmitted.
            <br />
            <br />
            <b>The following people are not eligible for blood donation:</b>
            <br />
            👉 Intoxicated individuals
            <br />
            👉 Blood cancer patients (lymphoma, leukaemia)
            <br />
            👉 Type 1 diabetes patients
            <br />
            👉 Patients having coronary heart disease or those who have suffered
            a heart attack
            <br />
            👉 Pregnant and nursing women
            <br />
            👉 Patients with AIDS, Hepatitis B or C, Syphilis
            <br />
            👉 People who have a fever or other active infections
            <br />
            👉 People who have got a piercing or body art done during the last 6
            months
            <br />
            <br />
            <h2>▪️ IS IT SAFE TO DONATE PLASMA?</h2>
            Blood and plasma have been used to treat many other conditions, and
            they’re usually very safe. The risk of contracting COVID-19
            infection from receiving convalescent plasma therapy is very low
            because the plasma donor has fully recovered from the infection.
            <br />
            <h2>▪️ WHAT IS ANTIBODY TEST?</h2>
            An antibody test is a screening for antibodies in blood. It is also
            called a serology test.The antibody test isn’t checking for the
            virus itself. Instead, it looks to see whether your immune system —
            your body’s defense against illness — has responded to the
            infection.
            <br />
            <h3>
              ▪️ WHAT’S THE DIFFERENCE BETWEEN A CORONAVIRUS TEST AND AN
              ANTIBODY TEST?
            </h3>
            A coronavirus test, sometimes called a diagnostic test, looks for
            signs of active virus. It’s simpler and faster than an antibody
            test. But it tells you only if you have the virus in your body at
            the moment when you’re tested.An antibody test shows that you had
            the virus at some point in the past. It could be gone, or you could
            still be contagious.
            <h3>
              ▪️ HOW MANY DAYS A RECOVERED BODY CAN TAKE TO DEVELOP ANTIBODY
            </h3>
            Antibodies develops in 14 to 28 days, and it will last till 2-3
            months.
            <br />
            <b>▪️ WHAT IS (RT-PCR) TEST:</b>
            <br />
            Reverse transcription PCR, or RT-PCR is a variation of PCR, or
            polymerase chain reaction.
            <br />
            <b>▪️ Plasma Compatibility Chart:</b>
            <br /> <br />
            <img src={WhoDonate} alt="WhoDonate " className="DonateIamg" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
