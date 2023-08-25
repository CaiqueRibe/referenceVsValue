/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "./App.css"

function App() {
   let a = 10
   let b = "Hi"
   let c = a

   // by reference
   c = c + 1 // value of a and c have two different 10s (distinct values)

   // -------------------------------------------------------------------------

   let d = [1, 2] // w/ JS arrays and objects (anything thats not primitive) are passed by refence
   // theoretically c1 = <0x01> // <0x01> = [1, 2]  // <0x01> === memory address
   let e = d // this also gets the the memory address of c1 mentioned above
   e.push(3) // this will effect both c1 and d, since they both reference the same memory7 address

   //  d = [3, 4, 5] // this resets or changes the d variable refrence //d = <0x02> // <0x02> = [3, 4, 5]
   //  // since here above we are overwritting completely the value in d, it wont effect c1

   let c2 = [1, 2] // checking equality for these two will be false since there not the same reference
   let d2 = [1, 2] // since it check the value and in the value there are two memmory locations being used

   function add(array, element) {
      array.push(element)
      // array = [element] // here we would be setting a new value and changing the array's point of reference (new memory address)
      // array = 0x04
   }

   let f = [1, 2] // 0x03
   add(f, 3) // (0x03, 3) // pushing to the meomry address alocated above

   // why is it that when we pass the array and an 3 its appending to the orginal array of [1, 2]
   // the function is receiving the reference value of the array and not the actual value

   return (
      <>
         <div>
            <h2>
               primitive are passed by value, const = c [1, 2]; c.push(3) // we
               can do this cause whats being constant(cant change) is the memory
               reference but the value in that memory can change
            </h2>
            <h3>
               in JavaScript arrays object (essentially anything thats not
               primitives) are passed by reference ---- when we pass an array or
               an object to a function we change the value refernce in memory
               (effects whats outside the function as well)
            </h3>
            <div>
               "a and c" {c} {a} " - poiting to different values"
            </div>
            <br></br>
            <div>
               "e" {e.join(", ")} "d" {d.join(", ")} - when i push something
               into e, changes both variables since d is reference e (same
               reference to memory space) <br></br>
               but if i push a new array into d (d = [3, 4, 5]) it replaces the
               value that d is is referencing too
            </div>
            <br></br>
            <div>
               in these two we get a true since there both pointing to the same
               value space memory
            </div>
            <div>"d === e" {d === e ? "true" : "false"}</div>
            <div>"d == e" {d == e ? "true" : "false"}</div>
            <br></br>
            <div>
               here we get false since they have the same valus, BUT in
               different memory allocations // let c2 = [1, 2]; let d2 = [1, 2]
            </div>
            <div>"c2 === d2" {c2 === d2 ? "true" : "false"}</div>
            <div>"c2 == d2" {c2 == d2 ? "true" : "false"}</div>
         </div>
      </>
   )
}

export default App
