import {Dispatcher} from "flux";

const flux = new Dispatcher();

function register (callback){
  return flux.register(callback);
}

function dispatch(actionType, action){
  console.log(actionType);
  flux.dispatch(actionType, action);
}

export {register, dispatch};
