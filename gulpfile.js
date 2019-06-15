const {src, dest} = require('gulp')
function copy() {
return src('src/style/main.scss').pipe(dest('dist'))
}

exports.copy = copy