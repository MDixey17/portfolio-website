import { Avatar, Chip } from "@mui/material";
import { certificateList } from "./CertificateList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Certificates.css";

export const Certificates = () => {
  return (
    <div className="certificate-container">
      <h3>CERTIFICATIONS</h3>
      <br />
      <div className="certificate-content">
        {certificateList.map((certificate) => (
          <>
            <div className="certificate-info">
              <a href={certificate.link} className="certificate-link">
                <h4>{certificate.name} &#x2197;</h4>
              </a>
              <p>
                Issued By: {certificate.issuer}
                <br />
                Date Issued: {certificate.date}
              </p>
              <div className="tech-chips" style={{ flexFlow: "row wrap" }}>
                {certificate.techstack.map((tech) => (
                  <div className="certificate-tech-chip">
                    <Chip
                      label={tech.name}
                      variant="outlined"
                      style={{ color: "#E6E6E6", borderColor: "#5DD2FE" }}
                      avatar={
                        typeof tech.avatar === "string" ? (
                          tech.avatar === "</>" ? (
                            <Avatar
                              style={{
                                backgroundColor: "white",
                                color: "black",
                              }}
                            >
                              {"</>"}
                            </Avatar>
                          ) : (
                            <Avatar
                              style={{ backgroundColor: tech.bgColor }}
                              alt={tech.name}
                              src={tech.avatar}
                            />
                          )
                        ) : (
                          <Avatar style={{ backgroundColor: tech.bgColor }}>
                            <FontAwesomeIcon
                              icon={tech.avatar}
                              size="2x"
                              color={tech.color!}
                            />
                          </Avatar>
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
