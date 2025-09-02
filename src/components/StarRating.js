import { useEffect, useState } from "react";

const StartRating = ({ itemId }) => {
    const [rating, setRating] = useState(0);

    //로컬스토리지에서 별점 가져오기
    useEffect(() => {
        const saveRating = localStorage.getItem(`rating-${itemId}`);
        if (saveRating) {
            setRating(parseInt(saveRating, 10));
        }
    }, [itemId]);

    //별점 선택시 로컬스토리지에 저장
    const handleRating = (value) => {
        setRating(value);
        localStorage.setItem(`rating-${itemId}`, value);
        alert(`별점 ${value}점이 저장되었습니다.`)
    }

    //별점 초기화 함수
    const resetRating = () => {
        localStorage.removeItem(`rating-${itemId}`);
        setRating(0);
        alert(`별점이 초기화 되었습니다.`);
    }

    return (
        <div>
            <h2>별점주기</h2>
            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}
                        style={{
                            fontSize: "2rem",
                            cursor: "pointer",
                            color: star <= rating ? "gold" : "gray",

                        }}
                        onClick={() => handleRating(star)}
                    >
                        ★
                    </span>
                ))

                }
            </div>
            <p>현재 별점: {rating}점</p>
            <button onClick={resetRating}>별점 초기화</button>
        </div>
    );
};

export default StartRating;