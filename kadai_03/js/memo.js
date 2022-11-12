// alert('ok');
//1.Save クリックイベント

$("#save").on('click', function () {
  // jQueryでinputのhtmlに記述されたものを取得する
  // $("#xx 0r .xx").val(); inputタグにしか使えない
  let key = $("#key").val();
  let memo = $("#memo").val();

  console.log(key, 'データが取れているかチェック')
  console.log(memo, 'データが取れているかチェック')

  //データを保存する
  localStorage.setItem(key, memo) //keyが鍵でmemoが中身
  //es6を調べる
  const html = `
  <tr>
    <th>${key}</th>
    <td>${memo}</th>
  </tr>
  `;
  //${ }はjsを埋め込む指示
  $("#list").append(html);
});


//2.clear クリックイベント
$("#clear").on("click", function () {
  localStorage.clear();

  // これだけだとhtmlが残ってしまうのでそれも削除
  $("#list").empty();
});


//3.ページ読み込み：保存データ取得表示

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  const html = `
  <tr class="title">
    <th>goods</th>
    <td>where</td>
  </tr>
  <tr>
    <th>${key}</th>
    <td>${value}</td>
  </tr>

  `
  // 画面上に埋め込み
  $("#list").append(html)
}
