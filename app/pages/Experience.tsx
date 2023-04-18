import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

const Experience: React.FC<{
  companyLogo: StaticImageData;
  companyName: string;
  position: string;
  date: string;
  location: string;
  description: string[];
}> = ({ companyLogo, companyName, position, date, location, description }) => {
  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          columnGap: "3px",
          flexBasis: "1px",
        }}
      >
        <div>
          <Image
            height="100px"
            width="100px"
            src={companyLogo}
            objectFit="contain"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            flexBasis: "900px",
          }}
        >
          <div>
            <span style={{ display: "block" }} className={styles.position}>
              {position}
            </span>
            <span style={{ display: "block" }} className={styles.companyName}>
              {companyName}
            </span>
            <span style={{ display: "block" }} className={styles.date}>
              {date}
            </span>
            <span style={{ display: "block" }} className={styles.location}>
              {location}
            </span>
          </div>
          <div>
            {description.map((element, key) => {
              return (
                <div>
                  <p key={key} className={styles.element}>
                    {element}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
