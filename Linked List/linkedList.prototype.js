function Node(v){
  this.value = v;
  this.next = null;
}

function LinkedList(){
  
  this.head = null;
  this.tail = null;
  this.count = 0;
}

LinkedList.prototype.add = function(v){

  var nodeToAdd = new Node(v);

  if (!this.head){
    this.head = nodeToAdd;
    this.tail = nodeToAdd;
  } else {
    this.tail.next = nodeToAdd;
    this.tail = nodeToAdd;
  }

  this.count++;
};

LinkedList.prototype.remove = function(v){

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
};

LinkedList.prototype.has = function(v){

  var current = this.head;

  while (current){

    if (current.value === v){
      return true;
    }

    current = current.next;
  }

  return false;
};

LinkedList.prototype.reset = function(){
  this.head = null;
  this.tail = null;
  this.count = 0;
};

LinkedList.prototype.copyToArray = function(){
  var current = this.head,
        array = [];

  while (current){

    array.push(current.value);
    current = current.next;
  }

  return array;
};