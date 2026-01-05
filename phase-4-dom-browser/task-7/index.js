// TASK-7 Pubsub function and its implementation
  function createPubSub(){ 
     const events = {}; // yha events or subscriber add honge | FORMATE => { eventName : [callback1 , callback2]}

      return{
         subscribe(eventName, callback){    //subscribe
            
            // agar event phli baar aaya hai to 

            if(!events[eventName]){
                 events[eventName] = [];
            }
              //callback ko eventlist me add krege
               events[eventName].push(callback);

               return {
                 unsubscribe(){
                     events[eventName] = events[eventName].filter(fn => fn !== callback);

                 }
               };
         },
         //Publishing

         publish(eventName, data){
   if(events[eventName]){ 
      events[eventName].forEach(fn => fn(data));
            }
         }
      };
  }


  //let's test

  const bus = createPubSub();

  // subscriber 1
   const sub1 = bus.subscribe("order_created", (data) => { 
    console.log("OrderCreated: ", data);
   });
   // subscriber 2
   const sub2 = bus.subscribe("order_created", (data) => { 
    console.log("OrderCreated: ", data);
   });
   // subscriber 3
   const sub3 = bus.subscribe("order_created", (data) => { 
    console.log("OrderCreated: ", data);
   });
   

//dusra event
 bus.subscribe("payment_done",(data) => {
     console.log("Payment Done :", data);
 });

 //publish events 
  bus.publish("order_created",{id : 1});
  bus.publish("payment_done",{id: 2});

  // unsubscribe one listener
   sub1.unsubscribe();
   // publish again
    bus.publish("order_created",{id : 3});
