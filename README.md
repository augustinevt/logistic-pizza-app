make queflow
  * initial page load ask name. input: "fred"
  * auto initiate order que +
    * auto initiate pizza que +
    * ask to reinitiate pizza que input: "yes" +
  *ask for address +
  * ask to reinitiate order que input: "no" +

  notes: I would like to refactor this to not use recursion. I would like to know which is prefered

  make ques send user input to object constructors
    * pizzaQue send user input in new Pizza Object +
    * make orderQue use user input in to make Order Object +
    * make initialQue make new customer object with user input +
    * make orderQue send user input to customer.orders +
    * make orderQue send user input to make address object and send object to order object
    * make initialQue get user input and make a new billingInfo object and send that object to     the customer


  Display On the Screen

    * there is a div and certian functions fill it with forms that return values+
    * display all order divs

# NOTE: still at this at submission
