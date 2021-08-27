module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: '@import "@/sass/app.sass"'
        }
      }
    },
    chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
   
};