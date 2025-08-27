## [LiveLink](https://rakibislam22.github.io/emergency-Hotline/ "LiveLink")


### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer**

* *getElementById("id")* is single element Selected by **ID** and returns the first element with the given ID.

* *getElementsByClassName("class")* is HTMLCollection selected by **Class** and returns all elements with the given class. And also Live updates with DOM changes.

* *querySelector("selector")* is select Single element	CSS selector and returns the first element matching a CSS selector.

* *querySelectorAll("selector")* is select **NodeList** (static) of CSS selector and returns all elements matching a CSS selector. Static, does not update automatically.

--

### 2. How do you create and insert a new element into the DOM?

**Answer**

1. Firstly Create element using Element Creator : *document.createElement()*

2. Secondly Give/Set content/attributes.

3. Finally Insert it into DOM: appendChild

--

### 3. What is Event Bubbling and how does it work?

**Answer**

Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.

--

### 4. What is Event Delegation in JavaScript? Why is it useful?

**Answer**

Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the *.target* property of the event object.

--

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**Answer** 

**preventDefault() Method:** It is a method present in the event interface. This method prevents the browser from executing the default behavior of the selected element. This method can cancel the event only if the event is cancelable. For example, there are some events that can not be prevented, such as the scroll and wheel event.

**stopPropagation() event Method:** This method is used to prevent the parent element from accessing the event. Basically, this method is used to prevent the propagation of the same event from being called. For eg,  we have a **button** element inside a **div** tag and there is an **onclick** event on both of them, then whenever we try to activate the event attached to the **button** element, then the event attached to the **div** element also gets executed because **div is the parent of the button element**.


---