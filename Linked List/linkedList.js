// linkedList.js

var node = {
  value: null,
  next: null
};

var linkedList = {
  head: null,
  tail: null,
  count: 0,
  add: function(v){

    var nodeToAdd = Object.create(node);
    nodeToAdd.value = v;

    if (!this.head){
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
    } else {
      this.tail.next = nodeToAdd;
      this.tail = nodeToAdd;
    }

    this.count++;
  },
  remove: function(v){

    var previous = null,
        current = this.head;
    
    while (current){

      if (current.value === v){

        if (previous){
          previous.next = current.next;

          if (!current.next){
            this.tail = previous;
          }
        } else {
          this.head = this.head.next;

          if (!this.head){
            this.tail = null;
          }
        }

        this.count--;
        return true;
      }

      previous = current;
      current = current.next;
    }

    return false;
  },
  has: function(v){

    var current = this.head;

    while (current){

      if (current.value === v){
        return true;
      }

      current = current.next;
    }

    return false;
  },
  reset: function(){
    this.head = null;
    this.tail = null;
    this.count = 0;
  },
  copyToArray: function(){

    var current = this.head,
        array = [];

    while (current){

      array.push(current.value);
      current = current.next;
    }

    return array;
  }
};