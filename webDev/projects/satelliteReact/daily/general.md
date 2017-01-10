# 12-14-16
 
* <strong>yeeessss!! shit started to fire. Got my summernote type. </strong><br>
    it was harder then expected. went thru typical react version hell. jquery and react just hate each others guts, webpack does its own weird packaging stuff that leaves jquery out somehow and they all 
       insist on specific different versions of everything. still, it can all be figured out and forked and well worth the trouble.

  
* <strong>Summernote is out,react-rte is in</strong><br>
The lesson - do not mess with jquiry and be wary of not pure react implementations. can be very time wasteful
    Still reat-rte does not do ssr. thats for later. Guess if someone lands on that form, theyll get a textbox.

# 12-15-16

* <strong>its working, the whole setup</strong><br> 
i'm getting faster and more efficient every day. almost mechanical. My brain is spending less of available focus on this
menial tasks that were so confusing ... last night and lets me focus on the next layer of the onion above. This is exponential
scale - each linear step to the surface of the onion doubles or tripples my productivity and quality of the product.

* <strong>Reusing reacty pattern of composability is what makes it work</strong><br>
I dont have to waste concentration on shifting mind gears into some other pattern. It works, just dont want to be bothered
with infinite number of other ways.

# 12-17-16

* <strong>i think i'm gonna take all these abstractions less serious</strong><br>
they just helpers to acheive the main goal which is to build a nice ui for people that trust you to do it. So, i'll start right there, design eactly the look of it and arrange the whole structure to do it the best i know and i do know a few good tricks of the trade now.

* <strong>the pattern tcomb uses is incredibly useful</strong><br>
He says its based on set theory. I dont know what that means exactly but thru my dreams a workable pattern emerged and guess what ... it is the same as tcomb. i wish i could see it before so much time and effort was expanded but i dont regret anything. The path is never straight.
basically, tcomb is a pattern within similar pattern of the whole app and alongside with other similar patterns. feels so right.

* <strong>functional programming </strong><br>
aaaahhhhaaaa!!!! the answer, my friend, is not blowing in the wind, not anymore. Its known as functional programming which is basically a fancy term for wrapping everything into functions, including parameters to these functions and the functions themselves and passing them around like pregnant whors inverting the control in spite of strict regulations and the strong desire by the authorities to break up my local communities inside each cozy file and spread its guts all over the application. We use functions to tunnel thru the layers of scope we created at the start of the project so we dont have to spend days fixing those scopes when they dont fit the new bright idea. we just plod along with what we got and do it in style with all these whoring functions keeping it all local. It keeps us from following the grand plan of building the app, a very liquid entity. We can just start anywhere and finish that part w/o any other part existing and by the time this part is done, the rest of project has fallen in place, victim to the same old patterns of functional programming and the clarity of sanity in your head. It breaks the symmetry of a nice shiny perfect global structure so promised and never gotten into the chaos of freedom that converges on solution. Granted, the solution will be a bit different for each project, i mean the code base and structure will be different each time but thats a huge blessing and saves me from that little guy from the past telling me how to do it. It will fracture into wonderful variations with each project. The only constant is the whorehouse of pregnant functions carrying messages between my scopes despite strict orders

* <strong>ruthless programminging</strong><br>
the other answer, to the same question of getting anything done, is a ruthlessly selfish style of programming. Dont complicate anything unless it has a direct benefit to the project first, maybe with some eye for future projects but, wtf, i'll be able to change a few lines of my own code if i do it as routine with other guys. 

* <strong>breakthru !!!</strong><br>
Functional programming seems to work really well. I'v been looking for these static patterns, each intricate and clever but overall very confusing in a bigger picture. just cant keep track of so many disparate levels. our brains run out of steam after only a few indirection. This approach allows me to freehand complicated stuff with one liners. i can easily keep all logic local just in the right place, in components. The best of it, i'm free of static patterns. no matter how flexible i make one a few days later i tear it apart cos my new bright idea just does not fit. now i can keep it all intact and thru these techniques easily work around the limitations. Each project will be a bit different, together they will converge on a better solution. I'll be able to try new ideas w/o any risk of a dead end. Another way to say it, w/o getting any smarter, i can handle one more level of indirection. thats huge, its like outside looking in, from an extra dimension.

#My code started to get a voice
and it speaks from the pages of files and thru the structure of files in one common language.
I dont know where its gonna take me but i think i'm going the right direction

#Jan 04, 17
##Scoping. its paying off big time. 
Took a little while to sort it out but result is absolutely amazing. I got the whole structure of the app in a few lines of code in one file and all my troubles are over. Just have to fill in function bodies with code but the flow of functions thru the whole app and between build and run time are all clearly defined in one file. Success!!

and that file reads like a marsian english novel

## that time boundary is what was creating all the confusion. 
I can crank thru the scope structure at run time but when anoother dimension of time is added i give up and go skating or prbly should more then i do. This framework gives me clear containers to place my funcs in distinct time scopes within structure scope. Basically, its a two dimensional scoping scheme. Say it again ...

## functional programming makes writing complicated code almost mechanical.
I can write it in a linear fashion or rather fashion of my use case sketch, delaying implementation of pesty functions till later, finetuning syntax and functionality as i develop it. Changes are easy, just add a prop to parameters and add another drop down to the one liner below, split implementation of that dropdown into more one liner files named in simple english.  works, the only thing that works for me.

#jan 06, 17
##what i did is drained the swamp of confusion by solving the issue of bootstrapping
which is the issue of creating a recursive process which repeats itself and naggs the shit out of me cos every time i try a different approach and it extends another recursive process and they just dont play nice inside the sandbox in my head. So, i fixed up that sandbox in my head to be so nice and comfy that i tend to make every recursive process to fit that sandbox and all the other kids that play in it. I'm raisiing all these kids as a part of the same martian russian anarchist culture that is about to take over the world in a one line code.

##that was about my scoping scheme. 
i just realized why i was so driven to develop it at the expense of the rest of the project. but not really, its paying off huge. i ended up rebuilding my universe, myself, the way i code. And i'm aboutto  unleash that new self on the unsuspecting project. It stands not a chance, against one liner lance. 

i speak recursor, a funky dialect of es6 js.

#Jan 08, 17
##yes. i found THE exact footprint of my confusion. 
Bull spot 100%. Its bootstrapping of a recursive process. One or two steps into it and i'm too deep into the rabbit hole. I was doing it all wrong. I was trying to manage the whole tail of recursion thru bootstrap. now i have an extremely simple set of rules and syntax to do it by habit. THAT is the part i was missing. Wow. I just resolved the next would be dive into yet another infinite hole in 2 mins instead of days. There is no other sources of confusion. I'm free of that fucking scourge. DAMN, bro.
a few weeks ago, i went on that desperate quest to help myself out of a nagging sense of confusion that was buzzing over me like a swarm of hornets over an innocent jar of honey. I thought up of an abstraction that would be a lot of work to implement but was promising with a huge payoff or a huge waste of time. It just payed off. Damn.

I'm afraid to jinx it but the scoping abstraction is the right one. Its taking me exactly to the places i always wanted to and new i could go.

##This was not just the last two weeks
I'v been trying for years. I was struggling with the way js modules are implemented, so different from scoping rules of a node script. It was confusing the hell out of me when i would get confused into breaking a large script into modules. Well, i finally had enough skills to solve that problem and very elegantly. The bootstrapping solution came as the first payback when i started using what i cooked up while i was cooking. I cant blame myself for being confused. Maybe, i'm just not the smartest bulb in the dangeon.

##jan 10, 17
#I solved the bootstrap problem 
by organizing the way i think about this class of problems. Life itself is one of that class - we are learning how to live while living. Same rabbit hole, different rabbit. So, i had to solve the mystery of life itself before finishing the project. I hope other problems are easier.
