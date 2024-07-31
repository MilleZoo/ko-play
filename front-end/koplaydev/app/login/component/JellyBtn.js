"use client";

import styles from "./JellyBtn.module.scss";
import { motion } from "framer-motion";

export default function JellyBtn(props) {
  return (
    <div className={styles.JellyBtn}>
      <div className={styles.JellyBtnDot} />
      <div className={styles.JellyBtnDot2} />
      <div
        style={{ background: `${props.shadow}` }}
        className={styles.JellyBtnShadow}
      />
      <div
        style={{ background: `${props.bg}` }}
        className={styles.JellyBtnMain}
      />
      <h1 className={styles.text}>{props.text}</h1>
    </div>
  );
}