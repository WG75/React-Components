import path from 'path'
import htmlPlugIn from 'html-webpack-plugin'
import extractText from 'extract-text-webpack-plugin'

const extractCss = new extractText('main.css')

const htmlPlug = new htmlPlugIn({template: './src/index.html', filename: 'index.html'})

const paths = {
	dist: './dist/'
}

const svgoQuery = "!svgo-loader?" + JSON.stringify({
  plugins: [{
    removeStyleElement: true
  }],
  floatPrecision: 2
});

module.exports = {
	entry: './src/app/App.jsx',

	output: {
		filename: 'app.js',
		path: path.join(__dirname, paths.dist)
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
					'autoprefixer-loader?browsers=last 2 version',
					'sass-loader?outputStyle=expanded&sourceMap'
				]
			}, {
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			}, {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'raw-loader' + svgoQuery,
			}
		]
	},

	resolve: {
		modules: [
			'src', 'node_modules'
		],
		extensions: ['.json', '.js', '.jsx']
	},
	plugins: [
		htmlPlug, extractCss
	],

	devServer: {
		port: 3000,
		open: true,
		stats: 'errors-only',
		contentBase: path.resolve(__dirname, '_temp/products/'),
		publicPath: '/'
	}

}
