import React from "react";
import styles from "./Apresentation.module.css";
import bryanPhoto from "../assets/images/bryan-photo.webp";

interface Props {
  // declare as propriedades do componente aqui
}

const Apresentation: React.FC<Props> = (props) => {
  return (
    <div className={styles.apresentation}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={"subtitle " + styles.h2}>Full Stack Developer</h2>
          <h1>
            Bryan Dietrich<br></br>Bernhardt
          </h1>
        </div>
        <p>
          Desenvolvedor e Analista de Sistemas Web fissurado em tecnologia e
          seus meios de resolver problemas do mundo real.
        </p>
        <div className={styles.buttons}>
          <a
            href="https://github.com/BryanDietrichBernhardt"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.btnPortfolio}>Veja meu portfólio</button>
          </a>
          <a href="#contact">
            <button className={styles.btnContato}>Entre em contato</button>
          </a>
        </div>
      </div>
      <img className={styles.img} src={bryanPhoto} alt="Foto do Bryan" />
    </div>
  );
};

export default Apresentation;
