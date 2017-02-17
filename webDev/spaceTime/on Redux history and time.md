i just hit onto something. I can keep an array of prev results for each func elements of my scopes. a fifo queue. For each and every func in the whole app. Wanna time travel? just revert the history for each func. The clock gets set back centrally and you have what redux is strugling to do with all those globals. Why do we need it?

[9:22] ￼
the history is a static prop of each func el. Bingo. Tell me where i'm wrong? It just seem way too easy.

jspoet [9:29 PM] ￼
aha. not all are pure funcs. some have side effects. Thats ok. they can specify a func to reverse that side effect. So, we'll tick the clock forward and we'll tick the clock back each time the use hits back button. Yeah, browser has it but i want that back button to be component wise, one for each scope. it will be composed thru the tree. this means, we can implement multitabbed uis like in a browser and each tab has its own back button and its own history. i'v been trying to put my mind around that for a while. What do you thunk of that?

[9:32] ￼
i could never figure out how to deal with side effects in redux. I dont think they know themselves and everybody is just shooting off the hip. really confusing. This is way more clear to me and does the same a lot simpler. i might be out of my gourd. let me know what you think

[9:34] ￼
this gifts keep falling out of the bag like a fat lazy cat that just plops on the ground and stays there.

jspoet [9:48 PM] ￼
why are we using central global store? redux does allow creating multiple stores. they look down on it but what if ... Say, each scope/tree node has its own store - local state like react component can. Then, to implement ssr we just ship that local state over the wire. Why is the rest of it needs to go? Its silly and inefficient. Except, i'm not looking forward to deal with all that ssr onion. its fairly straightforward except for meteor. have you read thru ReactRouterSSR. Its a confusing mess to me. I think thats because it has that global flavor of meteor. it drives me nutz. All that can be done with one line of code in a composable scenario.

[9:50] ￼
perhaps, we should chuck it all overboard and do it with a proper one liner. have a store for each scope and use redux with all its tools but make everything composable and local.

[9:51] ￼
well, it becomes way too simple to even bother having redux. i think i'll tackle it later or i'll never finish a damn thing.

jspoet [10:07 PM] ￼
if we figure that part, we can easily incorporate redux into scope types and all that boilerplate goes away.  top down parameter flow? OK. why do parameters have to come from the very top. How about from the store in the parent scope or the one above that. I'll just put a wrapper on redux store. Each time you do an action, the wrapper will poke children stores and the parent does not have to know a thing about it. Time travel? we dont need that from redux. we got func history. I dont know. There are a lot of tools developed for redux. Be hard to loose all that. Am i missing something?

jspoet [10:17 PM] ￼
aha. redux is needed cos normally, structure is not organized as ui tree. redux store creates custom tree of parameter flow. my whole premise is to organize screens into a tree struct. so, redux is redundant. the flexibility of structure creates a lot of complexity. I dont see a use case for any other organization right now. There might be one later. Just create another scope type to handle it in a declarative and purpose specific style. Why do i have to deal with extra complexity w/o any benefit to me. I revolt.

[10:18] ￼
I dont need to do ssr now. w/o it, everything is straightforward.

[10:20] ￼
i did not entirely thought it thru. Maybe, you can shoot me down before i fly away into a lala land. I need your help on that.

[10:24] ￼
did you catch that ugly pattern where each third party package has to expose a reducer to hook to your global store. Thats just wrong. They are supposed to be components. This breaks encapsulation. NO GLOBALS, please.

jspoet [10:44 PM] ￼
oh, hell. I'm over it. I'll live with redux. What i will do is compose those silly action type strings thru my tree struct of screens and hook it up in the top scope. I can build it into a reduxApp type like i said before. I cant fix all the wrongs.

jspoet [10:51 PM] ￼
but. i think it just makes sense to declare store as a global element like the global it is so all the packages and screens can see it and handle reducer business locally. problem solved at the expense of a glaring store in top scope. Thats the flavor of reduxApp type, sir, would you like another serving.

[10:52] ￼
so,i dont even need to compose anything, like those reducers, thru the tree. sweet.

[10:56] ￼
OK. i put this thought process down so you can look into my mind better and see the reasons behind what i'm doing. I might be off the deep end. Be my judge. Tell me I'm full of shit if I am. No problem. I hate to spin off into another rabbit hole. Lead me to light, bro.

jspoet [11:06 PM] ￼
but, the func history is still valuable. One use case is dynamic filter implementation. The whole filter can be coded up in a one liner like ({scope:{y:{history:[y1,y2,y3]}})=>(y1+2*y2+.1*y3)

jspoet [11:13 PM] ￼
i already have clockedFunc type. So, i'll massage its syntax a bit and history will be part of it. this can be sweet in digital control apps. Again, all the hard work can be encapsulated into some digitalType of app