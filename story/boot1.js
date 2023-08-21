const RenJSConfig =  {
  'name': 'Quickstart',
  'w': 800,
  'h': 600,
    
  'renderer': Phaser.AUTO, // become renderer
  'scaleMode': Phaser.ScaleManager.SHOW_ALL,
  'loadingScreen': {
    'background': '/assets1/gui/loaderloaderbackground.png',
    'loadingBar': {
      'asset': '/assets1/gui/loaderloading-bar.png',
      'position': {
        'x': 109,
        'y': 458
      },
      'size': {
        'w': 578,
        'h': 82
      }
    }
  },
  'fonts': '/assets1/gui/fonts.css',
  'guiConfig': '/story/GUI.yaml',
  storyConfig: '/story/Config.yaml',
  storySetup: '/story/Setup1.yaml',
  'storyText': [
    '/story/Story1.yaml'
  ],
  'logChoices': true,

}

const RenJSGame = new RenJS.game(RenJSConfig)
RenJSGame.launch()
