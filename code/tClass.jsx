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
        if(extendeeType)extendeeType.is
