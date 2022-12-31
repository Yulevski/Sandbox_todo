import "./styles.css";

const onClickAdd = () => {
  //gettting the value in teh text box
  //ここで得た値をliタグのitsTodoへ入れる
  const inputText = document.getElementById("add-text").value; //入力された値を取得
  document.getElementById("add-text").value = ""; //inputテキストの内容を空に
  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd()); //add-bittonがクリックされたとき関数onclickAddを実行

//Incompleteリストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//Incompleteリストに追加する関数
const createIncompleteList = (text) => {
  //div tag生成
  const div = document.createElement("div");
  div.className = "list-row"; //class付与
  //li tag 生成
  const li = document.createElement("li"); //li tag 生成
  li.innerText = text; //liの中にinputの内容が取得される
  //console.log(li);

  //button(complete)タグ生成
  const completeButton = document.createElement("button"); //<button>要素作成
  completeButton.innerText = "Complete"; //<button>の間にCompleteテキスト挿入
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    //complete listに追加する要素
    //Completeボタンの親要素取得
    const addTarget = completeButton.parentNode;
    //divの子要素の一番上取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //li tag 生成
    const li = document.createElement("li");
    li.innerText = text;
    //button tag 生成
    const backButton = document.createElement("button");
    backButton.innerText = "back";
    backButton.addEventListener("click", () => {
      //押されたBackボタンの親タグ(div)を完了リスとから削除。
      const deleteTarget = backButton.parentNode; //backbuttonのdiv要素取得
      document.getElementById("complete-list").removeChild(deleteTarget);
      //テキスト取得 押された戻すボタンのdivタグ要素の最初の要素のliタグ内にあるテキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      console.log(text);
      createIncompleteList(text);
    });
    //div tagの子要素に各要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    //Completelistに追加
    document.getElementById("complete-list").appendChild(addTarget);
    // const deleteTarget = completeButton.parentNode; //削除ボタンの親タグ(div)を取得
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  //console.log(completeButton);

  //button(delete)タグ生成
  const deleteButton = document.createElement("button"); //<button>要素作成
  deleteButton.innerText = "Delete"; //<button>の間にCompleteテキスト挿入
  deleteButton.addEventListener("click", () => {
    //alert("delete");
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    // const deleteTarget = deleteButton.parentNode; //削除ボタンの親タグ(div)を取得
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
    // //incomplete-listにあるdeleteTargetで得た要素を削除
  });

  //div tagの子要素に各要素を設定
  div.appendChild(li); //liタグの内容をdivの子要素として挿入
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //console.log(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  //incomplete-listのところにdivの内容を挿入
};
