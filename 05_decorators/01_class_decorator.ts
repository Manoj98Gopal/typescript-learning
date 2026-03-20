
function Component(construcor:Function){
    console.log("Component decorator called")

    construcor.prototype.uniqueId =  Date.now()
    construcor.prototype.insertInDom = () => {
        console.log('Inserting the component in the Dom')
    }
}

@Component
class ProfileComponent {

}