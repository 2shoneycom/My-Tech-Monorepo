import styles from "./css/hero_typeA.module.css";

function Hero_typeA() {
  return (
    <section className={styles.top_container}>
      <div className={styles.HeroA}>
        <div className={styles.HeroA_backgroundMedia}>
          <picture>
            <img className={styles.Image} alt="blog-lead-image-2.png" width="1440" height="320" src="https://assets.amazon.science/dims4/default/e5fec33/2147483647/strip/true/crop/1280x284+0+199/resize/1440x320!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Fe7%2Fae%2F3994cfc54ec293d3fe184741d3d1%2Fimage-11.png"></img>
          </picture>
          {/* ::after */}
        </div>
        <div className={styles.HeroA_body}>
          <svg className={styles.HeroA_background_image} width="481" height="416" viewBox="0 0 481 416" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#D5DBDB" strokeWidth="1.5" fill="none" fillRule="evenodd">
              <path d="M240.966 104.38h119.646l59.823 103.537-59.823 103.536H240.966l-59.823-103.536z" />
              <path opacity=".6" d="M61.026.844h119.646l59.823 103.536-59.823 103.537H61.026L1.203 104.38z" />
              <path opacity=".603" d="M183.498.844h119.646l59.823 103.536-59.823 103.537H183.498L123.675 104.38z" />
              <path d="M180.672 207.917h119.646l59.823 103.536-59.823 103.537H180.672L120.85 311.453z" />
              <path d="M300.318 207.917h119.646l59.823 103.536-59.823 103.537H300.318l-59.823-103.537z" />
            </g>
          </svg>
          <div className={styles.HeroA_text}>
            <h1 className={styles.HeroA_title}>Amazon Science Blog</h1>
            <div className={styles.HeroA_description}>
              Technical deep-dives and perspectives from our scientists who are pushing boundaries across multiple scientific disciplines while solving real-world challenges. Explore how our teams combine research excellence, world-class data, and advanced infrastructure to create transformative customer experiences — from AI and robotics to cloud computing, sustainability innovations, and beyond — all while maintaining our commitment to responsible technology development.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero_typeA;