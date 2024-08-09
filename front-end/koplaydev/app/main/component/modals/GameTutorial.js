"use client";

import YellowBox from "@/app/component/boxes/YellowBox";
import GameJellyBtn from "../GameJellyBtn";
import styles from "./GameTutorial.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ChangeNation from "@/app/avatar/component/ChangeNation";
import { changeGameIdx } from "@/redux/slices/gameSlice";
import { changeGamePurposeIdx } from "@/redux/slices/gamePurposeSlice";
import { changeModalIdx } from "@/redux/slices/modalSlice";
import gameListAxios from "@/app/axios/gameListAxios";

let propObject = [
  {
    bg: "#FFD6E0",
    shadow: "#E07A93",
    text: "말하기",
    color: "white",
  },
  {
    bg: "#A2D2FF",
    shadow: "#4DA3F2",
    text: "읽기",
    color: "white",
  },
  {
    bg: "#FDD127",
    shadow: "#C89F00",
    text: "듣기",
    color: "white",
  },
];

let gameList = [["게임비"], ["플립플립"], ["스무고개"]];

export default function GameTutorial() {
  const [selectedCountry, setSelectedCountry] = useState("Korea");
  const dispatch = useDispatch();
  const gamePurposeIdx = useSelector((state) => state.gamePurpose);
  const ref = useRef(null);

  useEffect(() => {
    const fetchGameList = async () => {
      const data = await gameListAxios();
      if (data) {
        let speechGame = data.filter((value) => value.gamePurposeIdx === 1);
        let readGame = data.filter((value) => value.gamePurposeIdx === 2);
        let listenGame = data.filter((value) => value.gamePurposeIdx === 3);

        gameList = [[...speechGame], [...readGame], [...listenGame]];
      }
    };
    fetchGameList();
  }, []);

  return (
    <YellowBox width={"70"} height={"80"}>
      <div className={styles.NormalGameMain}>
        <div ref={ref} className={styles.header}>
          <div className={styles.headerleft}>
            {gamePurposeIdx === 0 ? null : (
              <img
                src="/back2.png"
                onClick={() => {
                  dispatch(changeGamePurposeIdx(0));
                }}
              ></img>
            )}
          </div>
          <span className={styles.NormalGameTitle}>튜 토 리 얼</span>
          <div className={styles.headerright}>
            <img
              src="/close.png"
              onClick={() => {
                dispatch(changeGamePurposeIdx(0));
                dispatch(changeModalIdx(0));
              }}
            ></img>
          </div>
        </div>
        <GameSelect idx={gamePurposeIdx} selectedCountry={selectedCountry} />
        {gamePurposeIdx === 0 ? null : (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <ChangeNation
              left="14vw"
              top="60vh"
              imgSize="calc(3vw + 5vh)"
              setSelectedCountry={setSelectedCountry}
            />
          </motion.div>
        )}
      </div>
    </YellowBox>
  );
}

const GameSelect = ({ idx, selectedCountry }) => {
  let widthList = Array(3).fill(26);
  const dispatch = useDispatch();
  const router = useRouter();

  if (idx !== 0) {
    widthList = [...Array(3).fill(0)];
    widthList[idx - 1] = 80;
  }
  return (
    <div className={styles.GameJelly}>
      {propObject.map((data, index) => (
        <motion.div
          key={index}
          className={styles.Btn}
          style={{ cursor: `${idx === 0 ? "pointer" : ""}` }}
          animate={{
            width: `${widthList[index]}%`,
            translateX: `${idx === 1 ? "6%" : idx === 3 ? "-6%" : 0}`,
            transition: {
              duration: 1,
            },
          }}
        >
          <GameJellyBtn
            bg={data.bg}
            shadow={data.shadow}
            text={idx === 0 ? data.text : ""}
            color={data.color}
            idx={index + 1}
            visibility={idx === 0 || idx === index + 1 ? "visible" : "hidden"}
          >
            <motion.div
              className={styles.gameItems}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 3,
                },
              }}
            >
              {idx !== 0 &&
                gameList[idx - 1].map((data, index) => (
                  <div key={index} className={styles.gameItem}>
                    {data.gameName}
                    <motion.div
                      className={styles.gameStart}
                      whileHover={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        color: "rgba(154, 205, 50, 1)",
                      }}
                      onClick={() => {
                        dispatch(changeGameIdx(data.gameIdx));
                        router.push(
                          `/tutorial/${selectedCountry}/${data.gameIdx}`
                        );
                      }}
                    >
                      시작
                    </motion.div>
                  </div>
                ))}
            </motion.div>
          </GameJellyBtn>
        </motion.div>
      ))}
    </div>
  );
};