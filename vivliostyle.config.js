module.exports = {
  language: 'ja',
  theme: 'theme.css',
  entry: [
    'example/slide.md'
  ],
  output: [
    'slide.pdf',
    {
      path: './slide',
      format: 'webpub',
    },
  ]
};