import { useEffect, useState } from "react";

const Install = () => {
    const [isIos, setIsIos] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        //ios여부 확인
        const userAgent = window.navigator.userAgent.toLocaleLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent); //ios기기인지 확인
        setIsIos(isIosDevice); //ios 여부 상태 업데이트

        const isInStandaloneMode = window.matchMedia("(display-mode: standalone )").matches;
        setIsStandalone(isInStandaloneMode);//안드로이드와 아이폰 여부와 상관없이 독립적인 상태 업데이트

        //안드로이드에서 PWA설치 이벤트 처리
        if (!isIosDevice) {
            window.addEventListener("beforeinstallprompt", (event) => {
                event.preventDefault();
                //설치버튼 요소 가져오기
                const installButton = document.getElementById("install-button");

                if (installButton) {
                    installButton.removeAttribute("disabled"); //버튼활성화
                    installButton.addEventListener("click", () => {
                        event.prompt(); //설치 프롬프트 표시
                    });
                } else {
                    console.error("인스톨 버튼을 찾을 수 없습니다.");
                }
            });
        }
    }, []);

    return (
        <div>
            {/* ios일 경우 설치 안내 메세지 */}
            {isIos && !isStandalone ? (
                <div>
                    {/* ios 사용자에게 설치 방법 안내 */}
                    <p>Safari에서 공유 버튼을 눌러 '홈 화면에 추가'를 선택해 앱을 설치하세요.</p>
                </div>
            ) : (
                //안드로이드일 경우 설치 버튼 표시
                <button id="install-button" disabled>앱 설치</button>
            )}


        </div>
    );
};

export default Install;