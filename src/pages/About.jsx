import about__us from '../assets/about__us.png'
export default function About() {
  return (
    <div style={containerStyle}>
      <img
        src={about__us} // Replace with your image file path
        alt="CareerConnect Logo"
        style={imageStyle}
      />

      <p style={paragraphStyle}>
        Welcome to CareerConnect, your ultimate destination for finding your dream job. Our mission is to connect job seekers with top-notch career opportunities and assist employers in finding the perfect candidates for their organizations.
      </p>

      <p style={paragraphStyle}>
        At CareerConnect, we understand that the right job can transform lives, and the right employee can transform businesses. We offer a user-friendly platform with an extensive range of job listings, intuitive search tools, and an easy job posting process.
      </p>

      <p style={paragraphStyle}>
        Join CareerConnect today, and let's embark on your career journey together. Whether you are a job seeker or an employer, we're here to make your career dreams a reality.
      </p>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const imageStyle = {
  maxWidth: '200px',
  margin: '0 auto',
  display: 'block',
};

const paragraphStyle = {
  paddingTop:'1rem',
  fontSize: '16px',
  lineHeight: '1.5',
  color: 'white',
  marginTop: '20px',
};