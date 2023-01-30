  // map类型的的键值对类型可以是任意类型
  let map:Map<string,number> = new Map();
  // let map:Map<string,number> = new Map([["刘天悦",10],["王明",20]]);

  // 设置键值对
  map.set("Jack", 0);
  map.set("Tom",50);
  map.set("王心怡",80);
  console.log("原始map:",map);

  // 删除键值对
  map.delete("Jack");
  console.log("删除Jack",map);

  // 修改键值对
  map["Tom"] = 60;
  console.log("修改Tom分数",map);
  map.set("Tom", 60);
  console.log("修改Tom分数",map);
  // 查找键值对
  let score:number = map.get("Tom");
  console.log(`找到Tom 的分数是: ${score}`);
  score = map["王心怡"]; // 不建议使用这么方式获取值，因为当值是对象类型时，获取对象为undefine
  console.log(`找到 王心怡 的分数是: ${score}`);

  // 判断map中是否存在某个键
  let bool:boolean = map.has("Tom");
  if(bool) {
      console.log("map中含有Tom");
  }else{
      console.log("map中没有Tom");
  }
  
  bool = map.has("Tim");
  if(bool) {
      console.log("map中含有Tim");
  }else{
      console.log("map中没有Tim");
  }

//   // 获取map的长度
//   console.log(`map 的长度是 ${map.size}`);

//   // map中的迭代
//   let keys:Iterable<string> = map.keys();
//   // 迭代map中的所有键
//   for(let key of map.keys()) {
//       console.log("keys",key);
//   }
//   // 迭代map中的所有值
//   for(let value of map.values()) {
//       console.log("values",value);
//   }
//   // 迭代map 
//   for(let entry of map.entries()){
//       console.log("entries1",entry[0], entry[1]);
//   }
//   for(let [key,value] of map.entries()) {
//       console.log("entries2",key, value);
//   }

//   // 遍历map
//   map.forEach((value:number,key:string,map:Map<string,number>)=>{
//       console.log("forEach",key,value);
//   });

//   // 清空map
//   map.clear();
//   console.log(map);
