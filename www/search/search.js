// This is a JavaScript file
var url = 'https://api.gnavi.co.jp/RestSearchAPI/20150630/?callback=?';
var params = {
  keyid: '1d58710351becbeb732bfe0a479d5f38',
  format: 'json',
  category_l: 'RSFST02000',
  hit_per_page: '20'
};

var showResult = function(searchResult){
  if ( searchResult.total_hit_count > 0 ) {
    //renderResult(searchResult);
    //console.log(searchResult);
    push('result', searchResult);
  } else {
    alert( '検索結果が見つかりませんでした。' );
  }
}

$(document).on('click', '#jpFood', function(){
  $.getJSON(url, params, function(searchResult){
    showResult(searchResult);
  });
});


