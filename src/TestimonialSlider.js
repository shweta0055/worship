import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";
import imgp from './images/profile.png';

// Custom arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      ❯
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      ❮
    </div>
  );
}

const testimonials = [
  {
    text: "The Master Teachers helped me solve all my doubts, develop myself and be more confident. I will be eternally grateful to Vedantu.",
    name: "Priyanshu Gupta",
    
    class: "Course Joined CDS, CAPF",
    image: imgp
  },
  {
    text: "The Master Teachers helped me solve all my doubts, develop myself and be more confident. I will be eternally grateful to Vedantu.",
    name: "Omkar Sinha",
    
    class: "Course Joined CDS, CAPF",
    image: imgp
  },
  {
    text: "The Master Teachers helped me solve all my doubts, develop myself and be more confident. I will be eternally grateful to Vedantu.",
    name: "Pushpraj Poonia",
    
    class: "Course Joined CDS, CAPF",
    image: imgp
  },
  {
    text: "The classes were really engaging and helped boost my understanding and interest in the subjects.",
    name: "Ananya Sharma",
    
    class: "Course Joined CDS, CAPF",
    image: imgp
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="testimonial-background">
        <div className="testimonial-wrapper">
      <h2 className="testimonial-title">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div className="testimonials-container">
            <div className="testimonial-card" key={index}>
            <p className="testimonial-text clamp-text">"{t.text}"</p>
            <div className="testimonial-footer">
              <img src={t.image} alt={t.name} className="testimonial-avatar" />
              <div>
                <div className="testimonial-name">
                  {t.name}
                </div>
                <div className="testimonial-class">{t.class}</div>
              </div>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default TestimonialSlider;


/*import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css"; // custom styles

const testimonials = [
  {
    text: "After I joined the Eklavya batch at Vedantu, I cracked KVPY and WBJEE and discovered my true potential through the guidance and mentorship of my Master teachers.",
    name: "Priyanshu Gupta",
    tag: "Student",
    class: "Class 12, JEE Eklavya Batch, JEE 2021",
    image: "https://via.placeholder.com/40"
  },
  {
    text: "Our Biology Master Teacher was extremely supportive and always there for us. The LIVE classes were fun and interactive and all my doubts were cleared instantly.",
    name: "Omkar Sinha",
    tag: "Student",
    class: "Class 12, NEET 2020",
    image: "https://via.placeholder.com/40"
  },
  {
    text: "The Master Teachers helped me solve all my doubts, develop myself and be more confident. I will be eternally grateful to Vedantu.",
    name: "Pushpraj Poonia",
    tag: "Student",
    class: "Class 12, NEET 2021",
    image: "https://via.placeholder.com/40"
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-title">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-footer">
              <img src={t.image} alt={t.name} className="testimonial-avatar" />
              <div>
                <div className="testimonial-name">
                  {t.name} <span className="tag">{t.tag}</span>
                </div>
                <div className="testimonial-class">{t.class}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
*/