// ============================================================================
// Type definition
//
export enum StateEnum {
  toDo  = "toDo",
  done  = "done",
}

export interface ITodo {
  id    : number;
  state : StateEnum;
  todo  : string;
}
