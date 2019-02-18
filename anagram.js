function s_String(str){
    var arr=[];
    var j=0;
    var st1=str.toLowerCase();
    for(let i of st1)
    {
      arr[j]=i;
      j++;
    }
 
    var tmp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
    
        if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    for(var i=0;i<arr.length;i++)
    {
      var str2=str2+ arr[i];
    }
    return str2;
  }
  var string1=s_String("Himvan");
 var string2=s_String("imanvh");
  var length1=string1.length;
  var length2=string2.length;
  if(length1==length2)
  {
      if(string1==string2)
      {
          console.log("Anagram string");
      }
      else 
      {
          console.log("not an anagram string");
      }
    
  }
  else 
  {
      console.log("both strings are of different length");
  }
  