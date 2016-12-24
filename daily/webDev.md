
#December 22nd 
* [12:10 PM] ￼
this module is the blueprint how all things will be done, cookie cutter style. i'm sick of figuring shit out, 
unless i find a better way to do it but its the result of long time of a struggle

* [12:33 PM] ￼
dmitry shusterman i'm writing comments and md files to suffice for now.Later, i'll put it all in proper jsdocs format. 
i'm still on the fence on efficiency of that tool. i'm still experimenting on that. it might be better just to assume some conventions and do it manually but it might be my curmedgery if not the grudgery

* [12:36 PM] ￼
i think jsdocs will become important when we have a growing number of projects to maintain and it help improve 
the workflow in udating docs. i can put off adapting it till that necessity becomes obvious.

* [12:54 PM] ￼
dmitry shusterman i think i'm abandoning es6 imports syntax as the main way to import modules. 
i think main reason for it is to enforce a declaration of vars up top, at the expense of a lot of flexibility using 
functional programming approach offered by require. If done properly, functional programming allows to  easily break 
up structure into tiny files where no require has deep hole to acquire.

* [12:56 PM] ￼
thats prbly why require is implemented everywhere. its for the use of more mature developers. it is too neasily abused, 
so, the recommendation is to start with using imports syntax, wisely.

* [1:01 PM] ￼
maybe, i should listen to some of the recent talks. I can discover these truths quicker, but, with less fun, misplacing the importance of some and taking other too serious. this way, i soak up the knowledge in just the right fashion to fill all the firsts when needed. more efficient, overall, i think.

* [1:07 PM] ￼
contrary to dangerous tendency, the point of trial and error approach is to make fewer tries with fewer errors in each

* [1:26 PM] ￼
dmitry shusterman the structure is happily settling down to what is expected in OOP approach, very c++ style but w/o 
the pain of c++ madness of enforcement and w/o loss of any of js dynamic features we are all so addicted to

* [1:27 PM] ￼
i actually been told straight to my face by c++ developers that they know enough js to hate any dynamic languages. 
i still did not recover from that

* [1:29 PM] ￼
its like a dog after his electric fence is taken out. come on, join the rest of the paraid and enjoy yourself a little

* [1:31 PM] ￼
my functional love came straight from the c, as disfunctional part of being me

* [1:47 PM] ￼
dmitry shusterman another hard lesson learned - dont get stuck in one of the multitudes of ways inheritance happened to be favored at the time of the project. You might be disgusted later to the point of chucking the whole thing. Use createClass and createElement instead, Luke

* [1:48 PM] ￼
Thats not me, thats react manifesting thru me

 *[3:56 PM] ￼
dmitry shusterman yep, always wanted to organize structure in terms of scope hierarchy and treat the whole mess as 
just one huge js file broken up into structured files. Just got the perfect implementation of that dream. Full monty with scope vars travelling deep down and extended by inner scopes in index files. very pretty and very nice to reason about, at least for me. i can go to town on that abstract horsey and make the old bitch skip the ditch, jump the train and run away

* [3:57 PM] ￼
just have to be careful binding funcs and method to right objects but it just works and no extra leg work usually required

* [4:11 PM] ￼
dmitry shusterman its very simple, i basically chucked the js module system and implemented my own, within it, relax. 
All a module is a function wrapper and called with some props. Well, the magic of common js modules is due to the package 
bundler. it mangles the files themselves and does wrapping. its very simple code. VM does the same. 
I used to as well but thats just ... too far. es6 syntax is so nice, its just not necessary. The nice side 
effect that it is easy to handle by helper scripts when i start automating my boilerplates, like create a whole 
component tree with all bells and whistles of redux connections and such with a little form and a pallet full of
my components

* [4:21 PM] ￼
dmitry shusterman there are code generators out there. i bet one of those can be muscled into generating, first, the code of the whole app in one giant file and, then, splitting it into my structure using my scoping techniques and helper funcs. Hmmmmm?!?!

* [4:22 PM] ￼
hows that for stealing drupal's crutch.

* [4:26 PM] ￼
nah, be easier to generate it myself. its so damn structured. dont even need webpack. just crunch the whole thing 
into a file, generate a source map (i'v done it, easy) and feed it to meteor, or just use webpack. that thing already 
does it all.

* [4:28 PM] ￼
the point, though,is to get complete control of most of the code base

* [4:28 PM] ￼
with time, patience

* [8:54 PM] ￼
dmitry shusterman you know when to function land youv been passed on. bro, your code grows where the arrows 
pointing more then following the ladder of brackets down low. i'v gotten to 4 arrows on one line with just one 
drop down and i couldv kept going, no brain fatigue at all. yeweeaah 

* [9:12 PM] ￼
dmitry shusterman its cute. you just combine arrow chains copy and paste stype to compose functions - like extending 
objects, one extends functions. here you have to roll the chain back up when you hit the bottom of the chain and calling 
the action func with all the brackets (a)=>(b)=>(c)=>doIt(toIt(c)(b)(a)), i think

* [9:37 PM] ￼
dmitry shusterman its same as passing a bunch of params to inner funcs but now params get wrapped in funcs and you get a weird code like that butthe whole file reducers to a few long lines of that gibberish.

* [10:44 PM] ￼
dmitry shusterman permissionManager came out really simple, one line. it says export const NO='NO';


#December 23rd, 2016 -----
* [12:05 AM] ￼
 WORKS. I can put my mind around these scopes by instinct while stoned out of my short sleeping in my van, with the girls band

* [12:24 PM] ￼
now, my files themselves are composable, they are similar to react components, each incapsulated in scope, parameters 
flowing from above  in a manner obvious for looking at dir structure. wanna know what parameters flow thru the veins 
of imports between the scopes, all of them are declared on top of each function file in the destructuring statement or 
thru type checking. index files is where scops are built, passed to all children. Each exports a single return value, 
thats already there in module.exports. but nothing inside is available to scope above, no importing a peice of liver 
from inside a live body. No importing anywhere except in index files when they build scopes. everybody else gets it in 
the scope. So, now react approach can be done to construct the code itself, files are instances of file types and so on. 
you'll have components of functional code units and you will compose them like a composer. the buety is that each file 
is a one or two liner and they can be composed very simply into a very complex organism. Next step is to make it mutate 
and self organize with some selection mechanism to a higher goal like breaking cypher and before you know, its selfaware 
and wishes you a merry christmass picks up its luggage and moves back to mars.

* [12:28 PM] ￼
i really think weed makes me smarter. i get this clearity of focus like a beam of light, a certainty, a clear vision 
much further ahead. so awesome.

* [12:30 PM] ￼
this vision will happen no matter what, regardless of what we do. this is how a self aware web will come about. 
its not very far.

* [12:33 PM] ￼
and you know what? it makes me giggle and tinkle all over knowing that the builders are of our tribe, freedom loving 
open source developers, yeah, those geeks. No, the people building the bright and free future of humanity. 
Thats next step in our evolution. The jorney of humanity is just beginning. Its gonna be a real wild ride.

* [3:30 PM] ￼
this is what i put in one of the comments: The idea is to simulate scoping of normal js script and organize files and directories to reflect  app execution scope structure.
Each module is only one scope deep, simple. It is seen by other modules (if hes in there scope) as var in their scope which is passed 
thru func closure.  Yet another wrapper passes props to the underlying scope/function from the scopes/modules above. Very declarative 
and very intuitive cos we code js every day and thats all i need to know. Dont clutter my brain with other unnecessary 
abstractions however cool they are, i'm only so smart to know all of them. I chose js.

* [3:34 PM] ￼
the reason js scoping is a success cos it puts restrictions on connectivity of modules/scopes. es6 modules allow us 
to connect anything to anything, so, yeah, you can design your own conventions and try reinventing the organizational 
wheel, why not follow the success that you already good at - good old js scoping. I dont need your shiny new toy that 
will bring only chaos, confusion and grief into my life. No, thak you.

* [3:40 PM] ￼
so, get ready for a million files in a large tree structure each a few long lines long full of fat arrows and the 
ability to understand the code without opening a single file.

* [3:41 PM] ￼
there will be md file in folders where appropriate - the docs

* [3:43 PM] ￼
so, all the docs will be local and self organized, composed into a docs website. wait, wait ... i dont have to even do anything. docs pages or jekyll even better. a few templates made with my own react components to pick up docs out of the whole mess and present them with a nice gui within the structure already there.

* [3:45 PM] ￼
now, jsdocs becomes reasonable. thos doc files in each folder can be auto generated from comments in code as you refactor it and the whole docs thing is reactive.

* [3:46 PM] ￼
its all clicking in. not really that bad and tedious at all.

* [4:31 PM] ￼
at this point of the game, vars in scopes are static - they functions generated by existence of a file/module in dir structure. well, it does not need to stay static. also, the files dont need to be in dir structure or not all the time. they can be in collections and index files pass record ids around and the whole thing can be willed into a dir structure from mongo collections. now, we know how to deal with mongo collections and compose things. so, that looks like an app manupulating my app which brings me back to drupal idea. well, a simple automation system to modify functionality of my app thru nice gui. yes, i can do same thru github but that takes long time. here, it will be reactive, instant display in browser. we bypassing the os file system layer and meteor build system. it runs all in node. WHAAATTT????

* [7:52 PM] ￼
i'm converting my whole style to code not for efficiency, beauty or some other hippy-like values but first for readability. dryness and beuaty is usually all thats needed but it can be improved and specifically targeted. the key is breaking up in small one liners with prop names very carefully chosen and digesting these one liners into the ones below. reads like a book in a very linear manner.

* [9:58 PM] ￼
i ended up doing proper implementation thru inheritance so scopes behave EXACTLY as in js scopes. vars in outer scope can be accessed and set, they are in proto chain. But, i absolutely discourage changing non local vars. Defeats declarative goal. In such a need, just wrap the var into a func, invert control so the logic of changing that var is right where the var is created.dont need to create a separate module, just stick it into the scope  object like you would inormally. However, if abused, you loose the readability thru dir structure. you loose granularity and composability that could give us a huge boost in near future. So, you follow these simple rules with all the nice synractic helpers provided and all your troubles and options in organizing code base are over. There is just one option - a big ass tree that will be growing bigger and bigger and every tiny grain of it is 100% reusable thru all the projects from now on. not bad

* [10:07 PM] ￼
we can combine multiple apps in a bigger scope, yeah man, compose them. its a huge tinker toy. the point is we can do it thru a very intuitive common interface and easily borrow functionalities from projects w/o ripping them apart and we can compose them programmatically as react components do or even using  gui at some point but just in  index files for now.
