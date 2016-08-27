// import gulp from 'gulp';
// import gutil from 'gulp-util';
// import concat from 'gulp-concat';
// import source from 'vinyl-source-stream';
// import browserify from 'browserify';
// import watchify from 'watchify';
// import reactify from 'reactify';
// import babelify from 'babelify';
// import uglify from 'gulp-uglify';
// import buffer from 'vinyl-buffer';
// import browserSync from 'browser-sync';
//
// // gulp.task('server', () => {
// //     browserSync({
// //         server: {
// //             baseDir: './'
// //         },
// //         port: 3000,
// //         open: 'local'
// //     });
// // });
//
// gulp.task('buildJS', function() {
//     var bundler = watchify(browserify({
//         entries: ['./js/app.jsx'],
//         transform: [babelify, reactify],
//         extensions: ['.jsx'],
//         debug: true
//     }));
//
//     function build(file) {
//         if (file) gutil.log('Recompiling ' + file);
//         return bundler
//             .bundle()
//             .on('error', gutil.log.bind(gutil, 'Browserify Error'))
//             .pipe(source('app.js'))
//             .pipe(buffer())
//             .pipe(uglify())
//             .pipe(gulp.dest('./'));
//     }
//     build();
//     bundler.on('update', build);
// });
//
// gulp.task('buildCSS', function() {
//     gulp.src('./css/parts/!*.css')
//         .pipe(concat('store.css'))
//         .pipe(gulp.dest('./css'))
// });
//
// gulp.task('watch', function(){
//     gulp.watch('./css/parts/!*.css', ['buildCSS']);
// });
//
// gulp.task('default', ['buildJS', /*'buildCSS',*/ 'watch'/*, 'server'*/]);
//
//
//
import gulp from 'gulp';
import concat from 'gulp-concat';
import watchify from 'watchify';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

gulp.task('buildJS', () => {
    let bundler = watchify(browserify({entries: './js/app.jsx', extensions: ['.jsx'], debug: true}));

    function makeABild(file){
            bundler
                .transform('babelify', {presets: ['es2015', 'react']})
                .bundle()
                .on('error', err => {
                    console.error(err);
                    this.emit('end');
                })
                .pipe(source('app.js'))
                .pipe(gulp.dest('./'));
    }

    makeABild();
    bundler.on('update', makeABild);


});

gulp.task('buildCSS', () => {
    gulp.src('./css/parts/*.css')
        .pipe(concat('portal.css'))
        .pipe(gulp.dest('./css'))
});

gulp.task('watch', () => {

    gulp.watch('./css/parts/!*.css', ['buildCSS'])
});

gulp.task('default', ['buildJS', 'buildCSS' ,'watch']);