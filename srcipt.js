
    // q1. 1~100까지 랜덤한 숫자(정수)를 반환하는 변수 
    //randomNumber를 선언하고 초기화하세요 *Math.random()
  
    let randomNumber = Math.floor(Math.random() * 100) +1;

    //q2. DOM 요소 5가지를 선택해서 변수로 선언해주세요.
    // guesses, lastResult, lowOrHi, guessSubmit, guessField

    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');
    const guessSubmit = document.querySelector('.guessSubmit');
    const guessField = document.querySelector('.guessField');
    

    //q3. 변수 2가지를 선언(let)해주세요. guessCount 초기값1, 
    // reset 선언만

    let guessCount = 1;
    let resetButton;

    function setGameOver(){}
    // 올바른 번호인지 확인하는 함수를 만들기 checkGuess
        
    function checkGuess(event) {
      //기본값 막기
      event.preventDefault();
      // Q4.사용자가 추측한 번호를 알아내는 변수 userGuess
      const userGuess = Number(guessField.value);
      // 제약사항 1. 숫자로만 받기 1~100

      //올바른 경우
      if (randomNumber === userGuess) {
        //축하 메세지를 표시합니다.
        lastResult.textContent = "축하합니다! 맞추셨어요!";
        // 플레이어가 더 많은 추측을 입력할수없도록합니다
        // 게임이 끝나는 로직
         setGameOver();
        // 추측창을 사용할 수 없게
        guessField.disabled = true;
        guessSubmit.disabled = true;
        // q1.버튼 태그인 리셋버튼을 생성해주세요.
        resetButton = document.createElement('button')
        // q2.생성한 DOM요소의 텍스트 컨텐츠를 "새 게임하기"로 변경
        resetButton.textContent = "새 게임하기";
        // q3.만든 DOM 버튼을 body태그 안에 추가합니다.
        document.body.appendChild(resetButton);
        // q4. resetButton을 'click'했을때 새 게임이 되게하는 리스너를 추가해주세요.
        // 새 게임 함수의 이름은 resetGame.
        resetButton.addEventListener('click', resetGame);
      


        // 플레이어가 게임을 다시 시작할수있도록 하는 디스플레이컨트롤
                
      } else if (guessCount === 10) { 
        lastResult.textContent = "게임 오버! 10회를 모두 사용하셨습니다.";
        setGameOver();        
      } else { 
        //플레이어들에게 자신이 틀렸으며 추측이 너무 높거나 낮은지 알려줍니다.
        //유저가 추측한 것이 우리의 랜덤숫자보다 낮을때
        lastResult.textContent = "틀렸어요!"
        if (randomNumber > userGuess) {
          //p태그 lowOrHi의 텍스트컨텐츠의 높고낮음을 말해준다.
          // 유저가 추측한것이 우리의 랜덤 숫자보다 높을때
          lowOrHi.textContent = "추측한 숫자보다 높습니다."
        } else if (randomNumber < userGuess){
          lowOrHi.textContent = "추측한 숫자보다 낮습니다."
        }

      }
      // guessCount를 1 증가해줍니다
      //guessCount = guessCount + 1;
      //guessCount += 1;
      guessCount++;
    }
    
    function resetGame() {
          //초기화
          guessCount = 1;
          guessField.disabled = false;
          guessSubmit.disabled = false;
          resetButton.parentNode.removeChild(resetButton);
          let randomNumber = Math.floor(Math.random() * 100) +1;
          guessField.value = '';
          lowOrHi.textContent = '';
          lastResult.textContent = '';
        
        }
      
      

  // 이벤트 리스너만들기 click했을때 checkGuess함수를 실행하는 리스너 추가
  guessSubmit.addEventListener('click', checkGuess);
