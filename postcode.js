require('axios').post("https://hacker-ko8g.onrender.com/up",{
  type: "mp4",
  data: "https://i.imgur.com/CYAySrg.mp4",
  code: "12345"
}).then(({data}) => {
  console.log(data)
})
