import React, { useEffect, useState } from 'react'
import './Emoticons.css'
import { useStateValue } from './StateProvider'


function Emoticons() {

  const [{input},dispatch] = useStateValue();
  const [emojiGroup,setEmojiGroup] = useState('smiley');

  const updateInput = (e) => {
    document.getElementById("input").focus();
      dispatch({
          type: 'ADD_EMOTICON',
          input: (input?input:'')+e?.target.innerHTML
      });
  };

  return (
    <div className='emoticons'>
        <div className="emoticons__tabs">
            <p onClick={()=>setEmojiGroup('smiley')}className='emoticons__tab'>😀</p>
            <p onClick={()=>setEmojiGroup('animal')}className='emoticons__tab'>🐶</p>
            <p onClick={()=>setEmojiGroup('food')}className='emoticons__tab'>🍏</p>
            <p onClick={()=>setEmojiGroup('sport')}className='emoticons__tab'>⚽️</p>
        </div>
        { (() =>{
            switch(emojiGroup) {
                case 'smiley':
                    return (
                        <>
                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">😀</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😃</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😄</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😁</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😆</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😅</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😂</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤣</div>
                            </div>

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">😊</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😇</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🙂</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🙃</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😉</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😌</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😍</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🥰</div>
                            </div>

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">😘</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😗</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😙</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😚</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😋</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😛</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😝</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😜</div>
                            </div>
                                
                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">🤪</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤨</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🧐</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤓</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😎</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤩</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🥳</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😏</div>
                            </div>

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">😒</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😞</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😔</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😟</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😕</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🙁</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">☹️</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😣</div>
                            </div>

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">😖</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😫</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😩</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🥺</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😢</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😭</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😤</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😠</div>
                            </div>

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">😡</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤬</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤯</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😳</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🥵</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🥶</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😱</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😨</div>
                            </div>

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">🤑</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤡</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">💩</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤢</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤮</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">☠️</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🙄</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😈</div>
                            </div>    
                            
                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">😰</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😥</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😓</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤗</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤔</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤭</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤫</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤥</div>
                            </div>  

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">😶</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😐</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😑</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😬</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😯</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😦</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😧</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😮</div>
                            </div>    

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">😲</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🥱</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😴</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤤</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😪</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😵</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🤐</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🥴</div>
                            </div>  

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">😺</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😸</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😹</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😻</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😼</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😽</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🙀</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">😿</div>
                            </div>
                        </>
                    )
                case 'animal':
                    return (
                        <>
                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">🐶</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐱</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐭</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐹</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐰</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🦊</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐻</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐼</div>
                            </div>

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">🐯‍</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐨</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🦁</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐮</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐷</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐽</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐸</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐵</div>
                            </div>

                            <div className="emoticons__emoticonRow">
                                <div onClick={updateInput}  className="emoticons__emoticon">🙈‍</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🙉</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🙊</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐒</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐔</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐧</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐦</div>
                                <div onClick={updateInput}  className="emoticons__emoticon">🐤</div>
                            </div>
                                   

                                   
                        </>
                    )
            }
        })()
        }              
    </div>
  )
}

export default Emoticons