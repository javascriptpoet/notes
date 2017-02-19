#i was asking that myself a lot of times. 
 It does not seem to work for me. The syntax of react is geared towards html generation. yeah, one can use react 
 components to compose anything but that is just silly. its three lines of code to create react like syntax to 
 compose sweet mama from a caw (just ignore it). My tTypes are good example. i'll throw that package on github for you. 
 I got real sweet syntax for form composition and i'm using it, all debugged. My framework makes that composition trivial.
 You just build a type of scope - compose from other types built in and created. Takes a few lines of code to extend those 
 types. And, you abstracted composition into some sexy name of a time tick that performs that sex for you. Next step is to 
 teach it a few nice sex tricks. Forget it.
 Simply, react syntax is good for what react does and my framework is good for other stuff. 
 yes, they both can be used for most anything but so is anything else you see. Its all about how convenient it is. 
 Right tool for the right job. Start unifying different tools and end up with a hammer with chair 
 legs attached and a long manual describing the safety features.
 
 another benefit, it channels one to use declarative and healthy patterns like granular composable modules and type declarations in index files and it exposes a lot of type info thru the tree struct names. It does not force you into it like into straitjacket. It bribes you on ritious path by convenient syntax. I learn well from the owners of the matrix i found myself living in. Make it convenient and they will fall into the trap, like an open manhole around a blind drift corner.

look at imports/utils/T in ushpa workspace. Thats composable tcombs Tcomb forms are pretty composable out of the box. I just tidied it up. I created a container {tcombType,options} and called that a tType. Then I created a react clone of syntax to compose these types. The point, i want these two bastards reunited in my container jail.

[6:36] ￼
if i ever get going on that project, you'll see how they are used. i already have working forms using that syntax. I'll be dropping it in as i build the app.

jspoet [6:50 PM] ￼
So, now i have tType scope type and form scope type. tType composes the tcomb type of a form and form scope type sits above tType scope and stuffs that tType into t.form.Form element. OK, i can do it with react components but i cant see what those modules are in the tree. react does not do it. React is not declarative enough for what i have in mind. its just easier and cleaner to put a wrapper around it, react style.  One more time, composing those screens like we were trying to do is just one use case and yes, it overlaps a lot with react. However, other complexities can be composed as well that would be awkward with react. Perhaps, your game tools are some of those. I think it will give us tools to go beyond react, i dont know where yet. I just have intuition that it can allow for a lot more complex apps then we do now.  its still a bit awkward to use but the syntax is really evolving rapidly. I feel attraction to this like a fiend to crack.

jspoet [6:58 PM] ￼
im trying to put my mind around how i would use react to do what my framework does. it means that every func in my app would be a react component. What if i want to compose an entety not related to html? OK, i'll stick it as a static prop and compose it in render func. Thats just ugly and will get very confusing fast. React does not type check those static props, so, that has to be taken care of. React does not automate index files. OK, i can do what i do now examining require.context. By the time i get done with it it will be my framework. THIS IS EXACTLY WHAT HAPPENED. I'v been around that block. Perhaps, i missed some good ways but if i dont see them by now, its just not gonna work for me. It will be too confusing. I want to spill my own faulty mind into javascript. Its mine, not react.

[7:02] ￼
and, i had a nightmare with react traces at debug time. maybe, there are tools that can help.  This stuff takes care of. i can create my own tracing functionality in a few lines of code. I wrapped the whole js, bro. Its eating out of my hand. anything you want is a few lines of code and no wasted time on googling. sick of it.
[7:10] ￼
it will be very intuitive to use, really. let me finish the syntax. It will be an iterative process. we'll fine tune it for each type of apps we'll be doing.

 the code will be pretty easy to follow. Right now i dumped a lot of complexity into one func. Its def overloaded but thats just to bootstrap this app i have to do and to quickly straighten up the syntax. I will be using a similar bootstrapping func to create the framework but it will be much simpler and a lot more functionality will be organized in nice one liner modules similar to what its trying to help do. its a trade off of bootstrap.
