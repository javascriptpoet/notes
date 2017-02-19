#Basic rules
* each scope element is of type
* the type of each scope element is declared by the token in its file/dir name
* the type token in el file name can define some props of type but not necessarily all of them or even none.
* each el type can be refined in the index of its parent folder by define func
* type is anything meta about an element that can be predefined before a func is executed or a value is initialized
* type of a structured element is defined by the structure inside it. The type gets refined in the index files of all
downstream scopes, that information gets collected at define time from all children in each scope and is used to compose 
the type of that structured element.

#clocked types
* ticking or clocking types is an abstraction that provides sequential define functions to simplify the syntax of object composition recursively thru downstream scopes. 
* Each of those define funcs has a name - the name of time tick. Each define corresponds to value tick of the same name. 
* A value tick is an invokation of tick value func and type tick is an invokation of 
define tick function. 
* Both value and define for each tick are recursive and seek its namesake in all the children scope elements. 
* Each tick returns a value (either type of value at define time or actual value at run time). 
* By default, these tick values are recorded as static props of either type func or the func itself, in effect creating a dict/object. Other ways of comosing ticks can be specified in custom types by extending template composeDefineTicks and composeRunTicks funcs.
* Each tick can take props. prop types are defined by a corresponding define tick.

#Type composition
* Types are composed by refining existing types in a granular way utilizing other types visible in scope
* There is a types scope along with var scope in each folder. They are constructed in similar way by extending
the parent scope with locals.
* There is no global container of types but there is scope type in each folder. The top scope gets to see type scope full
of built in types and it starts the show by refining the locals. 
*Heres how it happens<br>
type of a local element is declared and refined by what is available from its file name. this type appears in type scope
which is passed to define funcs. Further refinement is done in define funcs thru all downstream scopes - they type is visible and anyone can have a go at it. If type is clocked, its even simpler - the tick types get composed into a structure in the top scope and no other massaging is necessary downscope. That clears the periscope (just kidding). 

#How apps are composed
We dont compose apps, we compose types of scope elements. An app is a an element with sandbox scope - a blind kitten. We call it a value element. So, reversely, each value el is an app. Have fun composing apps.
