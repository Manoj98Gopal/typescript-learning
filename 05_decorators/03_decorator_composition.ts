
function Component2(construcor:Function){
    console.log("Component decorator called")
    construcor.prototype.uniqueId =  Date.now()
    construcor.prototype.insertInDom = () => {
        console.log('Inserting the component in the Dom')
    }
}

function Pipe(constructor:Function){
    console.log("Pipe decorator called")
    constructor.prototype.pip = "pipDecorator"
}

@Component2
@Pipe
class ProfileComponent2 {

}