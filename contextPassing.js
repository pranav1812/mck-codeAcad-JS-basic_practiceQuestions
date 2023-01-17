const obj= {
  name: 'Some User',
  regular(param){
    console.log(this, param);
  },
  arrow: (param)=> {
    this.param= param;
    console.log(this, param);
  }   
};

obj.regular.call({a: 1}, 'val');

obj.arrow.call({a: 1}, 'val2');