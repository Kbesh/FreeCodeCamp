function titleCase(str) {
//   var string2 = "hello";
//   console.log(srting[1]);
  
  var strArray = str.split(" ");
//   strArray = str.split(" ");

//   ["I'm", "a", "little"...]
  str = str.toLowerCase();
  for(var i = 0, length = strArray.length; i < length; i++){
    var word =strArray[i].split(''); //["I", "'", "m"]
    word[0] =word[0].toUpperCase();

    strArray[i] = word.join('');

  }

  str = strArray.join('');
  return str;
}

titleCase("I'm a little tea pot");
