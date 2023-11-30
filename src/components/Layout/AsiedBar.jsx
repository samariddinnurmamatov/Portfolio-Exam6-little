import { FacebookOutlined, FormOutlined, InstagramOutlined, PhoneOutlined, TwitterOutlined } from '@ant-design/icons';
import toggle from '../../assets/navbar/samariddin.jpg'

const AsiedBar = () => {
  return (
    <aside className="sidebar" id="stc">
      <div className="info_img_text">
        <img src={toggle} alt="" />
        <h1>Samariddin</h1>
        <p>Web developer</p>
      </div>
      <br />
      <br />

      <div>
        <hr />
      </div>

      <div className="info_icon">
        <div className="info_email">
          <div className="icon">
            <FormOutlined />
          </div>
          <div>
            <span className="spa">Email</span>
            <p>samariddin110@gmail.com</p>
          </div>
        </div>
        <div className="info_email">
          <div className="icon">
            <PhoneOutlined />
          </div>
          <div>
            <span className="spa">Phone</span>
            <p>+998-90-009-99-16</p>
          </div>
        </div>
        <div className="info_email">
          <div className="icon">
            <PhoneOutlined />
          </div>
          <div>
            <span className='spa'>Birthday</span>
            <p>June 23, 1982</p>
          </div>
        </div>
        <div className="info_email">
          <div className="icon">
            <PhoneOutlined />
          </div>
          <div>
            <span className="spa">Location</span>
            <p>Tashkent, Uzbekistan</p>
          </div>
        </div>
      </div>

      <div className="icon_ins_face">
        <span>
          <InstagramOutlined />
        </span>
        <span>
          <FacebookOutlined />
        </span>
        <span>
          <TwitterOutlined />
        </span>
      </div>
    </aside>
  );
}

export default AsiedBar