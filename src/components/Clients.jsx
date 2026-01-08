import "./Clients.css";

const clients = [
  "https://www.cadgraf.com/assets/img/clients/HPL_Daily-thanthi_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Dinamalar_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Dinakaranl_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_The-Hindu_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Malayala-manorama_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Indian-express_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Eenadu_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Sakshii_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Deccan-herald_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Ananda-Bazar_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_toi_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Vikatan_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Hindustan-times_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_Newgen_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_spi_120X72.png",
  "https://www.cadgraf.com/assets/img/clients/HPL_cn_120X72.png",
];

const products = [
  "https://www.cadgraf.com/assets/img/products/anygraaf.png",
  "https://www.cadgraf.com/assets/img/products/dataplan.png",
  "https://www.cadgraf.com/assets/img/products/elango.png",
  "https://www.cadgraf.com/assets/img/products/proimage.png",
  "https://www.cadgraf.com/assets/img/products/ss.png",
  "https://www.cadgraf.com/assets/img/products/vjoon.png",
  "https://www.cadgraf.com/assets/img/products/woodwing.png",
  "https://www.cadgraf.com/assets/img/products/mwm.png",
];

const Clients = () => {
  return (
    <div className="client-container">
      {/* OUR CLIENTS */}
      <div className="section">
        <span className="badge">OUR CLIENTS</span>
        <h2>Our Esteemed Partners</h2>

        <div className="logo-grid">
          {clients.map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo} alt="Client Logo" />
            </div>
          ))}
        </div>
      </div>

      {/* OUR PRODUCTS */}
      <div className="section">
        <span className="badge">OUR PRODUCTS</span>
        <h2>Our Innovative Solutions</h2>

        <div className="logo-grid">
          {products.map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo} alt="Product Logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
