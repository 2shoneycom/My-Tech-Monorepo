import styles from './css/hero_typeB.module.css';

function Hero_typeB({ img, category, title, description }) {
  return (
    <div className={styles.Page_pageLead}>
      <div className={styles.HedingLeadC}>
        <div className={styles.HeadingLeadC_body}>
          <div className={styles.HeadingLeadC_meida}>
            {/* ::before */}
            <picture>
              <img className={styles.Image} dataImageSize="hexagonMedium" alt="AutomatedReasoning.svg" width="326" height="282" src={img || "https://assets.amazon.science/b3/e6/339a287646308dd0cf27be64860a/automatedreasoning.svg"}></img>
            </picture>
            {/* ::after */}
          </div>
          <div className={styles.HeadingLeadC_text}>
            <div className={styles.HeadingLeadC_category}>
              <span className={styles.Link}>{category || "Research Area"}</span>
            </div>
            <h1 className={styles.HeadingLeadC_title}>
              {title || "Automated resoning"}
            </h1>
            <div className={styles.HeadingLeadC_description}>
              {description ||
                "Focusing on the automation of formal logical reasoning to raise the bar on the security, durability, availability, and quality of Amazon’s products and services."
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero_typeB;