const  createScope=({globals:{externals,require:topScopeRequire,utils}})=>({
    parent:{scope:parentScope={},path:parentPath=[]},
    child:{firstName:myFirstName}
})=>({
    mapScopeProps = ({props})=>props,
    declareLocals = ()=> {},
    
    /*I know. confusing. THIS IS the crux of confusion, at least mine.
    this is the globals binder of this func (after createScope was called with globals), 
    call it with parent,child and get createLocalScope
    in full monty version this will be a clocked func with more straightforward syntax to keep track of
    timing sequences   
     */
    getCreateLocalScope  
})=>{
    const localFiles=require('./localFiles')({externals});
    const {_}=externals;
    const {SelfBinder}=utils;
    const myPath=parentPath.push(myFirstName);
    const handleModules=({insertToScope,parentScope})=>{
        localFiles({topScopeRequire,path:myPath}).makeScope({parentScope,
            handleModule:({currentScope,fileName,require})=>insertToScope({require,
                scope:currentScope,
                fileNameObj:new (class {
                    constructor(fileName){
                        this.fileName=fileName;
                        const [firstName,flavor='val']=fileName.split('$');
                        Object.assign(this,{fileName,firstName,flavor})
                    }
                })(fileName)
            })
        })
    };

    //a func to handle insertion of single el into scope
    const insertElIntoScope=({initValue=null,scope,name})=>{
        const {set,get}=new class extends SelfBinder{
            constructor(){
                super();
                this.bindProtoMethods();
                //this.flavor;
                if(initValue!==null)Object.assign(this,{
                    value:initValue,
                    isSet:true
                })
            };
            set(value){
                this.value=value
            };
            get(){
                const {value}=this;
                if(!isSet)return value;
                return flavor==='val'?value:type.of(
                    /*a new scope is created for a func by extending the parent scope with func props mapped
                     by the receipe
                     */
                    (props)=>value({
                        scope:Object.create(scope,_.objectMap(
                            mapScopeProps({props}),
                            ({prop,propName})=>({
                                value:prop,
                                writable:false
                            })
                        ))
                    })
                )
            }

        };
        return Object.defineProperty(scope,name,{set,get});
    };
    const myScope=handleModules({
        insertToScope:({
            currentScope:myScope,
            fileNameObj:{firstName,fileName,flavor},
            require
        })=>insertElIntoScope({
            initValue:require(`./${fileName}`)({externals, utils,
                createLocalScope:getCreateLocalScope({
                    parent:{scope:myScope, path:myPath},
                    child:{name:firstName}
                })
            }),
            myScope,
            name:firstName
        }),
        parentScope:prevEls
    });
    declareLocals({declare:({initValue,name})=>insertElIntoScope({initValue, scope:myScope, name})});
    return scope
};
export default createScope()
