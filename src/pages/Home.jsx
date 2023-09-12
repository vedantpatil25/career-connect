import home__resume from "../assets/home__resume.png";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome</h2>
      <div>
        <main>
          <div>
            <img src={home__resume} alt="logo image" style={{width:'10rem', paddingBottom:'2rem'}}/>
            <p style={{color: 'var(--primary)', fontSize:'larger'}}>Welcome to CareerConnect - Where Your Dream Job Awaits!</p>
            <p>
              At CareerConnect, we understand the significance of finding the
              perfect job one that aligns with your passions, skills, and
              aspirations. Our platform is your gateway to a world of exciting
              career opportunities. Whether you're a seasoned professional
              looking to take the next step in your career or a fresh graduate
              eager to embark on your professional journey, CareerConnect is
              here to guide you.
            </p>

            <a href="/blogs">
              <button style={{padding:'1rem', fontSize:'1.2rem', marginTop:'2rem'}}>Discover Openings </button>
            </a>
          </div>
        </main>
        
        <footer style={{marginTop:'10rem'}}>
          <p>&copy; {new Date().getFullYear()} CareerConnect</p>
        </footer>
      </div>
    </div>
  )
}
