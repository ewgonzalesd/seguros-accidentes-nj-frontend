import imagen from "../images/Illustration.png";
import logoRimac from "../images/logoRIMAC.png";

const Index = () => (

    <div className="grid">
        <div className="base">
            <div className="header">
                <img  className="logo" height="100%" src={logoRimac}></img>
            </div>
        </div>
        <div className="image">
        </div>
        <div className="form">

        </div>
            <div className="show">
                    <img height="100%" src={imagen}></img>
            </div>
        <style jsx>{`
           .grid {
              top: 0px;
              display:grid;
              width: 100%;
              height: 768px;
              grid-template-columns: auto 24px auto;
              background-color:#fff;
           }
           .base{
              background-color: #EF3340;
              border-bottom-right-radius: 70px;
               z-index: 2;
            }
            .show{
                position: absolute;
                top: 25%;
                left: 45%;
                height:50%;
                z-index: 3;
            }
            .image{
                position: relative;
                background-color: #336699;
                color: #fff;
                width: 60px;
                padding: 3px;
                text-align: center;
                z-index: 3;
                background-color: #EF3340;
                clip-path: polygon(0 0, 0 93%, 100% 0);
            }
           .form{
               background-color: #fff;
           }

           .header{
                position: absolute;
                width: 791px;
                height: 41px;
                top: 23px;
                border-bottom: 1px solid #F55D68;
           }

           .header .logo{
                position: absolute;
                width: 99.37px;
                height: 18px;
                left: 143px;
           }

        `}
        </style>
    </div>
);

export default Index;

