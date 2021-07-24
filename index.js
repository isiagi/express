const express = require("express");
const data = require("./data");

let length = data.length;

const app = express();

app.use(express.json());

app.get("/data", (req, res) => {
  res.status(200).json({ data });
});

app.post('/data/post', (req, res) => {
  let id = length += 1;
  const {name, post} = req.body;
  data.push({id, name, post});
  res.status(200).json({data})
});

app.patch('/data/update/:id', (req, res) => {
  const {id} = req.params;
  const {name, post} = req.body;
  const h = data.filter((story) => {
    story.id === parseInt(id) && story.id === parseInt(id);    
  })
  console.log(h);
  h[0].name = name;
  h[0].post = post;

})

app.delete('/data/remove/:id', (req, res) => {
  const {id} = req.params;

  const postIndex = data.map((story) => {
    return story.id
  }).indexOf(parseInt(id));
 
  if(postIndex === -1){
    return res.status(400).json({message: 'Post does not exist'})
  }

  data.splice(postIndex, 1);
 
  return res.status(200).json({data})
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Sever Up And Running on Port ${PORT}`);
});
