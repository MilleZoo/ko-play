"use client";

import modifyStudentInfoAxios from "@/app/axios/modifyStudentInfoAxios";
import styles from "./LoginModalBtn.module.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeModalIdx } from "@/redux/slices/modalSlice";
import { useRouter } from "next/navigation";
import logoutAxios from "@/app/axios/logoutAxios";
import effectSound from '@/app/utils/effectSound'

const buttonSound = 'https://ko-play.s3.ap-northeast-2.amazonaws.com/audio/effect/buttonSound.mp3';

export default function LoginModalBtn(props) {
  const userInfo = useSelector((state) => state.studentInfo);
  const dispatch = useDispatch();
  const router = useRouter();
  const es = effectSound(buttonSound, 1);

  return (
    <motion.div
      className={styles.LoginModalBtn}
      style={{
        width: `${props.width}%`,
        height: `${props.height}%`,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      onClick={() => {
        es.play();
        if(props.bg === "#ffb703"){
          props.setLoginModal(0);
        }else{
          props.setLoginModal(0);
          router.replace("/main");
        }
      }}
    >
      <motion.div
        className={styles.LoginModalBtnTop}
        style={{
          backgroundColor: props.bg,
        }}
        whileTap={{
          backgroundColor: `${props.shadow}`,
          translateY: "5px",
          translateX: "-5px",
        }}
      >
        {props.children}
      </motion.div>
      <div
        style={{
          backgroundColor: props.shadow,
        }}
        className={styles.LoginModalBtnBottom}
      />
    </motion.div>
  );
}