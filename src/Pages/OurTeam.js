import React from "react";

const MeetOurTeam = () => {
  const scrollToTeam = () => {
    document
      .getElementById("teamscroll")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
:root{
  --ink:#111827;
  --muted:#5f6368;
  --gold:#c09a4a;
  --blue:#204ecf;
  --cream:#fbfaf7;
  --line:rgba(17,24,39,.10);
  --shadow:0 20px 55px rgba(17,24,39,.08);
  --shadow-lg:0 34px 90px rgba(17,24,39,.12);
}


html{
  scroll-behavior:smooth;
}

a{
  color:inherit;
  text-decoration:none;
}

section#teamscroll {
    padding-top: 60px;
    padding-bottom: 60px;
}

.section{
  padding:60px 0;
  position:relative;
  overflow:hidden;
}

.eyebrow{
  color:var(--blue);
  font-size:13px;
  font-weight:900;
  letter-spacing:.16em;
  text-transform:uppercase;
  margin-bottom:18px;
}

h2{
  font-size:50px;

  font-weight:900;
}



.center{
  text-align:center;
}

.center .lead{
  margin-left:auto;
  margin-right:auto;
}

.glass{
  background:rgba(255,255,255,.68);
  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);
  border:1px solid rgba(255,255,255,.78);
  box-shadow:var(--shadow);
}

.card-hover{
  transition:transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}

.card-hover:hover{
  transform:translateY(-7px);
  box-shadow:var(--shadow-lg);
}

/* HERO */

.team-hero{
  min-height:100vh;
  position:relative;
  display:flex;
  align-items:center;
  overflow:hidden;
  background:#d2d6e2;
}

.hero-bg{
  position:absolute;
  inset:0 0 0 auto;
  width:68%;
  background-image:url("https://virtualassistant24x7.com/wp-content/uploads/2026/06/imagemeet.webp");
  background-position:center right;
  background-size:cover;
  background-repeat:no-repeat;
}

.hero-bg::before{
  content:"";
  position:absolute;
  inset:0;
  background:
   linear-gradient(90deg, #d2d6e2 0%, rgb(210 214 226) 22%, rgb(210 214 226) 42%, rgba(247, 245, 240, .20) 64%, rgba(247, 245, 240, 0) 100%),
   linear-gradient(180deg, rgba(247, 245, 240, .10), rgba(247, 245, 240, .08));
}

.hero-inner{
  width:min(1180px,calc(100% - 80px));
  margin:auto;
  position:relative;
  z-index:2;
  padding:70px 0;
}

.hero-label{
  font-size:12px;
  letter-spacing:.55em;
  text-transform:uppercase;
  color:#1f2937;
  margin-bottom:34px;
}

.team-hero h1{
  font-size:clamp(68px,8vw,116px);
  letter-spacing:-.055em;
  font-weight:700;
  color:#0c0c0c;
}

.team-hero h1 span{
  display:block;
  color:#204ecf;
}

.hero-copy{
  margin-top:32px;
  color:#3f3f46;
  line-height:1.7;
}

.scroll-cue{
  margin-top:48px;
  display:inline-flex;
  align-items:center;
  gap:14px;
  font-size:12px;
  letter-spacing:.45em;
  text-transform:uppercase;
  color:#1f2937;
  cursor:pointer;
}

.scroll-cue span{
  letter-spacing:0;
  font-size:18px;
  transform:translateY(-1px);
}

/* TEAM GRID */

.team{
  padding-top:100px;
}

.team-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:26px;
}

.team-card{
  background:#fff;
  border:1px solid rgba(17,24,39,.08);
  border-radius:24px;
  overflow:hidden;
  box-shadow:var(--shadow);
}

.image-wrap{
  position:relative;
}

.image-wrap img{
  width:100%;
  height:420px;
  object-fit:cover;
  display:block;
  transition:.65s ease;
}

.team-card:hover .image-wrap img{
  transform:scale(1.05);
}

.linkedin{
  position:absolute;
  right:18px;
  bottom:18px;
  width:44px;
  height:44px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:rgba(255,255,255,.90);
  color:#111827;
  font-weight:900;
  box-shadow:0 12px 28px rgba(17,24,39,.16);
  opacity:0;
  transform:translateY(8px);
  transition:.28s ease;
}

.team-card:hover .linkedin{
  opacity:1;
  transform:translateY(0);
}

.team-info{
  padding:22px;
}

.team-info h3{
  font-size:17px;
  letter-spacing:-.04em;
  margin-bottom:6px;
  font-weight:bold;
}

.team-info p{
  font-size:12px;
  color:#1749d5;
  text-transform:uppercase;
}

/* CULTURE */

.culture{
  padding:60px 0;
  background:
    radial-gradient(circle at 20% 40%,rgba(32,78,207,.08),transparent 28%),
    linear-gradient(135deg,#f6f2ea,#fbfaf7);
}

.culture-box{
  border-radius:42px;
  padding:74px;
  position:relative;
  overflow:hidden;
}

.culture-box::before{
  content:"";
  position:absolute;
  width:420px;
  height:420px;
  border-radius:50%;
  right:-120px;
  top:-120px;
  background:rgba(32,78,207,.07);
  filter:blur(24px);
}

.culture-box h2,
.culture-box p{
  position:relative;
  z-index:2;
}

.culture-box p{
  max-width:760px;
  margin-top:26px;
  color:var(--muted);
  line-height:1.8;
}

/* VOICES */

.voices{
  background:#fbfaf7;
    padding-bottom: 0;
}

/* FEATURED VIDEO */

.featured-video{
  padding-top:40px;
  background:#fbfaf7;
}

.video-stage{
  position:relative;
  max-width:980px;
  margin:auto;
}

.video-bg{
  position:absolute;
  inset:34px -28px -28px 34px;
  border-radius:42px;
  background:linear-gradient(135deg,rgba(32,78,207,.10),rgba(245,158,11,.10));
  filter:blur(2px);
}

.video-card{
  position:relative;
  border-radius:42px;
  overflow:hidden;
  min-height:560px;
  background:#e5e7eb;
  box-shadow:var(--shadow-lg);
}

.video-card video{
  width:100%;
  height:560px;
  object-fit:cover;
  display:block;
}

.feature-profile{
  margin:-42px auto 0;
  position:relative;
  z-index:5;
  max-width:720px;
  border-radius:20px;
  padding:20px;
  display:grid;
  grid-template-columns:1fr auto;
  gap:20px;
  align-items:center;
      background: #fff;
}

.feature-profile h3{
    font-size: 25px;
    /* letter-spacing: -.04em; */
    margin-bottom: 6px;
    color: #1749d5;
    font-weight: bold;
}

.feature-profile p{
  color:var(--muted);
  margin-top:6px;
  line-height:1.6;
}

.tag{
  display:inline-flex;
  padding:10px 14px;
  border-radius:999px;
  background:#eef4ff;
  color:var(--blue);
  font-weight:900;
  font-size:13px;
  white-space:nowrap;
}

/* STORIES */

.stories{
  background:
    radial-gradient(circle at 85% 15%,rgba(32,78,207,.06),transparent 28%),
    #f7f8fb;
}

.story-grid{
  margin-top:58px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:26px;
}

.story-card{
  background:#fff;
  border:1px solid rgba(17,24,39,.08);
  border-radius:26px;
  overflow:hidden;
  box-shadow:var(--shadow);
}

.story-thumb{
  height:260px;
  overflow:hidden;
}

.story-thumb img{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:.65s ease;
}

.story-card:hover .story-thumb img{
  transform:scale(1.05);
}

.story-info{
  padding:24px;
}

.story-info h3{
  font-size:23px;
  letter-spacing:-.04em;
  margin-bottom:5px;
}

.story-info p{
  color:var(--muted);
  font-weight:600;
  margin-bottom:16px;
}

/* CLOSING */

.closing{
  padding:60px 0;
  background:
    radial-gradient(circle at 15% 20%,rgba(32,78,207,.10),transparent 26%),
    radial-gradient(circle at 86% 80%,rgba(245,158,11,.10),transparent 30%),
    linear-gradient(135deg,#eef4ff,#fbfaf7);
}

.closing-box{
  text-align:center;
  border-radius:42px;
  padding:82px 40px;
}

.closing-box p{
  max-width:650px;
  margin:22px auto 34px;

}

.btn{
     padding: 14px 26px;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    background: linear-gradient(90deg, #4f6df5, #3b82f6);
    color: white;
    box-shadow: 0 10px 25px rgba(79, 109, 245, 0.25);
    font-size: 15px;
    transition: all .25s ease;
}

.btn:hover{
  transform:translateY(-3px);
  box-shadow:0 26px 55px rgba(17,24,39,.22);
}

/* RESPONSIVE */

@media(max-width:1050px){
  .team-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .story-grid{
    grid-template-columns:1fr;
  }

  .hero-bg{
    width:100%;
    opacity:.35;
  }

  .hero-bg::before{
    background:linear-gradient(90deg,#f7f5f0 0%,rgba(247,245,240,.88) 55%,rgba(247,245,240,.35) 100%);
  }
}

@media(max-width:680px){
  .container{
    width:min(100% - 28px,1180px);
  }

  .section{
    padding:82px 0;
  }

  .team-hero{
    min-height:100vh;
  }

  .hero-inner{
    width:min(100% - 34px,1180px);
  }

  .team-hero h1{
    font-size:58px;
  }

  .hero-copy{
    font-size:16px;
  }

  .team-grid{
    grid-template-columns:1fr;
  }

  .culture-box,
  .closing-box{
    padding:42px 26px;
    border-radius:30px;
  }

  .video-card,
  .video-card video{
    min-height:420px;
    height:420px;
  }

  .feature-profile{
    grid-template-columns:1fr;
  }
}
      `}</style>

      <main>
        <section className="team-hero">
          <div className="hero-bg"></div>

          <div className="hero-inner">
            <div className="hero-label">Meet Our Team</div>

            <h1>
              The People Behind<br />
     <span className="highlight-color">The Space</span>
            </h1>

            <p className="hero-copy">
              Our team is built on curiosity, craft and community.
              Get to know the people who make Citadel run.
            </p>

            <div className="scroll-cue" onClick={scrollToTeam}>
              Scroll To Discover
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </section>

        <section className="section team" id="teamscroll">
          <div className="container">
            <div className="team-grid">
              <article className="team-card card-hover">
                <div className="image-wrap">
                  <img src="/images/suresh (2).webp" alt="Suresh Sharma" />
                  <a href="#" className="linkedin">in</a>
                </div>
                <div className="team-info">
                  <h3>Suresh Sharma</h3>
                  <p>Co-founder</p>
                </div>
              </article>

              <article className="team-card card-hover">
                <div className="image-wrap">
                  <img src="/images/kj.webp" alt="Kamaljeet Singh" />
                  <a href="#" className="linkedin">in</a>
                </div>
                <div className="team-info">
                  <h3>Kamaljeet Singh</h3>
                  <p>Director</p>
                </div>
              </article>

              <article className="team-card card-hover">
                <div className="image-wrap">
                  <img src="/images/amityji.webp" alt="Amit Gupta" />
                  <a href="#" className="linkedin">in</a>
                </div>
                <div className="team-info">
                  <h3>Amit Gupta</h3>
                  <p>Vice President, Finance Department</p>
                </div>
              </article>

              <article className="team-card card-hover">
                <div className="image-wrap">
                  <img src="/images/Akansha.png" alt="Akansha Sharma" />
                  <a href="#" className="linkedin">in</a>
                </div>
                <div className="team-info">
                  <h3>Akansha Sharma</h3>
                  <p>Senior Manager Digital Marketing</p>
                </div>
              </article>

              <article className="team-card card-hover">
                <div className="image-wrap">
                  <img src="/images/Meenu-Singh.png" alt="Ashmeet Kaur" />
                  <a href="#" className="linkedin">in</a>
                </div>
                <div className="team-info">
                  <h3>Ashmeet Kaur</h3>
                  <p>HR Generalist & Talent Acquisition Head</p>
                </div>
              </article>

              <article className="team-card card-hover">
                <div className="image-wrap">
                  <img src="/images/Bhawana.png" alt="Bhawana" />
                  <a href="#" className="linkedin">in</a>
                </div>
                <div className="team-info">
                  <h3>Bhawana</h3>
                  <p>Senior Manager, Recruitment Team</p>
                </div>
              </article>

              <article className="team-card card-hover">
                <div className="image-wrap">
                  <img src="/images/Akshat-new.png" alt="Akshat Varshney" />
                  <a href="#" className="linkedin">in</a>
                </div>
                <div className="team-info">
                  <h3>Akshat Varshney</h3>
                  <p>Vice President, Finance Department</p>
                </div>
              </article>

              <article className="team-card card-hover">
                <div className="image-wrap">
                  <img src="/images/mansij-new.png" alt="Mansij Kureel" />
                  <a href="#" className="linkedin">in</a>
                </div>
                <div className="team-info">
                  <h3>Mansij Kureel</h3>
                  <p>Vice President, Ops & Client Relations</p>
                </div>
              </article>

              <article className="team-card card-hover">
                <div className="image-wrap">
                  <img src="/images/PoonamHR.png" alt="Poonam Sharma" />
                  <a href="#" className="linkedin">in</a>
                </div>
                <div className="team-info">
                  <h3>Poonam Sharma</h3>
                  <p>HR Manager</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section culture">
          <div className="container">
            <div className="culture-box glass">
              <h2>Great Spaces Are Built by <span className="highlight-color">Great People</span></h2>
              <p>
                We believe the best coworking experiences are shaped by people
                who care about detail, collaboration, innovation and the everyday
                moments that make members feel supported.
              </p>
            </div>
          </div>
        </section>

        <section className="section voices center">
          <div className="container">
            <div className="eyebrow">Voices From The Team</div>
            <h2>Hear It From Our Team</h2>
            <p className="lead">
              Glimpse from candid conversations about craft, coworking and what
              drives us every day.
            </p>
          </div>
        </section>

        <section className="section featured-video">
          <div className="container">
            <div className="video-stage">
              <div className="video-bg"></div>

              <div className="video-card card-hover">
                <video  muted loop playsInline controls>
                  <source
                    src="https://virtualassistant24x7.com/wp-content/uploads/2026/06/poonam-twtir-2.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="feature-profile glass">
                <div className="member-c">
               
              
             <div class="infof-mem">  <h3>Poonam Sharma</h3>
                  <p><strong>HR Manager</strong></p></div>
                
              
                </div>
          
              </div>
            </div>
          </div>
        </section>

       

        <section className="section closing">
          <div className="container">
            <div className="closing-box glass">
              <h2>Behind Every <span className="highlight-color">Great Workspace</span> Is a Team That Cares</h2>
              <p>
                Our culture is built around thoughtful service, shared ownership
                and creating an environment where people can do their best work.
              </p>
              <a href="#" className="btn">Connect With Our Team</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MeetOurTeam;