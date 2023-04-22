export const Button = ((props) => {
     const click1 = (e) => {
         
      document.addEventListener( "keydown" , () => Cconsole.log(new KeyboardEvent( "keydown", { keyCode: 49 })));


//             if(obj.value.length >= obj.maxLength){
//               var textinput = document.inform.elements;
//           　　　　　　　　// ループでinputのカウント
//               for(var i=0;i < textinput.length; i++){
//                 if(textinput[i] == obj){
//                   textinput[i+1].focus();
//                   // 繰り返し処理を終了
//                   break;
//                 }
//               }
// }
        // window.document.onkeydown = function (evt) {
        // console.log(evt);
        	
        // document.dispatchEvent( new KeyboardEvent( "keyup",{key: "Tab" }));
        // }
        // document.dispatchEvent( new KeyboardEvent( "keyup",{key: "Tab" })) ;

    console.log('Click');
  };

    return (
        <div name="inform">
          <button id="click1" onClick={click1}>click1</button>
          <button id="click2" onClick={click1}>click2</button>
        </div>
    );
});

