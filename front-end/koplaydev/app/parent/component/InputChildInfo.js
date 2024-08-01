import CompleteBox from "./CompleteBox";
import DetailBox from "./DetailBox";
import styles from "./InputChildInfo.module.scss";

export default function InputChildInfo() {

    return (
        <>
            <div className={styles.overlay} ></div>
            <div className={styles.modalBg}></div>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <h2>자녀 등록</h2>
                    <img className={styles.closeButton} src="close.png" alt="" />
                    <img className={styles.star} src="Star-bg.png" alt="" />
                    <img className={styles.planet} src="planet-bg.png" alt="" />
                    <img className={styles.ufo} src="ufo-bg.png" alt="" />
                    <div className={styles.inputTotal}>
                    <div className={styles.inputContainer}><div className={styles.detailBox}><DetailBox text="이름" width={68} height={92}/></div> <div><input className={styles.input} /></div></div>
                    <div className={styles.inputContainer}><div className={styles.detailBox}><DetailBox text="아이디" width={68} height={92}/></div> <div><input className={styles.input} /></div></div>
                    <div className={styles.inputContainer}><div className={styles.detailBox}><DetailBox text="비밀번호" width={68} height={92}/></div> <div><input className={styles.input} /></div></div>
                    <div className={styles.inputContainer}><div className={styles.detailBox}><DetailBox text="생년월일" width={68} height={92}/></div> <div><input className={styles.input} /></div></div>
                    </div>
                    <div className={styles.generateBoxContainer}>
                        <CompleteBox text="생성" width={46} height={88} />
                    </div>
                </div>
            </div>
        </>
    );
}