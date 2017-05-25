 import path from 'path'
 import htmlPlugIn from 'html-webpack-plugin'
 import extractText from 'extract-text-webpack-plugin'


 const extractCss = new extractText('main.css')

 const htmlPlug = new htmlPlugIn({
     template: './src/index.html',
     filename: 'index.html'
  })

 const paths = {
   src:  './src/scripts/app.html',
   dist: './dist/'
 }


module.exports = {
  entry: './src/scripts/App.jsx',

  output: {
    filename: 'app.js',
    path: path.join(__dirname, paths.dist),
    publicPath: '/dist/'

  },

module: {
  rules: [
    {
      test: /\.scss$/ , use: [

        {
          loader: 'style-loader'
        },

        {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]'
        }
      },
        {
          loader: 'sass-loader'
        }
      ]
    },
    {
      test: /\.jsx$/, exclude: /node_modules/  ,use: 'babel-loader'
    },

    {
      test: /\.js$/, exclude: /node_modules/  ,use: 'babel-loader'
    },

    {
      test: /\.svg$/, loader: 'raw-loader'
    }

  ]
},

plugins:[htmlPlug , extractCss],

devServer: {
  port: 3000,
  open: true,
  stats: 'errors-only'
}


}
