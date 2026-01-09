import "./Services.css";
import {
  FaLaptopCode,
  FaBullhorn,
  FaMobileAlt,
  FaBezierCurve,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";


const services = [
  {
    title: "Website Development",
    desc:
      <>Modern, responsive websites built with performance, SEO, and brand alignment in mind. Valley Point Technologies offers professional website development services that combine modern design, seamless functionality, and optimized performance to help your business stand out online.<strong> We provide services like Ecommerce Websites, Business & Marketing Websites, and Portfolio Websites, customized to your business needs.</strong></>,
    icon:<FaLaptopCode/>,
  },
  {
    title: "Digital marketing services",
    desc:
      <>We research your industry and audience to create data-driven personas, and build personalized digital strategies that grow your business online.We combine creativity, data, and technology to drive visibility, engagement, and sustainable business growth. <strong>Our offerings include Search Engine Optimization, Search Engine Marketing, and Social Media Management, customized to your marketing goals.</strong></>,
    icon: <FaBullhorn />,
  },
  {
    title: "Mobile App Development",
    desc:
      <>Mobile App Development We use latest technologies to build robust mobile apps like eCommerce, Real-estate and personalized apps for both Android & iOS platforms.Having a mobile application has become a necessity for a business in the 21st century.<strong> We provide Android Apps, iOS Apps, and Hybrid Apps, customized to meet your business needs and provide seamless user experiences across all devices.</strong></>,
    icon: <FaMobileAlt/>,
  },
  {
    title: "UI/UX Design",
    desc:
      <>We research and map out effective user journey and design creative, intuitive, interactive, and aesthetically pleasing UI interface. From web to enterprise systems, we design and develop innovative technology solutions that empower growth, efficiency, and success.<strong>We provide services like User Interface, Website Design, and Application Prototypes, customized to create intuitive, engaging, and visually appealing experiences for your users.</strong></>,
    icon: <FaBezierCurve />,
  },
  {
    title: "Software Development",
    desc:
      <>We build quality software solutions ranging from Enterprise Grade to Personalized solutions in all platforms like desktop, web, and mobile. From web to enterprise systems, we design and develop innovative technology solutions that empower growth, efficiency, and success.<strong> Our offerings include Software as a Service, IoT, and Enterprise Resource Planning, customized to deliver scalable and efficient software solutions for your business.</strong></>,
    icon: <FaCogs />,
  },
  {
    title: "Web Analytics & Insights",
    desc:
      <>Track user behavior, optimize performance, and gain deep insight through custom analytics systems. Valley Point Technologies provides powerful Web Analytics solutions to help you understand audience behavior, improve performance, and drive smarter marketing strategies.<strong> We provide Real-Time Dashboards, Tool & Platform Integration, and Conversion Rate Optimization, customized to provide actionable insights and improve your business performance.</strong></>,
    icon: <FaChartLine />,
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="badge">SERVICES</span>
        <h2>
          Our Core <span>Services</span>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          
          <div className="service-card" key={index}>
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
