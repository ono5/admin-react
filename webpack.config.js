module.exports = {
  module: {
    devtool: 'source-map', // javascriptのデバッグ用
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(css|sass|scss)/, // testにてファイル名を検知する
        use: [
            {
                loader: MiniCssExtractPlugin.loader, // loaderは、下から適用されていくので、css-loaderより前に設定する
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-loader',
            },
        ]
      }
    ]
  }
}
