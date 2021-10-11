const express = require('express')
const app = express()
const modelStopwatch = require('./model/stopwatch_model')
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
// Stopwatch Split
app.get('/getStopwatch', (req, res) => {
  //get stopwatch split
  var data = {
    id_stopwatch: req.query.id_stopwatch
  }
  new modelStopwatch().getSplitTime(data).then(x => {
    res.status(200).send({
      message: 'berhasil mengambil data',
      data: x
    })
 
  }).catch(err => {
    console.error(err)
    res.status(500).send({
      message: 'sedang mengalami error',
      detail: err
    })
  })
})
 
app.post('/postStopwatch', (req, res) => {
  //post stopwatch split
  var data = {
    index: req.query.index,
    time: req.query.time,
    id_stopwatch: req.query.id_stopwatch
  }
  new modelStopwatch().createSplitTime(data).then(x => {
    res.status(200).send({
      message: 'berhasil mengambil data',
      data: x
    })
 
  }).catch(err => {
    console.error(err)
    res.status(500).send({
      message: 'sedang mengalami error',
      detail: err
    })
  })
})
 
 
 
app.post('/deleteStopwatch', (req, res) => {
  //delete stopwatch split (di ajax tidak ada method untuk delete)
  var data = {
    id_stopwatch: req.query.id_stopwatch
  }
  new modelStopwatch().deleteSplitTime(data).then(x => {
    res.status(200).send({
      message: 'berhasil menghapus data',
      data: x
    })
 
  }).catch(err => {
    console.error(err)
    res.status(500).send({
      message: 'sedang mengalami error',
      detail: err
    })
  })
})
 
//END STOPWATCH SPLIT
 
app.get('/getStopwatchTitle', (req, res) => {
  //get stopwatch title
  var data = {
    id_stopwatch: req.query.id_stopwatch
  }
  new modelStopwatch().getTitle(data).then(x => {
    res.status(200).send({
      message: 'berhasil mengambil data',
      data: x
    })
 
  }).catch(err => {
    console.error(err)
    res.status(500).send({
      message: 'sedang mengalami error',
      detail: err
    })
  })
})
 
app.post('/postStopwatchTitle', (req, res) => {
  //post stopwatch title
  var data = {
    title_task :req.query.title_task,
    id_stopwatch: req.query.id_stopwatch
  }
 
  new modelStopwatch().getTitle(data).then(x => {
    if(x == null){
      new modelStopwatch().createTitle(data).then(a => {
        res.status(200).send({
          message: 'berhasil membuat title',
          data: a
        })
      })
    }else{
      new modelStopwatch().updateTitle(data).then(b => {
        res.status(200).send({
          message: 'berhasil update title',
          data: b
        })
      })
    }
 
  }).catch(err => {
    console.error(err)
    res.status(500).send({
      message: 'sedang mengalami error',
      detail: err
    })
  })
})
 
 
 
 
 
 
 
 
module.exports = app;
