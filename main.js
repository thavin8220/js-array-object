const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];
  var a=[];
  for(i=0;i<passengers.length;i++){
    a[i]=passengers[i].passengerName;    
  }
  console.log(a)


  let veg=[];
  let nonveg=[];
  let x=0;
  let y=0;
  for(j=0;j<passengers.length;j++){
    if(passengers[j].isVegetarianOrVegan==true){
    veg[x]=passengers[j].passengerName;
    x++;
    }
    else{
        nonveg[y]=passengers[j].passengerName;
        y++;
    }
}
console.log(veg);
console.log(nonveg)