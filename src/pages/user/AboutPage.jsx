import './user.css'
import samariddin from '../../assets/navbar/samariddin.jpg'
import logo1 from '../../assets/about/logo-1-color.png'
import logo2 from '../../assets/about/logo-2-color.png'
import logo3 from '../../assets/about/logo-3-color.png'
import logo4 from '../../assets/about/logo-4-color.png'
import logo5 from '../../assets/about/logo-5-color.png'
import logo6 from '../../assets/about/logo-6-color.png'

import icon1 from "../../assets/about/icon-app.svg";
import icon2 from "../../assets/about/icon-design.svg";
import icon3 from "../../assets/about/icon-dev.svg";
import icon4 from "../../assets/about/icon-photo.svg";



const AboutPage = () => {
  return (
    <div>
      <h1>About me</h1>

      <div className="about_samariddin">
        <div>
          <img src={samariddin} alt="" />
        </div>
        <div className="text_samaridin about-text">
          <h2>Frontend - Web Developer.</h2>
          <br />
          <p>
            I am Nurmamatov Samariddin. I am a frontend developer. Let me talk
            about myself. I studied at Albison Academy in 2022 and Najot Talim
            in 2023 and I have done many real projects
          </p>
          <ul className="about_ul">
            <li>
              <strong>Website:</strong>{" "}
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "100",
                  color: "gray",
                  cursor: "pointer",
                }}
              >
                {" "}
                Linkiden
              </span>
            </li>
            <li>
              <strong>Freelance:</strong>{" "}
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "100",
                  color: "gray",
                  cursor: "pointer",
                }}
              >
                {" "}
                Not available
              </span>
            </li>
            <li>
              <strong>Degree::</strong>{" "}
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "100",
                  color: "gray",
                  cursor: "pointer",
                }}
              >
                {" "}
                Junior
              </span>
            </li>
            <li>
              <strong>Age:</strong>{" "}
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "100",
                  color: "gray",
                  cursor: "pointer",
                }}
              >
                {" "}
                16
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-text">
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </div>

      <section className="service">
        <h3 className="h3 service-title">What im doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={icon2} alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>

              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={icon3} alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={icon1}
                alt="mobile app icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>

              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={icon4}
                alt="camera icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>

              <p className="service-item-text">
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <p>
              <img src={logo1} alt="" />
            </p>
          </li>

          <li className="clients-item">
            <p>
              <img src={logo2} alt="" />
            </p>
          </li>

          <li className="clients-item">
            <p>
              <img src={logo3} alt="" />
            </p>
          </li>

          <li className="clients-item">
            <p>
              <img src={logo4} alt="" />
            </p>
          </li>

          <li className="clients-item">
            <p>
              <img src={logo5} alt="" />
            </p>
          </li>

          <li className="clients-item">
            <p>
              <img src={logo6} alt="" />
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage