class Form1{

constructor(){
    this.question1 = createElement("h1");
    this.input1 = createInput("");
    this.input2 = createInput("Main Address");
    this.input3 = createInput("City - Pincode");
    this.input4 = createInput("District");
    this.input5 = createInput("State");
    this.button13 = createButton("SUBMIT");
    this.button12 = createButton("NEXT");
    this.button11 = createButton("NEXT");
    this.button10 = createButton("Other");
    this.button9 = createButton("Genral Hospital");
    this.button8 = createButton("Special care");
    this.button7 = createButton("Multi speciality");
    this.button6 = createButton("private");
    this.button5 = createButton("Government");
    this.button4 = createButton("NEXT");
    this.button3 = createButton("NEXT");
    this.button2 = createButton("NEXT");
    this.button1 = createButton("NEXT");
    this.question2 = createElement("h1");
    this.question3 = createElement("h1");
    this.input6 = createInput("Registration number");
    this.question4 = createElement("h1");
    this.question5 = createElement("h1");
    this.question6 = createElement("h1");
    this.question7 = createElement("h1");
  k = this.input7 = createInput("");
  this.input8 = createInput("Latitude");
  this.input9 = createInput("Longitude");
this.greeting = createElement("h1");

}

display(){
    this.question1.html("Q1. what is the Name of Hospital ?");
    this.question1.position(displayWidth/2-650,20);
    this.input1.position(displayWidth/2-650,displayHeight/2-300);
    this.button1.position(displayWidth/2-650,displayHeight/2-110);
    this.question2.html("Q2. What is the address of the Hospital ?");
    this.question2.position(displayWidth/2-650,20);
    this.question2.hide();
    this.button2.position(displayWidth/2-650,displayHeight/2-110);
    this.button2.hide();
    this.input2.position(displayWidth/2-650,displayHeight/2-300);
    this.input3.position(displayWidth/2-650,displayHeight/2-250);
    this.input4.position(displayWidth/2-650,displayHeight/2-200);
    this.input5.position(displayWidth/2-650,displayHeight/2-150);
   this.input2.hide();
   this.input3.hide();
   this.input4.hide();
   this.input5.hide();
   this.question3.html("Q3. What is the registration number of the Hospital ?");
   this.question3.position(displayWidth/2-650,20);
   this.question3.hide();
   this.input6.position(displayWidth/2-650,displayHeight/2-300);
   this.input6.hide();
   this.question4.html("Q4. Which type of Hospital is this ?");
   this.question4.position(displayWidth/2-650,20);
   this.question4.hide();
   this.button3.position(displayWidth/2-650,displayHeight/2-110);
   this.button3.hide();
   this.button4.position(displayWidth/2-650,displayHeight/2-110);
   this.button4.hide();
   this.button5.position(displayWidth/2-650,displayHeight/2-300);
   this.button6.position(displayWidth/2-650,displayHeight/2-250);
  this.button5.hide();
  this.button6.hide();
  this.button7.position(displayWidth/2-650,displayHeight/2-300);
  this.button8.position(displayWidth/2-650,displayHeight/2-250);
  this.button9.position(displayWidth/2-650,displayHeight/2-200);
  this.button10.position(displayWidth/2-650,displayHeight/2-150);
 this.button7.hide();
 this.button8.hide();
 this.button9.hide();
 this.button10.hide();
 this.question5.html("Q5. Which category of Hospital is this ?");
 this.question5.position(displayWidth/2-650,20);
 this.question5.hide();
 this.button11.position(displayWidth/2-650,displayHeight/2-110);
 this.button11.hide();
 this.question6.html("Q6. How many Doctors are Working there (in number) ?");
 this.question6.position(displayWidth/2-650,20);
 this.question6.hide();
 k.position(displayWidth/2-650,displayHeight/2-300);
 k.hide();
 this.button11.position(displayWidth/2-650,displayHeight/2-110);
 this.button11.hide();
 this.question7.html("Q7. What is the location of your Hospital (in Latitude and Longitude) ?");
 this.question7.position(displayWidth/2-650,20);
 this.question7.hide();
 this.button12.position(displayWidth/2-650,displayHeight/2-110);
 this.button12.hide();
 this.input8.position(displayWidth/2-650,displayHeight/2-300);
 this.input8.hide();
 this.input9.position(displayWidth/2-650,displayHeight/2-250);
 this.input9.hide();
 this.button13.position(displayWidth/2-650,displayHeight/2-110);
 this.button13.hide();
 this.greeting.html("Thanks for Registration !!");
 this.greeting.position(displayWidth/2-650,20);
 this.greeting.hide();

    this.button1.mousePressed(()=>{
      console.log(this.input1.value());
      background(249,229,2);
        this.question1.hide();
        this.input1.hide();
        this.button1.hide();
        this.question2.show();
        this.button2.show();
        this.input2.show();
        this.input3.show();
        this.input4.show();
        this.input5.show();
    })

    this.button2.mousePressed(()=>{
      background(255,140,0);
       this.button2.hide();
        this.question2.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        this.input5.hide();
        this.question3.show();
        this.input6.show();
        this.button3.show();
    })

    this.button3.mousePressed(()=>{
      background(160,82,45);
        this.button3.hide();
         this.question3.hide();
         this.input6.hide();
         this.question4.show();
         this.button5.show();
         this.button6.show(); 
         this.button4.show();
         this.button5.mousePressed(()=>{
          this.button5.style("background-color","yellow");
          this.button6.style("background-color","white");
         })
         this.button6.mousePressed(()=>{
            this.button6.style("background-color","yellow");
            this.button5.style("background-color","white");
           })
     })
     this.button4.mousePressed(()=>{
       background(34,139,34);
       this.button4.hide();    
       this.question4.hide();
       this.button5.hide();
       this.button6.hide();  
       this.button7.show(); 
       this.button8.show(); 
       this.button9.show(); 
       this.button10.show(); 
       this.button11.show();
       this.question5.show();

       })
       this.button7.mousePressed(()=>{
         background(245,242,208);
        this.button7.style("background-color","yellow");
        this.button8.style("background-color","white");
        this.button9.style("background-color","white");
        this.button10.style("background-color","white");
        this.button11.mousePressed(()=>{
          background(148,0,211);
        this.question5.hide();      
        this.button7.hide(); 
        this.button8.hide();
        this.button9.hide(); 
        this.button10.hide();
        this.button11.hide();  
        this.question6.show();
        k.show();
        this.button12.show();
        

        })
       })

       this.button8.mousePressed(()=>{
         background(148,0,211);
        this.button8.style("background-color","yellow");
        this.button7.style("background-color","white");
        this.button9.style("background-color","white");
        this.button10.style("background-color","white");
        this.button11.mousePressed(()=>{
          this.greeting.show();
          this.question5.hide(); 
          this.button7.hide(); 
          this.button8.hide();
          this.button9.hide(); 
          this.button10.hide();
          this.button11.hide();
          })
       })

       this.button9.mousePressed(()=>{
        background(148,0,211);
        this.button9.style("background-color","yellow");
        this.button8.style("background-color","white");
        this.button7.style("background-color","white");
        this.button10.style("background-color","white");
        this.button11.mousePressed(()=>{
          this.greeting.show();
          this.question5.hide(); 
          this.button7.hide(); 
          this.button8.hide();
          this.button9.hide(); 
          this.button10.hide();
          this.button11.hide();
          })
       })

       this.button10.mousePressed(()=>{
        background(148,0,211);
        this.button10.style("background-color","yellow");
        this.button8.style("background-color","white");
        this.button9.style("background-color","white");
        this.button7.style("background-color","white");
        this.button11.mousePressed(()=>{
          this.greeting.show();
          this.question5.hide(); 
          this.button7.hide(); 
          this.button8.hide();
          this.button9.hide(); 
          this.button10.hide();
          this.button11.hide();
          })
       })

       this.button12.mousePressed(()=>{
         background(139,0,139);
       this.question6.hide();
       this.button12.hide();
       k.hide();
       this.question7.show();
       this.input8.show();
       this.input9.show();
       this.button13.show();
       })

        this.button13.mousePressed(()=>{
          background(139,0,139);
          var ref = database.ref('Hospitals');
          ref.on('value',gotData);
        this.input8.hide();
        this.input9.hide();
        this.button13.hide();
        this.greeting.show();
        this.question7.hide();
        this.update(this.input1.value(),this.input8.value(),this.input9.value());
              })
       




}
update(k,b,c,d){
  var HospitalIndex = "Hospitals/" + k;
  database.ref(HospitalIndex).set({
    Latitude : b,
    Longitude : c
  });
}

};