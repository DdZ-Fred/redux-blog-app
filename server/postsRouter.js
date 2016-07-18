const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({
    id: '1',
    title: 'my title',
    subtitle: 'My subtitle',
    content: 'Content here 1',
  });
});

router.get('/', (req, res) => {
  res.json([
    {
      id: '1',
      title: 'my title',
      subtitle: 'My subtitle',
      content: 'Content here 1',
    },
    {
      id: '2',
      title: 'my title 2',
      subtitle: 'My subtitle 2',
    },
    {
      id: '3',
      title: 'my title 3',
      subtitle: 'My subtitle 3',
    },
  ]);
});

router.get('/:postId', (req, res) => {
  res.json({
    id: '1',
    title: 'my title',
    subtitle: 'My subtitle',
    content: 'Content here 1',
  });
});

router.delete('/:postId', (req, res) => {
  res.json({
    id: '1',
    status: 'deleted',
  });
});


module.exports = router;
