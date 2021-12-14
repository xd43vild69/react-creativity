export default class CreativitySelection {

    getSelection(array:Array<string>):string {
        let numberR = Math.floor(Math.random() * array.length - 1) + 1;
        //array.forEach(item => console.log(numberR.toString()));
        //console.log(array[numberR])
        return array[numberR];
    }
}