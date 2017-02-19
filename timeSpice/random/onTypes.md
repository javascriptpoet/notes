#Basic rules
*each scope element is of type
*the type of each scope element is declared by the token in its file/dir name
*the type token in el file name can define some props of type but not necessarily all of them or even none.
*each el type can be refined in the index of its parent folder by define func
*type is anything meta about an element that can be predefined before a func is executed or a value is initialized
*type of a structured element is defined by the structure inside it. The type gets refined in the index files of all
downstream scopes, that information gets collected at define time from all children in each scope and is used to compose 
the type of that structured element.

#Type composition
*Types are composed react style from previously declared types
*These prev declared types are visible in types scope in each folder.<br>
Types is the shadow of scope and gets extended with local types in each folder


##Difference between structured els and non-structured els
structured scope elements are folders full of structure
