var txt = ""
for(i=1; i<=10; i++){
  txt = "";
  for(j=i; j<10; j++){
    txt += " "
  }
  for(k=0;k<(i*2)-1;k++){
    txt += "*"
  }
  console.log(txt)
}