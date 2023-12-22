class Todo {
  constructor(){
    this.list=[]
  }
  add(item){
    this.list[this.list.length]=item
  }
  remove(index){

  }
  update(index, item){

  }
  getAll(){
    console.log(this.list)
  }
  get(index){

  }
  clear(){
    list=[]
  }
}

list1= new Todo();
list1.add(2)
list1.add("a")
list1.getAll()