import { ISpinner } from "./ispinner";

export function Spinner(){
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldFunction = descriptor.value;
    descriptor.value = async function(...args:[]){
      const spinnerComponent: ISpinner = this as ISpinner;
      try{
        spinnerComponent.on();
        const result = await oldFunction.apply(this,args)
        return result
      }
      catch(err){
        console.log(err)
      }
      finally{
        spinnerComponent.off()
      }
    }
  };
}
