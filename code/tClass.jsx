`export default ({externals:{t}})=>({
    methods={},
    instanceProps={},
    constructorProps={},
    extendeeType,
    extendeeClass
})=>{
    const myType=Object.assign(
        t.refinement(t.Function,(C)=>{
            if(!C.constructor) return false;
            return checkMyMethods(C.prototype)
        },'class'),
        {methods, instanceProps, constructorProps, extendeeType,of,isMyInstance,checkMyMethods,
            extendeeClass:(!extendeeClass && !extendeeType)?Object.constructor:extendeeClass
        }
    );
    const isMyInstance=(c)=>{
        t.struct(instanceProps).is(c);
        if(extendeeType)extendeeType.isMyInstance(c)
    };
    const checkMyMethods=(proto)=>{
        if(!proto) return false;
        if(!t.struct(methods,{strict:true}).is(_.omit(proto,'constructor'))) return false;
        if(extendeeType) return extendeeType.checkMyMethods(Object.getPrototypeOf(proto));
        if(extendeeClass) return extendeeClass===proto.constructor
    };
    const of=(C)=>{
        myType.is(C);
        return class extends C {
            constructor(props){
                super(t.struct(constructorProps)(props));
                myType.isMyInstance(this)
            }
        }
    };
    return myType;
}`
