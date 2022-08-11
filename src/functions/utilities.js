export const checkValidityOfAllInputs = () =>{
        var inputs, index;

        inputs = document.getElementsByTagName('input');
        for (index = 0; index < inputs.length; ++index) {
            inputs[index].reportValidity();
            if (!inputs[index].checkValidity()){
                return false;
            }
        }

        return true;
}