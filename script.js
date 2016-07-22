
function palindrome(str) {
  var mystr=str.toLowerCase().replace(/[\W]/g,"").replace("_","");
  var result= false;// Good luck!
  var myArray=mystr.split('');
  console.log(myArray);
  console.log(mystr);
  console.log(myArray.reverse().join(''));
  console.log(mystr===myArray.reverse().join(''));

  if(mystr===myArray.reverse(). join(''))
    {
      result=true;
    }

  return result;

}




palindrome("not a palindrome");
