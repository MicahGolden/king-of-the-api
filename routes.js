import Router from 'express';
const router = Router();
const charactersArray = 
["Hank", 
"Dale", 
"Bill", 
"Boomhauer"]

router.get("/", (req,res) => {
  res.status(200).send({
    message:"King of The Hill API Send Character in body",
    Characters: charactersArray
  })
})

router.post("/",(req,res) => {
  charactersArray.push(req.body.Character)
  res.status(201).send({
    message: `Added your character: ${charactersArray}`
  })
})

router.delete("/", (red,res) => {
  charactersArray.pop();
  res.status(201).send({
    message: `Removed a Character: ${charactersArray}`
  })
})
export default router;