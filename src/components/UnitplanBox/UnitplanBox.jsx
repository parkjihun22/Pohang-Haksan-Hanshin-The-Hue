import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import styles from "./UnitplanBox.module.scss";
import room75 from "../../assets/UnitplanBox/count01_2_75.jpg";
import room80 from "../../assets/UnitplanBox/count01_2_80.jpg";
import room84 from "../../assets/UnitplanBox/count01_2_84.jpg";
import room107 from "../../assets/UnitplanBox/count01_2_107.jpg";
import room114 from "../../assets/UnitplanBox/count01_2_114.jpg";


// import room119B from "../../assets/UnitplanBox/119B.png";


const contents = [
    { type: '75㎡', src: room75 }, 
    { type: '80㎡', src: room80 },
    { type: '84㎡', src: room84 },
    { type: '107㎡', src: room107 },
    { type: '114㎡', src: room114 },



];

const UnitplanBox = () => {
    const [istype, setIsType] = useState(contents[0]);
    const [isIdx, setIdx] = useState(0);
    const [isImage, setIsImage] = useState(contents[0]?.src || null);
    const [isLeft, setIsLeft] = useState(false);
    const [isRight, setIsRight] = useState(true);
    const [animationClass, setAnimationClass] = useState('');
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    useEffect(() => {
        setAnimationClass(styles.fadeIn);
        setIsImage(istype.src || null);

        const timeout = setTimeout(() => {
            setAnimationClass('');
        }, 500);

        return () => clearTimeout(timeout);
    }, [istype]);

    useEffect(() => {
        setIsLeft(isIdx > 0);
        setIsRight(isIdx < contents.length - 1);
    }, [isIdx]);

    const leftArray = () => {
        if (isIdx > 0) {
            const newIndex = isIdx - 1;
            setIsType(contents[newIndex]);
            setIdx(newIndex);
        }
    };

    const rightArray = () => {
        if (isIdx < contents.length - 1) {
            const newIndex = isIdx + 1;
            setIsType(contents[newIndex]);
            setIdx(newIndex);
        }
    };

    return (
        <>
            <div className={styles.btnContainer}>
                {contents.map((value, idx) => (
                    <div
                        key={idx}
                        className={value.type === istype.type ? styles.clickedTypeBtn : styles.typeBtn}
                        onClick={() => { setIsType(value); setIdx(idx); }}
                    >
                        {value.type}
                    </div>
                ))}
            </div>

            <div className={styles.imgContainer}>
                <AiOutlineLeft
                    size={!isMobile ? 50 : 30}
                    color={isLeft ? '#d1af73' : '#eedec3'}
                    onClick={isLeft ? leftArray : undefined}
                />

                {/* 📌 이미지가 없어도 테두리가 유지되도록 감싸는 div 추가 */}
                
                {isImage ? (
  <img className={`${styles.typeImg} ${animationClass}`} src={isImage} alt={istype.type} />
) : null}
                    
                

                <AiOutlineRight
                    size={!isMobile ? 50 : 30}
                    color={isRight ? '#d1af73' : '#eedec3'}
                    onClick={isRight ? rightArray : undefined}
                />
            </div>
        </>
    );
};

export default UnitplanBox;
